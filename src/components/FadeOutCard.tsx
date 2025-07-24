"use client";

import CardSpotlight, { CardSpotlightProps } from "./CardSpotLight";
import { motion, AnimatePresence } from "framer-motion";

interface FadeOutCardProps extends CardSpotlightProps {
  fadeOut?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  isUnfading?: boolean;
}

export default function FadeOutCard({ fadeOut = false, onClick, isUnfading = false, ...cardProps }: FadeOutCardProps) {
  const cardContent = (
    <div className={`relative ${fadeOut ? 'cursor-pointer hover:scale-[1.02] transition-transform duration-200' : ''}`}>
      <CardSpotlight {...cardProps} />
      <AnimatePresence>
        {fadeOut && !isUnfading && (
          <motion.div 
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="absolute bottom-0 left-0 right-0 h-3/4 bg-gradient-to-t from-white via-white/80 to-transparent rounded-lg" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  if (fadeOut && onClick) {
    return (
      <div onClick={(e) => onClick(e)} className="block">
        {cardContent}
      </div>
    );
  }

  return cardContent;
} 