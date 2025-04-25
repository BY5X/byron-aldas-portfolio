"use client";

import { useEffect, useRef, useMemo } from 'react';
import styles from './OrbitalTechStack.module.css';
import Image from 'next/image';

interface Technology {
  name: string;
  icon: string;
  orbit: 'inner' | 'middle' | 'outer';
  angle: number;
}

const technologies: Technology[] = [
  { name: 'React', icon: '/icons/react.svg', orbit: 'inner', angle: 45 },
  { name: 'Next.js', icon: '/icons/nextjs.svg', orbit: 'inner', angle: 165 },
  { name: 'TypeScript', icon: '/icons/typescript.svg', orbit: 'inner', angle: 285 },
  { name: 'Node.js', icon: '/icons/nodejs.svg', orbit: 'middle', angle: 15 },
  { name: 'Python', icon: '/icons/python.svg', orbit: 'middle', angle: 105 },
  { name: 'Java', icon: '/icons/java.svg', orbit: 'middle', angle: 195 },
  { name: 'JavaScript', icon: '/icons/javascript.svg', orbit: 'middle', angle: 285 },
  { name: 'HTML', icon: '/icons/html.svg', orbit: 'outer', angle: 30 },
  { name: 'CSS', icon: '/icons/css.svg', orbit: 'outer', angle: 150 },
  { name: 'Git', icon: '/icons/git.svg', orbit: 'outer', angle: 270 },
];

const orbits = {
  inner: { radius: 80 },
  middle: { radius: 140 },
  outer: { radius: 200 },
};

export default function OrbitalTechStack() {
  const containerRef = useRef<HTMLDivElement>(null);

  const iconPositions = useMemo(() => {
    return technologies.map(tech => {
      const orbitConfig = orbits[tech.orbit];
      const angle = tech.angle * (Math.PI / 180);
      return {
        name: tech.name,
        icon: tech.icon,
        x: Math.round(Math.cos(angle) * orbitConfig.radius * 100) / 100,
        y: Math.round(Math.sin(angle) * orbitConfig.radius * 100) / 100,
      };
    });
  }, []);

  const orbitElements = useMemo(() => {
    return Object.entries(orbits).map(([orbit, config]) => (
      <div
        key={orbit}
        style={{
          position: 'absolute',
          width: config.radius * 2,
          height: config.radius * 2,
          borderRadius: '50%',
          border: '1px dashed rgba(255, 255, 255, 0.2)',
          pointerEvents: 'none',
        }}
      />
    ));
  }, []);

  return (
    <div className={styles['orbit-container']} ref={containerRef}>
      {orbitElements}
      {iconPositions.map((tech) => (
        <div
          key={tech.name}
          className={styles['icon-wrapper']}
          style={{
            transform: `translate(${tech.x}px, ${tech.y}px)`,
          }}
          title={tech.name}
        >
          <div className="flex items-center justify-center w-full h-full">
            <Image
              src={tech.icon}
              alt={tech.name}
              width={32}
              height={32}
              priority
              className="object-contain"
            />
          </div>
        </div>
      ))}
    </div>
  );
} 