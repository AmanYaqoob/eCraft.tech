"use client";

import React, { useState } from "react";
import Image from "next/image";

interface CourseCardProps {
  id: string;
  image: string;
  title: string;
  category: string;
  price: number;
  rating: number;
  description: string;
  instructor: { name: string; avatar: string };
}

const courseModules = {
  '1': [
    'Amazon FBA Business Setup & Product Research',
    'Walmart Marketplace Optimization',
    'eBay Selling Strategies & Automation',
    'Etsy Store Building & Handmade Business',
    'TikTok Shop Marketing & Social Commerce',
    'Advanced PPC Campaign Management',
    'Multi-Channel Inventory Management',
    'Customer Service & Brand Building',
    'Analytics & Performance Optimization',
    'Scaling & Business Growth Strategies'
  ],
  '2': [
    'Forex Market Fundamentals & Structure',
    'Technical Analysis & Chart Reading',
    'Fundamental Analysis & Economic Events',
    'Risk Management & Position Sizing',
    'Trading Psychology & Discipline',
    'Currency Pair Analysis & Selection',
    'Trading Strategies & System Development',
    'Live Trading Practice & Execution',
    'Market Timing & Entry/Exit Points',
    'Professional Trading Setup & Tools'
  ]
};

const CourseCard: React.FC<CourseCardProps> = ({
  id,
  image,
  title,
  category,
  price,
  rating,
  description,
  instructor,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const modules = courseModules[id as keyof typeof courseModules] || [];

  return (
    <div className="group relative overflow-hidden rounded-lg border border-stroke bg-white shadow-md transition-all hover:shadow-lg dark:border-strokedark dark:bg-gray-dark">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute right-2 top-2 flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-sm font-semibold text-white">
          <svg className="h-4 w-4 fill-yellow-400" viewBox="0 0 20 20">
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
          {rating}
        </div>
      </div>

      <div className="p-5">
        <span className="mb-3 inline-block rounded bg-primary px-3 py-1 text-xs font-semibold text-white">
          {category}
        </span>

        <h3 className="mb-3 text-lg font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary">
          {title}
        </h3>

        <p className="mb-4 text-sm text-body-color dark:text-body-color-dark line-clamp-2">
          {description}
        </p>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mb-4 flex items-center gap-2 text-sm font-medium text-primary hover:underline"
        >
          {isExpanded ? 'Hide' : 'Show'} Course Modules
          <svg
            className={`h-4 w-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isExpanded && (
          <div className="mb-4 rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
            <h4 className="mb-3 font-semibold text-black dark:text-white">Course Modules:</h4>
            <ul className="space-y-2">
              {modules.map((module, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-body-color dark:text-body-color-dark">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-primary"></span>
                  {module}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex items-center justify-between border-t border-stroke pt-4 dark:border-strokedark">
          <div className="flex items-center gap-2">
            <div className="relative h-8 w-8 overflow-hidden rounded-full">
              <Image
                src={instructor.avatar}
                alt={instructor.name}
                fill
                className="object-cover"
              />
            </div>
            <span className="text-sm text-body-color dark:text-body-color-dark">
              {instructor.name}
            </span>
          </div>

          <div className="text-lg font-bold text-primary">
            {price === 0 ? 'Free' : `$${price}`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
