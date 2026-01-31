"use client";

import { motion } from "framer-motion";
import { ImageIcon } from "lucide-react";

interface PlaceholderImageProps {
  width?: number | string;
  height?: number | string;
  className?: string;
  text?: string;
  aspectRatio?: "square" | "video" | "portrait" | "wide";
}

const aspectRatios = {
  square: "aspect-square",
  video: "aspect-video",
  portrait: "aspect-[3/4]",
  wide: "aspect-[21/9]",
};

export function PlaceholderImage({
  width,
  height,
  className = "",
  text = "Image",
  aspectRatio = "video",
}: PlaceholderImageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className={`
        relative overflow-hidden rounded-lg bg-muted flex items-center justify-center
        ${aspectRatios[aspectRatio]}
        ${className}
      `}
      style={{ width, height }}
    >
      <div className="flex flex-col items-center justify-center text-muted-foreground">
        <ImageIcon className="h-8 w-8 mb-2 opacity-50" />
        <span className="text-sm font-medium opacity-70">{text}</span>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/5" />
    </motion.div>
  );
}
