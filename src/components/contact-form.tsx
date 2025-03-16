"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.message("Message sent!", {
      description: "We'll get back to you as soon as possible.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <motion.form
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <div>
        <Input
          type="text"
          name="name"
          placeholder="Twoje imię"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full"
        />
      </div>

      <div>
        <Input
          type="email"
          name="email"
          placeholder="Adres email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full"
        />
      </div>

      <div>
        <Input
          type="tel"
          name="phone"
          placeholder="Twój numer telefonu"
          value={formData.phone}
          onChange={handleChange}
          className="w-full"
        />
      </div>

      <div>
        <Textarea
          name="message"
          placeholder="Twoja wiadomość"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full min-h-[150px]"
        />
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </motion.form>
  );
}
