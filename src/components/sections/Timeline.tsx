"use client";

import { Text } from "@/components/ui/Text";

interface TimelineItem {
  date: string;
  title: string;
  description: string;
  type: "Education" | "Experience" | "Project" | "milestone";
  highlights?: string[];
}

const timelineData: TimelineItem[] = [
  {
    date: "Fall 2025",
    title: "Rutgers University - Computer Science",
    description: "Accepted to pursue a Bachelor of Arts (BA) in Computer Science at Rutgers University, New Brunswick. Selected for academic excellence and demonstrated potential in computer science.",
    type: "Education",
    highlights: [
      "Full-time Computer Science major",
      "Focus on Software Engineering and Data Science",
      "Member of the Class of 2029",
      "New Brunswick Campus",
      "School of Arts and Sciences"
    ]
  },
  {
    date: "2024",
    title: "DigitalHQ | Pinterest Growth Project",
    description: "Led a successful digital marketing initiative that significantly increased DigitalHQ's Pinterest presence and engagement through strategic optimization and design.",
    type: "Project",
    highlights: [
      "Increased Pinterest account from 0 to 1,200+ monthly views through data-driven strategy",
      "Implemented keyword optimization for improved discoverability",
      "Developed strategic pin scheduling for maximum engagement",
      "Created custom profile visuals (logo + banner) to establish strong brand identity",
      "Enhanced account professionalism and visual appeal through design"
    ]
  },
  {
    date: "2024",
    title: "Associate of Science in Computer Science",
    description: "Completed Associate's degree in Computer Science at Union College (UCNJ) with distinguished academic performance and recognition for excellence in the field.",
    type: "Education",
    highlights: [
      "Awarded the National Science Foundation Scholarship for academic excellence in CS",
      "President's High Honor List (Top Academic Achievement)",
      "Union County College, New Jersey",
      "Focus on Computer Science fundamentals and programming"
    ]
  },
  {
    date: "2023",
    title: "E & Y Party Time | Store Manager",
    description: "Led and optimized store operations while maintaining exceptional customer service standards and financial performance.",
    type: "Experience",
    highlights: [
      "Managed daily store operations, including inventory control, staff scheduling, and customer service, optimizing workflow efficiency",
      "Oversaw financial operations, including budgeting, cash flow management, and sales reporting, ensuring accuracy and fiscal accountability",
      "Addressed customer inquiries and resolved complaints promptly, enhancing satisfaction and fostering long-term client relationships",
      "Streamlined operational processes, reducing costs and improving overall productivity"
    ]
  }
];

export function Timeline() {
  return (
    <section id="timeline" className="section-padding">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="text-center space-y-4 mb-16">
            <Text variant="h2" className="section-title">My Journey</Text>
            <Text variant="body" color="muted" className="max-w-[600px] mx-auto">
              A timeline of my academic achievements and milestones.
            </Text>
          </div>

          <div className="relative">
            {/* Main vertical line */}
            <div className="absolute left-1/2 -translate-x-1/2 w-[3px] h-full bg-white/20 rounded-full" />

            <div className="space-y-16">
              {timelineData.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                >
                  {/* Horizontal connecting line */}
                  <div 
                    className={`absolute top-1/2 h-[2px] bg-white/20 rounded-full`}
                    style={{
                      width: '80px',
                      left: index % 2 === 0 ? 'calc(50% - 80px)' : '50%',
                      zIndex: 1
                    }}
                  />
                  
                  {/* Content card */}
                  <div
                    className={`w-5/12 p-6 rounded-lg bg-card border border-white/10 relative z-10 transition-all duration-200 hover:border-primary/30 ${
                      index % 2 === 0 ? "mr-auto" : "ml-auto"
                    }`}
                  >
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-primary">{item.date}</span>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                          {item.type}
                        </span>
                      </div>
                      <Text variant="h3" className="text-lg font-semibold">{item.title}</Text>
                      <Text variant="body" color="muted" className="text-sm leading-relaxed">{item.description}</Text>
                      {item.highlights && (
                        <ul className="mt-2 space-y-1">
                          {item.highlights.map((highlight, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                              <span className="w-1 h-1 rounded-full bg-primary/50" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 