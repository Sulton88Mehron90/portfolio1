// import { useCallback } from 'react';
// import Particles from 'react-particles';
// import { loadSlim } from 'tsparticles-slim';

// export default function ParticlesBackground() {
//   const particlesInit = useCallback(async (engine) => {
//     await loadSlim(engine);
//   }, []);

//   return (
//     <Particles
//       id="tsparticles"
//       options={{
//         background: { color: { value: 'transparent' } },
//         fpsLimit: 120,
//         interactivity: {
//           events: { onHover: { enable: true, mode: ['grab', 'bubble'] } },
//           modes: {
//             grab: { distance: 140, links: { opacity: 0.5 } },
//             bubble: { distance: 200, size: 8, duration: 2, opacity: 0.4, color: '#00FF94' },
//           },
//         },
//         particles: {
//           color: { value: '#2DD4BF' },
//           links: { color: '#2DD4BF', distance: 150, enable: true, opacity: 0.2, width: 1 },
//           move: { enable: true, random: true, speed: 1, straight: false },
//           number: { density: { enable: true, area: 800 }, value: 80 },
//           opacity: { value: 0.3 },
//           shape: { type: 'circle' },
//           size: { value: { min: 1, max: 3 } },
//         },
//         detectRetina: true,
//       }}
//       init={particlesInit}
//     />
//   );
// }

'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Particles from 'react-particles';
import { loadSlim } from 'tsparticles-slim';

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const glowRef = useRef(null);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMouseX(event.clientX);
      setMouseY(event.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        ref={glowRef}
        className="glow-effect"
        style={{
          left: `${mouseX}px`,
          top: `${mouseY}px`,
        }}
      />
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: { value: 'transparent' } },
          fpsLimit: 120,
          interactivity: {
            events: { onHover: { enable: true, mode: ['grab', 'bubble'] } },
            modes: {
              grab: { distance: 140, links: { opacity: 0.5 } },
              bubble: { distance: 200, size: 8, duration: 2, opacity: 0.4, color: '#00FF94' },
            },
          },
          particles: {
            color: { value: '#2DD4BF' },
            links: { color: '#2DD4BF', distance: 150, enable: true, opacity: 0.2, width: 1 },
            move: { enable: true, random: true, speed: 1, straight: false },
            number: { density: { enable: true, area: 800 }, value: 80 },
            opacity: { value: 0.3 },
            shape: { type: 'circle' },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,
        }}
      />
    </>
  );
}

