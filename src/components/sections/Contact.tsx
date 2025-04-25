"use client";

import { useState } from "react";
import { Text } from "@/components/ui/Text";
import { WidgetContainer } from "@/components/ui/WidgetContainer";
import { Button } from "@/components/ui/Button";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      alert("Message sent successfully!");
      e.currentTarget.reset();
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

          <WidgetContainer className="max-w-xl w-full">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="input w-full"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="input w-full"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="input w-full resize-none"
                  placeholder="Your message..."
                />
              </div>

              <Button type="submit" loading={isSubmitting} className="w-full">
                Send Message
              </Button>
            </form>
          </WidgetContainer>
        </div>
      </div>
    </section>
  );
} 