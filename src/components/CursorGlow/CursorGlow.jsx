import { useEffect, useState } from 'react';
import { Box } from '@mui/material';

const CursorDual = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <>
      {/* Inner dot */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 8,
          height: 8,
          borderRadius: '50%',
          background: '#3b82f6',
          transform: `translate(${pos.x - 4}px, ${pos.y - 4}px)`,
          pointerEvents: 'none',
          zIndex: 9999,
        }}
      />

      {/* Outer ring */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 36,
          height: 36,
          borderRadius: '50%',
          border: '2px solid rgba(59,130,246,0.5)',
          transform: `translate(${pos.x - 18}px, ${pos.y - 18}px)`,
          transition: 'transform 0.15s ease-out',
          pointerEvents: 'none',
          zIndex: 9998,
        }}
      />
    </>
  );
};

export default CursorDual;
