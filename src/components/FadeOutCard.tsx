"use client";

import CardSpotlight, { CardSpotlightProps } from "./CardSpotLight";
import Link from "next/link";

interface FadeOutCardProps extends CardSpotlightProps {
  fadeOut?: boolean;
}

export default function FadeOutCard({ fadeOut = false, ...cardProps }: FadeOutCardProps) {
  const cardContent = (
    <div className={`relative ${fadeOut ? 'pointer-events-none' : ''}`}>
      <CardSpotlight {...cardProps} />
      {fadeOut && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-0 right-0 h-3/4 bg-gradient-to-t from-white via-white/80 to-transparent rounded-lg" />
        </div>
      )}
    </div>
  );

  if (fadeOut) {
    return (
      <Link href="/experience" className="block">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
} 