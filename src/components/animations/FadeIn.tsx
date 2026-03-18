
"use client";

import { useEffect, useRef, useState, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'none';
}

export function FadeIn({ children, className, delay = 0, direction = 'up' }: FadeInProps) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, { 
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px' 
    });

    const current = domRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  const getDirectionClass = () => {
    if (!isVisible) {
      if (direction === 'up') return 'translate-y-12';
      if (direction === 'down') return '-translate-y-12';
      return '';
    }
    return 'translate-y-0';
  };

  return (
    <div
      ref={domRef}
      className={cn(
        'transition-all duration-1000 ease-out transform',
        isVisible ? 'opacity-100' : 'opacity-0',
        getDirectionClass(),
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
