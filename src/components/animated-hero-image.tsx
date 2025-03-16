"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useAnimation, AnimatePresence } from "motion/react";

interface AnimatedHeroImageProps {
  images?: string[];
  alt: string;
}

// Default images to cycle through
const defaultImages = [
  "/placeholder.svg?height=1080&width=1920&text=Elegant+Lacquered+Fronts",
  "/placeholder.svg?height=1080&width=1920&text=Premium+Kitchen+Designs",
  "/placeholder.svg?height=1080&width=1920&text=Custom+Solutions",
  "/placeholder.svg?height=1080&width=1920&text=Modern+Aesthetics",
];

export default function AnimatedHeroImage({
  images = defaultImages,
  alt,
}: AnimatedHeroImageProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const controls = useAnimation();

  // Enhanced zoom and pan animation
  useEffect(() => {
    if (isLoaded) {
      controls
        .start({
          scale: 1.1,
          x: 10, // Subtle pan right
          transition: {
            duration: 6,
            ease: [0.5, 0.3, 0.6, 0.9], // Custom easing for smoother movement
            x: {
              duration: 6,
              ease: "easeInOut",
            },
          },
        })
        .then(() => {
          setIsTransitioning(true);
        });
    }
  }, [isLoaded, controls]);

  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsTransitioning(false);
        setIsLoaded(false);
      }, 400); // Increased duration for smoother transition

      return () => clearTimeout(timer);
    }
  }, [isTransitioning, images.length]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImageIndex}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{
            opacity: isTransitioning ? 0 : 1,
            scale: isTransitioning ? 1.1 : 1.05,
          }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{
            opacity: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] },
            scale: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] },
          }}
        >
          <motion.div
            className="relative h-full w-full"
            animate={controls}
            initial={{ scale: 1, x: 0 }}
          >
            <Image
              src={images[currentImageIndex] || "/placeholder.svg"}
              alt={`${alt} ${currentImageIndex + 1}`}
              fill
              className="object-cover brightness-[0.7]"
              priority
              onLoad={() => setIsLoaded(true)}
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
