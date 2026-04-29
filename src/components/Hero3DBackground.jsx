// "use client";

// import { Canvas } from "@react-three/fiber";
// import { Float, Environment } from "@react-three/drei";
// import { EffectComposer, Bloom } from "@react-three/postprocessing";

// function Rings() {
//   return (
//     <>
//       {/* 🔥 MAIN HERO RING (slow + elegant tilt) */}
//       <Float speed={0.6} rotationIntensity={0.2} floatIntensity={0.6}>
//         <mesh
//           position={[-3.2, 0.3, -2.5]}
//           rotation={[0.4, 0.8, 0.2]} // 🔥 different axis
//         >
//           <torusGeometry args={[2.9, 0.18, 32, 200]} />
//           <meshStandardMaterial
//             color="#EAD7A0"
//             metalness={1}
//             roughness={0.28}
//             envMapIntensity={3}
//             emissive="#FFD27F"
//             emissiveIntensity={0.12}
//           />
//         </mesh>
//       </Float>

//       {/* 🔥 RIGHT RING (vertical spin style) */}
//       <Float speed={0.9} rotationIntensity={0.5} floatIntensity={0.5}>
//         <mesh
//           position={[4.2, 1.2, -4.5]}
//           rotation={[1.2, 0.2, 1.4]} // 🔥 vertical feel
//         >
//           <torusGeometry args={[2.2, 0.12, 64, 200]} />
//           <meshStandardMaterial
//             color="#EAD7A0"
//             metalness={1}
//             roughness={0.28}
//             envMapIntensity={3}
//             emissive="#FFD27F"
//             emissiveIntensity={0.12}
//           />
//         </mesh>
//       </Float>

//       {/* 🔥 SMALL RING (fast + playful rotation) */}
//       <Float speed={1.4} rotationIntensity={0.8} floatIntensity={0.7}>
//         <mesh
//           position={[1.2, -2.6, -6]}
//           rotation={[0.9, 1.1, 0.4]} // 🔥 different direction
//         >
//           <torusGeometry args={[1.2, 0.08, 64, 180]} />
//           <meshStandardMaterial
//             color="#EAD7A0"
//             metalness={1}
//             roughness={0.28}
//             envMapIntensity={3}
//             emissive="#FFD27F"
//             emissiveIntensity={0.12}
//           />
//         </mesh>
//       </Float>

//       {/* 💡 LIGHTING */}
//       <ambientLight intensity={0.05} />

//       <directionalLight
//         position={[-12, 5, 5]}
//         intensity={3.2}
//         color="#FFD27F"
//       />

//       <directionalLight
//         position={[3, 2, 3]}
//         intensity={0.4}
//         color="#ffffff"
//       />

//       <directionalLight
//         position={[0, 0, -6]}
//         intensity={1}
//         color="#FFD27F"
//       />

//       {/* 🌍 REFLECTION */}
//       <Environment preset="sunset" />
//     </>
//   );
// }

// export default function Hero3DBackground() {
//   return (
//     <div className="absolute inset-0 z-0 pointer-events-none">
//       <Canvas camera={{ position: [0, 0, 8.5], fov: 42 }}>
//         <Rings />

//         {/* 🔥 BLOOM MAGIC */}
//         <EffectComposer>
//           <Bloom
//             intensity={1.1}
//             luminanceThreshold={0.22} // 👈 only brightest parts glow
//             luminanceSmoothing={0.85}
//             radius={0.7}
//           />
//         </EffectComposer>
//       </Canvas>
//     </div>
//   );
// }
