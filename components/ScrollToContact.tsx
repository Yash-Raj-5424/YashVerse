'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function ScrollToContact() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const scrollTo = searchParams.get('scroll');
    
    if (scrollTo === 'contact') {
      // Use a small timeout to ensure DOM is ready
      const timer = setTimeout(() => {
        const element = document.querySelector('#contact');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 400);

      return () => clearTimeout(timer);
    }
  }, [searchParams]);

  return null;
}
