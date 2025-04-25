"use client";

import OrbitalTechStack from "@/components/ui/OrbitalTechStack";
import { WidgetContainer } from "@/components/ui/WidgetContainer";
import { Text } from "@/components/ui/Text";

export function About() {
  return (
    <section id="about" className="section-padding container mx-auto">
      <div className="max-w-5xl mx-auto">
        <div className="grid gap-8 md:grid-cols-2">
          <WidgetContainer>
            <div className="space-y-6">
              <Text variant="h2" className="mb-4">About Me</Text>
              <Text variant="body" className="mb-4">
                I&apos;m a software engineer with a passion for building beautiful and functional web applications. I&apos;m currently pursuing my Bachelor&apos;s in Computer Science at Rutgers University, where I&apos;m expanding my knowledge in algorithms, data structures, and software engineering principles.
              </Text>
              <Text variant="body">
                When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source projects, or working on personal projects to improve my skills.
              </Text>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-primary inline-flex items-center justify-center gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                    <path d="M10 9H8" />
                    <path d="M16 13H8" />
                    <path d="M16 17H8" />
                  </svg>
                  View Resume
                </a>
                <a
                  href="/resume.pdf"
                  download
                  className="button-secondary inline-flex items-center justify-center gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Download Resume
                </a>
              </div>
            </div>
          </WidgetContainer>
          <div className="flex items-center justify-center relative min-h-[400px]">
            <OrbitalTechStack />
          </div>
        </div>
      </div>
    </section>
  );
} 