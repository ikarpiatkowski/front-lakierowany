"use client";

import { motion } from "motion/react";
import {
  Shield,
  Palette,
  Clock,
  Leaf,
  Hammer,
  Zap,
  Smartphone,
  Award,
  Heart,
  Truck,
  Settings,
  Users,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  className?: string;
  titleGradient?: string;
  iconColor?: string;
}

export default function FeatureCard({
  title,
  description,
  icon,
  className,
  titleGradient = "from-primary to-primary-600",
  iconColor = "text-primary",
}: FeatureCardProps) {
  const icons: Record<string, LucideIcon> = {
    Shield,
    Palette,
    Clock,
    Leaf,
    Hammer,
    Zap,
    Smartphone,
    Award,
    Heart,
    Truck,
    Settings,
    Users,
  };

  const IconComponent = icons[icon] || Shield;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.01 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className={cn(
        "bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-md border border-neutral-100 dark:border-neutral-700 transition-all duration-300",
        className
      )}
    >
      <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
        <IconComponent className={cn("h-6 w-6", iconColor)} />
      </div>
      <h3
        className={cn(
          "text-xl font-semibold mb-2 bg-gradient-to-r bg-clip-text text-transparent",
          titleGradient
        )}
      >
        {title}
      </h3>
      <p className="text-neutral-600 dark:text-neutral-300">{description}</p>
    </motion.div>
  );
}
