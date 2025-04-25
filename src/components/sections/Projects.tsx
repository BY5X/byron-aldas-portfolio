"use client";

import { useState } from "react";

const projects = [
  {
    title: "Project One",
    description: "A full-stack web application built with Next.js and TypeScript.",
    tech: ["Next.js", "TypeScript", "TailwindCSS", "PostgreSQL"],
    link: "#",
    image: "/project1.jpg",
  },
  {
    title: "Project Two",
    description: "An interactive dashboard for data visualization and analytics.",
    tech: ["React", "D3.js", "Node.js", "Express"],
    link: "#",
    image: "/project2.jpg",
  },
  {
    title: "Project Three",
    description: "A real-time chat application with modern features.",
    tech: ["WebSocket", "React", "Node.js", "MongoDB"],
    link: "#",
    image: "/project3.jpg",
  },
];

export function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="section-padding">
      <div className="space-y-8 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl section-title">Projects</h2>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="card-hover group relative overflow-hidden rounded-lg border bg-card p-6 transition-all duration-300 ease-in-out hover:shadow-lg"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div 
                className={`absolute inset-0 bg-gradient-to-b from-transparent to-background/80 z-10 transition-opacity duration-300 ${
                  hoveredIndex === index ? 'opacity-80' : 'opacity-50'
                }`}
              />
              
              <div className="relative z-20 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="mt-2 text-muted-foreground">{project.description}</p>
                
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a
                  href={project.link}
                  className="mt-4 inline-flex items-center text-sm font-medium text-primary transition-transform duration-300 hover:translate-x-1"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 