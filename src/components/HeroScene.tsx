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
    group.current.rotation.y += delta * 0.18
    group.current.rotation.x = Math.sin(t * 0.35) * 0.1
    if (ringA.current) ringA.current.rotation.z -= delta * 0.38
    if (ringB.current) {
      ringB.current.rotation.x += delta * 0.16
      ringB.current.rotation.y -= delta * 0.1
    }
    if (shell.current) shell.current.rotation.y -= delta * 0.07
  })

  const particles = useMemo(
    () =>
      Array.from({ length: 56 }, (_, i) => {
        const a = (i / 56) * Math.PI * 2
        const r = 2.05 + (i % 7) * 0.16
        return {
          key: i,
          position: [
            Math.cos(a) * r,
            Math.sin(a * 1.35) * (1.05 + (i % 5) * 0.14),
            Math.sin(a) * r * 0.8,
          ] as [number, number, number],
          scale: 0.018 + (i % 5) * 0.007,
          color: i % 3 === 0 ? "#00e5ff" : i % 3 === 1 ? "#a78bfa" : "#ffffff",
        }
      }),
    [],
  )

  return (
    <group ref={group} position={[1.55, 0.1, 0]} scale={1.35}>
      <Float speed={reduce ? 0 : 1.25} rotationIntensity={0.22} floatIntensity={0.7}>
        <mesh castShadow>
          <icosahedronGeometry args={[1.15, 1]} />
          <MeshDistortMaterial
            color="#5b54f0"
            emissive="#00e5ff"
            emissiveIntensity={0.55}
            roughness={0.18}
            metalness={0.92}
            distort={reduce ? 0.04 : 0.3}
            speed={reduce ? 0 : 1.5}
            clearcoat={1}
            clearcoatRoughness={0.15}
          />
        </mesh>

        <mesh ref={shell} scale={1.09}>
          <icosahedronGeometry args={[1.15, 1]} />
          <meshBasicMaterial color="#00e5ff" wireframe transparent opacity={0.16} />
        </mesh>
      </Float>

      <mesh ref={ringA} rotation={[Math.PI / 2.35, 0.15, 0]}>
        <torusGeometry args={[1.72, 0.024, 24, 180]} />
        <meshStandardMaterial
          color="#00e5ff"
          emissive="#00e5ff"
          emissiveIntensity={0.95}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>

      <mesh ref={ringB} rotation={[0.55, 0.9, 0.25]}>
        <torusGeometry args={[2.2, 0.014, 16, 160]} />
        <meshStandardMaterial
          color="#7c3aed"
          emissive="#7c3aed"
          emissiveIntensity={0.75}
          metalness={0.7}
          roughness={0.25}
          transparent
          opacity={0.85}
        />
      </mesh>

      <mesh rotation={[-0.3, 0.4, 1.1]}>
        <torusGeometry args={[2.55, 0.007, 12, 120]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.2} />
      </mesh>

      {particles.map((p) => (
        <mesh key={p.key} position={p.position} scale={p.scale}>
          <sphereGeometry args={[1, 10, 10]} />
          <meshBasicMaterial color={p.color} transparent opacity={0.85} />
        </mesh>
      ))}

      {!reduce && (
        <>
          <Sparkles count={70} scale={7.5} size={2.8} speed={0.26} opacity={0.55} color="#00e5ff" />
          <Sparkles count={36} scale={6.4} size={2} speed={0.38} opacity={0.35} color="#7c3aed" />
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
    accent.current.position.x = 1.4 + Math.sin(t * 0.55) * 2.4
    accent.current.position.y = 1.2 + Math.cos(t * 0.4) * 0.7
  })
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[6, 7, 4]} intensity={1.4} color="#f8fbff" castShadow />
      <pointLight ref={accent} position={[3, 1.4, 2.5]} intensity={1.5} color="#00e5ff" distance={14} />
      <pointLight position={[-2.5, -1.5, -2]} intensity={1.15} color="#7c3aed" distance={14} />
      <spotLight position={[1.5, 7, 3]} angle={0.5} penumbra={0.65} intensity={0.6} color="#ffffff" />
    </>
  )
}

export function HeroScene({ reduceMotion = false }: { reduceMotion?: boolean }) {
  return (
    <div className="absolute inset-0 h-full w-full">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_45%,rgba(0,229,255,0.16)_0%,rgba(108,99,255,0.1)_38%,transparent_68%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[12%] right-[18%] h-40 w-[42%] rounded-[100%] bg-accent/15 blur-3xl"
      />
      <Canvas
        dpr={[1, 1.75]}
        camera={{ position: [0.2, 0.2, 6.2], fov: 42 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        style={{ background: "transparent", width: "100%", height: "100%" }}
        className="h-full w-full"
      >
        <Suspense fallback={null}>
          <SceneLights />
          <CoreSculpture reduce={reduceMotion} />
          <ContactShadows
            position={[1.55, -2.15, 0]}
            opacity={0.32}
            scale={14}
            blur={2.8}
            far={5}
            color="#050816"
          />
          <Environment preset="city" environmentIntensity={0.32} />
        </Suspense>
      </Canvas>
    </div>
  )
}
