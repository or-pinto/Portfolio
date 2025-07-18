'use client'
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const commands = [
  {
    indent: 0,
    line: [
      { text: 'def', style: { color: '#c678dd', fontWeight: 700 } },
      { text: ' ', style: {} },
      { text: 'retrieve_info', style: { color: '#61afef' } },
      { text: '():', style: { color: '#abb2bf' } },
    ]
  },
  {
    indent: 1,
    line: [
      { text: 'info', style: { color: '#e5c07b' } },
      { text: ' ', style: {} },
      { text: '=', style: { color: '#abb2bf' } },
      { text: ' ', style: {} },
      { text: 'fetch', style: { color: '#61afef' } },
      { text: '(', style: { color: '#abb2bf' } },
      { text: "'.this'", style: { color: '#98c379' } },
      { text: ')', style: { color: '#abb2bf' } },
    ]
  },
  {
    indent: 1,
    line: [
      { text: 'if', style: { color: '#c678dd', fontWeight: 700 } },
      { text: ' ', style: {} },
      { text: 'info', style: { color: '#e5c07b' } },
      { text: ':', style: { color: '#abb2bf' } },
    ]
  },
  {
    indent: 2,
    line: [
      { text: 'return', style: { color: '#c678dd', fontWeight: 700 } },
      { text: ' ', style: {} },
      { text: 'info', style: { color: '#e5c07b' } },
    ]
  },
  {
    indent: 1,
    line: [
      { text: 'else', style: { color: '#c678dd', fontWeight: 700 } },
      { text: ':', style: { color: '#abb2bf' } },
    ]
  },
  {
    indent: 2,
    line: [
      { text: 'return', style: { color: '#c678dd', fontWeight: 700 } },
      { text: ' ', style: {} },
      { text: 'None', style: { color: '#d19a66' } },
    ]
  },
  // Call the function
  {
    indent: 0,
    line: [
      { text: 'print', style: { color: '#61afef' } },
      { text: '(', style: { color: '#abb2bf' } },
      { text: 'retrieve_info', style: { color: '#61afef' } },
      { text: '()', style: { color: '#abb2bf' } },
      { text: ')', style: { color: '#abb2bf' } },
    ]
  },
];

export default function CommandPrompt() {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [gradient, setGradient] = useState('var(--background)');
  const containerRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current || !overlayRef.current) return;
      const overlayRect = overlayRef.current.getBoundingClientRect();
      // Only react if mouse is within overlay bounds
      if (
        e.clientX >= overlayRect.left &&
        e.clientX <= overlayRect.right &&
        e.clientY >= overlayRect.top &&
        e.clientY <= overlayRect.bottom
      ) {
        const boxRect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - boxRect.left;
        const y = e.clientY - boxRect.top;
        const centerX = boxRect.width / 2;
        const centerY = boxRect.height / 2;
        const relX = (x - centerX) / centerX;
        const relY = (y - centerY) / centerY;
        // Make the frame face TOWARD the mouse: positive relX tilts right, positive relY tilts down
        setRotation({ x: -relY * 10, y: relX * 10 });

        // Compute angle for gradient
        const angle = Math.atan2(relY, relX) * 180 / Math.PI + 90;
        // Compute blend factor for brightness (distance from center)
        const dist = Math.sqrt(relX * relX + relY * relY);
        // Clamp blend between 0 and 1, max at edge
        const blend = Math.min(dist, 1);
        // Base color and bright color
        const base = [20, 20, 20];
        const bright = [90, 90, 90];
        // Interpolate color
        const interp = (a, b) => Math.round(a + (b - a) * blend);
        const color1 = `rgb(${interp(base[0], bright[0])},${interp(base[1], bright[1])},${interp(base[2], bright[2])})`;
        const color2 = `rgb(${interp(base[0], 60)},${interp(base[1], 60)},${interp(base[2], 60)})`;
        setGradient(`linear-gradient(${angle}deg, var(--background) 0%, ${color2} 100%)`);
      } else {
        // Reset rotation and gradient when mouse leaves overlay
        setRotation({ x: 0, y: 0 });
        setGradient('var(--background)');
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="relative"
      style={{
        width: 500,
        maxWidth: '80vw',
        height: 300,
        perspective: 3000, // Maximum dramatic 3D effect
        perspectiveOrigin: '50% 50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Overlay for mouse tracking, 50px margin */}
      <div
        ref={overlayRef}
        style={{
          position: 'absolute',
          top: -50,
          left: -50,
          width: 500 + 100,
          height: 300 + 100,
          maxWidth: '100vw',
          zIndex: 10,
          pointerEvents: 'auto',
        }}
      />
      <div
        ref={containerRef}
        className='w-[550px] max-w-[80vw] h-auto border border-border rounded-md relative'
        style={{
          background: gradient,
          transformStyle: 'preserve-3d',
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(${rotation.x !== 0 || rotation.y !== 0 ? 1.03 : 1})`,
          transition: '0.1s linear',
          boxShadow: `${-rotation.y * 2}px ${rotation.x * 2}px 40px 0px rgba(0,0,0,0.25)`,
        }}
      >
        <div className='w-full h-fit text-center border-b border-b-border font-mono pointer-events-none select-none'>
          info.py
          <div className='w-24 h-6 absolute -mt-6 flex flex-row gap-2 items-center px-2'>
            <div className='bg-red-500 rounded-[50%] size-2'></div>
            <div className='bg-orange-500 rounded-[50%] size-2'></div>
            <div className='bg-green-500 rounded-[50%] size-2'></div>
          </div>
        </div>

        <div className='px-2 py-2 flex flex-col font-mono text-[15px]'>
          {commands.map((command, idx) => (
            <div key={idx} className="px-2 flex flex-row flex-wrap">
              {/* Indentation */}
              {command.indent > 0 && (
                <span style={{ display: 'inline-block', width: `${command.indent * 2}ch` }}>&nbsp;</span>
              )}
              {command.line.map((part, i) => (
                part.text === ' ' ? <span key={i}>&nbsp;</span> : <span key={i} style={part.style}>{part.text}</span>
              ))}
            </div>
          ))}

          <div className='bg-foreground_secondary border border-border rounded-md w-full h-auto mt-2 px-3 py-2'>
            <p className='text-foreground'>This was supposed to be a cool effect.</p>
            <p className='text-text_secondary'>=== Code Execution Successful ===</p>
          </div>
        </div>
      </div>
    </div>
  );
}
