"use client";

import { Text } from "@/components/ui/Text";
import { WidgetContainer } from "@/components/ui/WidgetContainer";

export function Hero() {
  return (
    <section className="min-h-[85vh] flex items-center justify-center section-padding">
      <div className="container">
        <div className="flex flex-col items-center text-center space-y-8">
          <WidgetContainer className="relative max-w-3xl mx-auto">
            <div className="absolute -top-2 -right-2 sm:top-4 sm:right-4 w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-card border border-border/50 shadow-lg flex items-center justify-center">
              <svg
                className="w-10 h-10 sm:w-14 sm:h-14 text-muted-foreground"
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
            <div className="pr-16 sm:pr-24">
              <Text variant="small" color="muted" className="mb-2">
                Hello, my name is
              </Text>
              <Text variant="h1" className="mb-4">
                Byron Aldas
              </Text>
              <Text variant="body" className="mb-6">
                I&apos;m a back-end developer passionate about building beautiful and functional web applications. I&apos;m currently seeking new opportunities.
              </Text>
            </div>
          </WidgetContainer>
        </div>
      </div>
    </section>
  );
} 