"use client";

import { Text } from "@/components/ui/Text";
import { WidgetContainer } from "@/components/ui/WidgetContainer";

export function Hero() {
  return (
    <section className="min-h-[85vh] flex items-center justify-center section-padding">
      <div className="container">
        <div className="flex flex-col items-center text-center space-y-8">
          <WidgetContainer className="relative max-w-3xl mx-auto">
            <div className="absolute -top-2 -right-2 sm:top-0 sm:right-0 w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-card border border-border/50 shadow-lg flex items-center justify-center">
              <svg
                className="w-12 h-12 sm:w-16 sm:h-16 text-muted-foreground"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="pr-20 sm:pr-28">
              <Text variant="h1" className="mb-4">
                Hi, I&apos;m Byron Aldas
              </Text>
              <Text variant="body" className="mb-6">
                I&apos;m a software engineer passionate about building beautiful and functional web applications. I&apos;m currently seeking new opportunities.
              </Text>
            </div>
          </WidgetContainer>
        </div>
      </div>
    </section>
  );
} 