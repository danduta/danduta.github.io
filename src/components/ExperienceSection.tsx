"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeOutCard from "./FadeOutCard";
import Button from "./Button";
import { workExperience } from "@/lib/work-experience";

export default function ExperienceSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isUnfading, setIsUnfading] = useState(false);

  const handleExpandClick = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setIsUnfading(true);
    // Delay the expansion to allow the unfading animation to start
    setTimeout(() => {
      setIsExpanded(true);
    }, 100);
  };

  const handleCollapseClick = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setIsExpanded(false);
    setIsUnfading(false);
  };

  return (
    <section id="experience" className="mb-12">
      <h2 className="text-sm text-gray-500 mb-4">
        → work-experience --list {isExpanded ? '--all' : '--short'} --sortBy=recency
      </h2>
      <div className="space-y-8">
        {/* Always show first 3 cards without animation */}
        {workExperience.slice(0, 3).map((experience, index) => (
          <div key={experience.title}>
            <FadeOutCard 
              {...experience} 
              fadeOut={!isExpanded && index === 2} 
              isUnfading={index === 2 && isUnfading}
              onClick={!isExpanded && index === 2 ? handleExpandClick : undefined}
            />
          </div>
        ))}
        
        {/* Animate in additional cards when expanded */}
        {isExpanded && workExperience.slice(3).map((experience, index) => (
          <motion.div
            key={experience.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6,
              delay: 0.3 + (index * 0.3), // Start after unfading begins
              ease: "easeOut"
            }}
          >
            <FadeOutCard {...experience} />
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        className="mt-6"
        initial={{ opacity: 1 }}
        animate={{ opacity: isExpanded ? 0 : 1 }}
        transition={{ duration: 0.6 }}
      >
        {!isExpanded && (
          <Button onClick={handleExpandClick} variant="secondary">
            View all work experience →
          </Button>
        )}
      </motion.div>

      {isExpanded && (
        <motion.div 
          className="mt-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Button onClick={handleCollapseClick} variant="secondary">
            ← Show less
          </Button>
        </motion.div>
      )}
    </section>
  );
} 