"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Sample product data
const products = [
  {
    id: 1,
    name: "Modern Matte White",
    description:
      "Sleek and minimalist matte white fronts for a contemporary look.",
    image: "/main1.jpg",
    color: "White",
  },
  {
    id: 2,
    name: "Glossy Anthracite",
    description:
      "Elegant high-gloss anthracite fronts that add sophistication to any space.",
    image: "/main2.jpg",
    color: "Dark neutral",
  },
  {
    id: 3,
    name: "Pastel Blue",
    description:
      "Soft pastel blue fronts that create a calming and inviting atmosphere.",
    image: "/main3.jpg",
    color: "Light Blue",
  },
  {
    id: 4,
    name: "Rich Burgundy",
    description:
      "Deep burgundy fronts that add warmth and luxury to your interior.",
    image: "/main4.webp",
    color: "Burgundy",
  },
  {
    id: 5,
    name: "Forest Green",
    description:
      "Sophisticated forest green fronts for a natural and elegant look.",
    image: "/main2.jpg",
    color: "Dark Green",
  },
  {
    id: 6,
    name: "Metallic Gold",
    description: "Luxurious metallic gold fronts that make a bold statement.",
    image: "/main3.jpg",
    color: "Gold",
  },
];

export default function ProductShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleNext = () => {
    if (isAnimating) return;
    setDirection(1);
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setDirection(-1);
    setIsAnimating(true);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + products.length) % products.length
    );
  };

  const handleDotClick = (index: number) => {
    if (isAnimating) return;
    setDirection(index > currentIndex ? 1 : -1);
    setIsAnimating(true);
    setCurrentIndex(index);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      handleNext();
    } else if (touchEndX.current - touchStartX.current > 50) {
      handlePrev();
    }
  };

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, isAnimating]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
    }),
  };

  return (
    <div className="relative overflow-hidden">
      <div
        className="relative h-[500px] md:h-[600px] w-full rounded-xl overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence
          initial={false}
          custom={direction}
          onExitComplete={() => setIsAnimating(false)}
        >
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute inset-0"
          >
            <div className="relative h-full w-full">
              <Image
                src={products[currentIndex].image || "/placeholder.svg"}
                alt={products[currentIndex].name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 md:p-10 text-white">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">
                    {products[currentIndex].name}
                  </h3>
                  <p className="text-white/80 mb-4 max-w-md">
                    {products[currentIndex].description}
                  </p>
                  <div className="flex items-center mb-4">
                    <span className="mr-2">Color:</span>
                    <span className="font-medium">
                      {products[currentIndex].color}
                    </span>
                  </div>
                  <Button variant="default" size="lg">
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white dark:bg-neutral-800/80 dark:hover:bg-neutral-800 border-none rounded-full h-10 w-10 z-10"
        onClick={handlePrev}
        disabled={isAnimating}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white dark:bg-neutral-800/80 dark:hover:bg-neutral-800 border-none rounded-full h-10 w-10 z-10"
        onClick={handleNext}
        disabled={isAnimating}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {products.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={cn(
              "h-2 w-2 rounded-full transition-all duration-300",
              index === currentIndex
                ? "bg-primary w-6"
                : "bg-neutral-300 dark:bg-neutral-600 hover:bg-neutral-400 dark:hover:bg-neutral-2000"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
