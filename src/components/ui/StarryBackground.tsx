"use client";

import { useEffect, useState } from "react";

export function StarryBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none -z-10">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-background/80">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(white, rgba(255,255,255,.4) 2px, transparent 40px),
              radial-gradient(white, rgba(255,255,255,.3) 1px, transparent 30px),
              radial-gradient(white, rgba(255,255,255,.2) 2px, transparent 40px)
            `,
            backgroundSize: '550px 550px, 350px 350px, 250px 250px',
            backgroundPosition: '0 0, 40px 60px, 130px 270px',
            animation: 'twinkle 8s ease-in-out infinite'
          }} />
        </div>
      </div>
    </div>
  );
} 