import { defineConfig, loadEnv, type Plugin } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import { loadDemoMailConfig, processDemoRequest, type DemoMailInput } from "./server/demoMail.ts"

function readJsonBody(req: import("http").IncomingMessage): Promise<unknown> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = []
    req.on("data", (c) => chunks.push(Buffer.isBuffer(c) ? c : Buffer.from(c)))
    req.on("end", () => {
      const raw = Buffer.concat(chunks).toString("utf8")
      if (!raw) {
        resolve({})
        return
      }
      try {
        resolve(JSON.parse(raw))
      } catch {
        reject(new Error("Invalid JSON body"))
      }
    })
    req.on("error", reject)
  })
}

/** Local stand-in for Vercel `/api/demo-request` — uses non-VITE_ env secrets only. */
function localDemoApi(env: Record<string, string>): Plugin {
  return {
    name: "local-demo-api",
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const path = req.url?.split("?")[0]
        if (path !== "/api/demo-request") {
          next()
          return
        }

        res.setHeader("Content-Type", "application/json")
        res.setHeader("Cache-Control", "no-store")

        if (req.method === "OPTIONS") {
          res.statusCode = 204
          res.end()
          return
        }

        if (req.method !== "POST") {
          res.statusCode = 405
          res.end(JSON.stringify({ message: "Method not allowed" }))
          return
        }

        try {
          const body = (await readJsonBody(req)) as DemoMailInput
          const result = await processDemoRequest(body, loadDemoMailConfig(env))
          if (!result.ok) {
            res.statusCode = result.status
            res.end(JSON.stringify({ sent: false, message: result.message }))
            return
          }
          res.statusCode = 200
          res.end(JSON.stringify({ sent: result.sent, message: result.message }))
        } catch (err) {
          console.error(err)
          res.statusCode = 500
          res.end(JSON.stringify({ message: "Unexpected server error" }))
        }
      })
    },
  }
}

export default defineConfig(({ mode }) => {
  // Empty prefix loads all env keys — including RESEND_* (not exposed to client).
  const env = loadEnv(mode, process.cwd(), "")

  return {
    plugins: [react(), tailwindcss(), localDemoApi(env)],
    server: {
      port: 5174,
    },
  }
})
