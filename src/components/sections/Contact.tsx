"use client";

import { useState } from "react";
import { Text } from "@/components/ui/Text";
import { WidgetContainer } from "@/components/ui/WidgetContainer";
import { Button } from "@/components/ui/Button";

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (formData: FormData): FormErrors => {
    const errors: FormErrors = {};
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    if (!name?.trim()) {
      errors.name = "Name is required";
    }

    if (!email?.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Please enter a valid email address";
    }

    if (!message?.trim()) {
      errors.message = "Message is required";
    }

    return errors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
      };

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      alert("Message sent successfully!");
      e.currentTarget.reset();
      setErrors({});
    } catch (err) {
      alert("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <div className="flex flex-col items-center text-center space-y-8">
          <Text variant="h2" className="section-title">
            Get in Touch
          </Text>
          <Text variant="body" color="muted" className="max-w-[600px]">
            Have a question or want to work together? Feel free to reach out!
          </Text>

          <WidgetContainer className="max-w-lg w-full">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col items-start w-full">
                <label htmlFor="name" className="block text-sm font-medium mb-1 pl-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={`input w-full h-9 px-3 ${errors.name ? 'border-destructive focus-visible:ring-destructive/50' : ''}`}
                  placeholder="Your name"
                />
                {errors.name && (
                  <span className="text-sm text-destructive mt-1 pl-1 animate-fade-in-up">
                    {errors.name}
                  </span>
                )}
              </div>

              <div className="flex flex-col items-start w-full">
                <label htmlFor="email" className="block text-sm font-medium mb-1 pl-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={`input w-full h-9 px-3 ${errors.email ? 'border-destructive focus-visible:ring-destructive/50' : ''}`}
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <span className="text-sm text-destructive mt-1 pl-1 animate-fade-in-up">
                    {errors.email}
                  </span>
                )}
              </div>

              <div className="flex flex-col items-start w-full">
                <label htmlFor="message" className="block text-sm font-medium mb-1 pl-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  className={`input w-full resize-none px-3 ${errors.message ? 'border-destructive focus-visible:ring-destructive/50' : ''}`}
                  placeholder="Your message..."
                />
                {errors.message && (
                  <span className="text-sm text-destructive mt-1 pl-1 animate-fade-in-up">
                    {errors.message}
                  </span>
                )}
              </div>

              <Button type="submit" loading={isSubmitting} className="w-full h-9">
                Send Message
              </Button>
            </form>
            
            <div className="mt-6 pt-4 border-t border-border/50">
              <Text variant="small" color="muted" className="mb-4 text-center">
                Or connect with me on social media
              </Text>
              <div className="flex justify-center gap-3">
                <a 
                  href="mailto:isra5900@aldas.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 font-medium transition-all h-8 px-3 text-sm rounded-md border border-border bg-transparent hover:bg-accent hover:text-accent-foreground hover:scale-[1.02] active:scale-[0.98]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  Email
                </a>
                <a 
                  href="https://linkedin.com/in/byronaldas" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 font-medium transition-all h-8 px-3 text-sm rounded-md border border-border bg-transparent hover:bg-accent hover:text-accent-foreground hover:scale-[1.02] active:scale-[0.98]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  LinkedIn
                </a>
                <a 
                  href="https://github.com/byronaldas" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 font-medium transition-all h-8 px-3 text-sm rounded-md border border-border bg-transparent hover:bg-accent hover:text-accent-foreground hover:scale-[1.02] active:scale-[0.98]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          </WidgetContainer>
        </div>
      </div>
    </section>
  );
} 