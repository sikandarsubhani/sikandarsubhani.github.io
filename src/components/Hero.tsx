import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    // Scene setup
    sceneRef.current = new THREE.Scene();
    cameraRef.current = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    rendererRef.current = new THREE.WebGLRenderer({ alpha: true });
    rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(rendererRef.current.domElement);

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 5000;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 5;
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3)
    );

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.005,
      color: "#287050",
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    sceneRef.current.add(particlesMesh);

    cameraRef.current.position.z = 2;

    // Mouse movement effect
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX / window.innerWidth - 0.5;
      mouseY = event.clientY / window.innerHeight - 0.5;
    };

    document.addEventListener("mousemove", handleMouseMove);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      if (particlesMesh && cameraRef.current && rendererRef.current && sceneRef.current) {
        particlesMesh.rotation.y += 0.001;
        particlesMesh.rotation.x += 0.001;

        cameraRef.current.position.x += (mouseX * 0.5 - cameraRef.current.position.x) * 0.05;
        cameraRef.current.position.y += (-mouseY * 0.5 - cameraRef.current.position.y) * 0.05;

        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    };

    animate();

    // Cleanup
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      if (container && rendererRef.current) {
        container.removeChild(rendererRef.current.domElement);
      }
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      <div ref={containerRef} className="absolute inset-0 z-0" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold mb-6 text-primary"
        >
          Muhammad Sikandar Subhani
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-muted-foreground mb-8"
        >
          Web Developer & AI Enthusiast
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex gap-4 justify-center"
        >
          <a 
            href="#contact" 
            className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Get in Touch
          </a>
          <a 
            href="#projects" 
            className="bg-secondary hover:bg-secondary/90 text-white px-6 py-3 rounded-lg transition-colors"
          >
            View Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
};