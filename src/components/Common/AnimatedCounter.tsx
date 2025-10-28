'use client';

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

interface AnimatedCounterProps {
  target: number | string;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  target,
  suffix = '',
  prefix = '',
  duration = 2000,
  className = ''
}) => {
  const [count, setCount] = useState(0);
  
  // Parse the target value to handle special formats
  const parseTarget = (value: string | number) => {
    if (typeof value === 'number') return value;
    
    // Handle formats like "$1M+", "100+", "98%", etc.
    const cleanValue = value.replace(/[^\d.M]/g, '');
    
    if (cleanValue.includes('M')) {
      // Handle values like "1M" = 1,000,000
      const numPart = parseFloat(cleanValue.replace('M', ''));
      return numPart * 1000000;
    }
    
    return parseFloat(cleanValue);
  };
  
  const numericTarget = parseTarget(target);

  useEffect(() => {
    let start = 0;
    const increment = numericTarget / (duration / 16); // 60fps approximation
    const timer = setInterval(() => {
      start += increment;
      if (start >= numericTarget) {
        setCount(numericTarget);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [numericTarget, duration]);

  // Format the number to match the original format
  const formatNumber = (num: number) => {
    if (typeof target === 'string') {
      if (target.includes('M')) {
        // Handle millions format like "1M+"
        const millionValue = num / 1000000;
        const formatted = millionValue >= 1 ? Math.floor(millionValue) + 'M' : Math.floor(millionValue * 1000) + 'K';
        const hasPlus = target.includes('+') ? '+' : '';
        const hasDollar = target.includes('$') ? '$' : '';
        return hasDollar + formatted + hasPlus;
      }
      
      // If target has a '+', keep it in the formatted number
      if (target.includes('+')) {
        return Math.floor(num).toString() + '+';
      }
      // If target has a '%', keep it in the formatted number
      if (target.includes('%')) {
        return Math.floor(num).toString() + '%';
      }
      // If target has a '$', keep it in the formatted number
      if (target.includes('$')) {
        return '$' + Math.floor(num).toLocaleString();
      }
    }
    return Math.floor(num).toString();
  };

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={className}
    >
      <motion.div
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold text-primary mb-2"
      >
        {prefix}{formatNumber(count)}{suffix}
      </motion.div>
    </motion.div>
  );
};

export default AnimatedCounter;