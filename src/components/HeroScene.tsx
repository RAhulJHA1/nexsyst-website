import { Canvas, useFrame } from "@react-three/fiber"
import { ContactShadows, Environment, Float, MeshDistortMaterial, Sparkles } from "@react-three/drei"
import { Suspense, useMemo, useRef } from "react"
import type { Group, Mesh } from "three"
import * as THREE from "three"

function CoreSculpture({ reduce }: { reduce: boolean }) {
  const group = useRef<Group>(null)
  const ringA = useRef<Mesh>(null)
  const ringB = useRef<Mesh>(null)
  const shell = useRef<Mesh>(null)

  useFrame((state, delta) => {
    if (reduce || !group.current) return
    const t = state.clock.elapsedTime
    group.current.rotation.y += delta * 0.22
    group.current.rotation.x = Math.sin(t * 0.35) * 0.12
    if (ringA.current) ringA.current.rotation.z -= delta * 0.42
    if (ringB.current) {
      ringB.current.rotation.x += delta * 0.18
      ringB.current.rotation.y -= delta * 0.12
    }
    if (shell.current) shell.current.rotation.y -= delta * 0.08
  })

  const particles = useMemo(
    () =>
      Array.from({ length: 42 }, (_, i) => {
        const a = (i / 42) * Math.PI * 2
        const r = 1.7 + (i % 6) * 0.14
        return {
          key: i,
          position: [
            Math.cos(a) * r,
            Math.sin(a * 1.4) * (0.85 + (i % 5) * 0.12),
            Math.sin(a) * r * 0.75,
          ] as [number, number, number],
          scale: 0.015 + (i % 5) * 0.006,
          color: i % 3 === 0 ? "#00e5ff" : i % 3 === 1 ? "#a78bfa" : "#ffffff",
        }
      }),
    [],
  )

  return (
    <group ref={group} position={[0.28, 0.15, 0]}>
      <Float speed={reduce ? 0 : 1.4} rotationIntensity={0.25} floatIntensity={0.75}>
        <mesh castShadow>
          <icosahedronGeometry args={[1.12, 1]} />
          <MeshDistortMaterial
            color="#5b54f0"
            emissive="#00e5ff"
            emissiveIntensity={0.55}
            roughness={0.18}
            metalness={0.92}
            distort={reduce ? 0.04 : 0.32}
            speed={reduce ? 0 : 1.6}
            clearcoat={1}
            clearcoatRoughness={0.15}
          />
        </mesh>

        <mesh ref={shell} scale={1.08}>
          <icosahedronGeometry args={[1.12, 1]} />
          <meshBasicMaterial color="#00e5ff" wireframe transparent opacity={0.14} />
        </mesh>
      </Float>

      <mesh ref={ringA} rotation={[Math.PI / 2.35, 0.15, 0]}>
        <torusGeometry args={[1.62, 0.022, 24, 160]} />
        <meshStandardMaterial
          color="#00e5ff"
          emissive="#00e5ff"
          emissiveIntensity={0.9}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>

      <mesh ref={ringB} rotation={[0.55, 0.9, 0.25]}>
        <torusGeometry args={[2.05, 0.012, 16, 140]} />
        <meshStandardMaterial
          color="#7c3aed"
          emissive="#7c3aed"
          emissiveIntensity={0.7}
          metalness={0.7}
          roughness={0.25}
          transparent
          opacity={0.85}
        />
      </mesh>

      <mesh rotation={[-0.3, 0.4, 1.1]}>
        <torusGeometry args={[2.35, 0.006, 12, 100]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.18} />
      </mesh>

      {particles.map((p) => (
        <mesh key={p.key} position={p.position} scale={p.scale}>
          <sphereGeometry args={[1, 10, 10]} />
          <meshBasicMaterial color={p.color} transparent opacity={0.85} />
        </mesh>
      ))}

      {!reduce && (
        <>
          <Sparkles count={55} scale={6.2} size={2.6} speed={0.28} opacity={0.55} color="#00e5ff" />
          <Sparkles count={25} scale={5.2} size={1.8} speed={0.4} opacity={0.35} color="#7c3aed" />
        </>
      )}
    </group>
  )
}

function SceneLights() {
  const accent = useRef<THREE.PointLight>(null)
  useFrame((state) => {
    if (!accent.current) return
    const t = state.clock.elapsedTime
    accent.current.position.x = Math.sin(t * 0.6) * 2.2
    accent.current.position.y = 1.2 + Math.cos(t * 0.45) * 0.6
  })
  return (
    <>
      <ambientLight intensity={0.28} />
      <directionalLight position={[5, 6, 3]} intensity={1.35} color="#f8fbff" castShadow />
      <pointLight ref={accent} position={[2, 1.4, 2.5]} intensity={1.4} color="#00e5ff" distance={10} />
      <pointLight position={[-3.2, -1.5, -2]} intensity={1.1} color="#7c3aed" distance={12} />
      <spotLight position={[0, 6, 2]} angle={0.45} penumbra={0.6} intensity={0.55} color="#ffffff" />
    </>
  )
}

export function HeroScene({ reduceMotion = false }: { reduceMotion?: boolean }) {
  return (
    <div
      className="relative h-[min(64vh,560px)] w-full lg:h-[min(82vh,760px)] lg:min-w-0 lg:scale-[1.06] lg:origin-right"
      style={{
        WebkitMaskImage:
          "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.35) 10%, #000 22%, #000 100%)",
        maskImage:
          "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.35) 10%, #000 22%, #000 100%)",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-[8%] rounded-full bg-[radial-gradient(circle,rgba(0,229,255,0.22)_0%,rgba(108,99,255,0.12)_42%,transparent_70%)] blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-[18%] bottom-[8%] h-24 rounded-[100%] bg-accent/20 blur-3xl"
      />
      <Canvas
        dpr={[1, 1.75]}
        camera={{ position: [0.15, 0.35, 5.15], fov: 38 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        style={{ background: "transparent" }}
        className="!pointer-events-none lg:!pointer-events-auto"
      >
        <Suspense fallback={null}>
          <SceneLights />
          <CoreSculpture reduce={reduceMotion} />
          <ContactShadows
            position={[0.28, -1.65, 0]}
            opacity={0.35}
            scale={8}
            blur={2.6}
            far={4}
            color="#050816"
          />
          <Environment preset="city" environmentIntensity={0.35} />
        </Suspense>
      </Canvas>
    </div>
  )
}
