import React from 'react';

interface SectionHeadingProps {
  firstWord: string;
  highlightedWord: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export default function SectionHeading({
  firstWord,
  highlightedWord,
  subtitle,
  align = 'center',
  className = '',
}: SectionHeadingProps) {
  const alignmentClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }[align];

  return (
    <div className={`${alignmentClass} ${className}`}>
      <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-3 sm:mb-4">
        <span className="text-gray-900">{firstWord}</span>{' '}
        <span className="text-green-700">{highlightedWord}</span>
      </h2>
      {subtitle && (
        <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto font-normal leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
