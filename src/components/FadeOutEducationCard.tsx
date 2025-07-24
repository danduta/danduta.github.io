"use client";

import EducationCard from "./EducationCard";
import { EducationProps } from "@/lib/education";
import Link from "next/link";

interface FadeOutEducationCardProps extends EducationProps {
  fadeOut?: boolean;
  linkTo?: string;
}

export default function FadeOutEducationCard({ 
  fadeOut = false, 
  linkTo = "/education",
  ...cardProps 
}: FadeOutEducationCardProps) {
  const cardContent = (
    <div className={`relative ${fadeOut ? 'pointer-events-none' : ''}`}>
      <EducationCard {...cardProps} />
      {fadeOut && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-0 right-0 h-3/4 bg-gradient-to-t from-white via-white/80 to-transparent rounded-lg" />
        </div>
      )}
    </div>
  );

  if (fadeOut && linkTo) {
    return (
      <Link href={linkTo} className="block">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
} 