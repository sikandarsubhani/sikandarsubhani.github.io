import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const Globe = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Create globe
    const geometry = new THREE.SphereGeometry(3, 64, 64);
    const material = new THREE.MeshPhongMaterial({
      color: 0x6E59A5,
      emissive: 0x221F26,
      specular: 0x8B5CF6,
      shininess: 100,
      opacity: 0.9,
      transparent: true,
    });
    
    const globe = new THREE.Mesh(geometry, material);
    scene.add(globe);

    // Add lights
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x8B5CF6, 2);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    camera.position.z = 8;

    // Handle mouse movement
    const handleMouseMove = (event: MouseEvent) => {
      mousePosition.current = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1
      };
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      // Magnetic effect
      const targetX = mousePosition.current.x * 0.3;
      const targetY = mousePosition.current.y * 0.3;
      globe.rotation.x += 0.005;
      globe.rotation.y += 0.005;
      globe.position.x += (targetX - globe.position.x) * 0.1;
      globe.position.y += (targetY - globe.position.y) * 0.1;

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 -z-10" />;
};