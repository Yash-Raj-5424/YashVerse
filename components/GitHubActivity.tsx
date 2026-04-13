'use client';

import dynamic from 'next/dynamic';
import Container from './Container';
import { useEffect, useRef } from 'react';

const GitHubCalendar = dynamic(() => import('react-github-calendar').then(m => m.default), {
  loading: () => <div className="text-dark-muted text-center py-8">Loading contribution graph...</div>,
  ssr: false,
});

export default function GitHubActivity() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollToRight = () => {
      if (scrollContainerRef.current) {
        const scrollWidth = scrollContainerRef.current.scrollWidth;
        const clientWidth = scrollContainerRef.current.clientWidth;
        scrollContainerRef.current.scrollLeft = scrollWidth - clientWidth;
      }
    };

    // Initial scroll after a short delay to ensure DOM is fully rendered
    const timer = setTimeout(scrollToRight, 500);

    // Also scroll on window resize
    window.addEventListener('resize', scrollToRight);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', scrollToRight);
    };
  }, []);

  return (
    <section className="py-16 md:py-20">
      <Container>
        <h2 className="text-2xl md:text-3xl font-bold text-dark-text mb-8">
          GitHub Activity
        </h2>
        <div className="border border-dark-border bg-dark-surface rounded-lg p-8">
          <div ref={scrollContainerRef} className="flex justify-center w-full overflow-x-auto scrollbar-visible">
            <GitHubCalendar
              username="Yash-Raj-5424"
              colorScheme="dark"
              fontSize={14}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
