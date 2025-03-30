import React, { useEffect, useRef, useState } from 'react';
import './FadeInSection.css';

type FadeInSectionProps = {
  children: React.ReactNode;
  threshold?: number;
  rootMargin?: string;
};

export const FadeInSection: React.FC<FadeInSectionProps> = ({
  children,
  threshold = 0.1,
  rootMargin = '0px'
}) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin]);

  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {children}
    </div>
  );
};
