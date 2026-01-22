
import React, { useEffect, useRef, useState } from 'react';

const CustomCursor: React.FC = () => {
  const pointsRef = useRef(Array.from({ length: 8 }).map(() => ({ x: 0, y: 0 })));
  const targetRef = useRef({ x: 0, y: 0 });
  const requestRef = useRef<number>(null);
  const cursorRefs = useRef<(HTMLDivElement | null)[]>([]);
  const dotRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768 || ('ontouchstart' in window);
      setIsMobile(mobile);
      return mobile;
    };
    
    if (checkMobile()) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      let prevX = targetRef.current.x;
      let prevY = targetRef.current.y;

      pointsRef.current.forEach((point, i) => {
        point.x += (prevX - point.x) * (1 / (i + 1.5));
        point.y += (prevY - point.y) * (1 / (i + 1.5));
        prevX = point.x;
        prevY = point.y;
      });

      // Atualização direta via Refs cacheados (sem querySelectorAll)
      cursorRefs.current.forEach((el, i) => {
        const point = pointsRef.current[i];
        if (el && point) {
          el.style.left = `${point.x}px`;
          el.style.top = `${point.y}px`;
        }
      });

      if (dotRef.current) {
        dotRef.current.style.left = `${targetRef.current.x}px`;
        dotRef.current.style.top = `${targetRef.current.y}px`;
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  if (isMobile) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      {pointsRef.current.map((_, i) => (
        <div
          key={i}
          ref={(el) => { cursorRefs.current[i] = el; }}
          className="cursor-trail-point absolute rounded-full blur-[25px] mix-blend-multiply transition-opacity duration-300"
          style={{
            width: `${80 - i * 8}px`,
            height: `${80 - i * 8}px`,
            transform: 'translate(-50%, -50%)',
            backgroundColor: i % 2 === 0 ? 'rgba(236, 72, 153, 0.4)' : 'rgba(168, 85, 247, 0.4)',
            opacity: 1 - (i * 0.12),
          }}
        />
      ))}
      <div 
        id="cursor-dot"
        ref={dotRef}
        className="absolute w-2 h-2 bg-black rounded-full mix-blend-difference"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
    </div>
  );
};

export default CustomCursor;
