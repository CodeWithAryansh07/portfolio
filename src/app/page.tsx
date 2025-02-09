"use client"

import Bento from "@/components/Bento";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import React from "react";

// import { Canvas } from "@react-three/fiber"
// import { HyperText } from "@/components/magicui/hyper-text";


export default function Home() {

  const [open, setOpen] = React.useState(false);

  return (
    // <div id='canvas-container' style={{ width: '100vw', height: '100vh' }}>
    //   <Canvas camera={{ position: [0, 0, 5] }} style={{ backgroundColor: 'lightblue', width: '100%', height: '100%' }}>
    //     {/* <PerspectiveCamera position={[0, 0, 5]} /> */}
    //     {/* <ambientLight intensity={1} /> */}
    //     <mesh>
    //       <boxGeometry args={[2, 2, 1]} />
    //       <meshBasicMaterial color='green' />
    //     </mesh>
    //   </Canvas>    
    // </div>
    // <HyperText>Hover me!</HyperText>
    <>
      <Navbar open={open} setOpen={setOpen} />
      {!open && (
        <>
          <Hero />
          <Bento />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}
