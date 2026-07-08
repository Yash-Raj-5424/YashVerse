'use client';

import dynamic from 'next/dynamic';
import Container from './Container';

const GitHubCalendar = dynamic(() => import('react-github-calendar').then(m => m.default), {
  loading: () => <div className="text-dark-muted text-center py-8">Loading contribution graph...</div>,
  ssr: false,
});

export default function GitHubActivity() {
  return (
    <section className="py-16 md:py-20">
      <Container>
        <h2 className="text-2xl md:text-3xl font-bold text-dark-text mb-8">
          GitHub Activity
        </h2>
        <div className="border border-dark-border bg-dark-surface rounded-lg p-8">
          <div className="flex justify-center w-full github-activity-calendar-wrap">
            <GitHubCalendar
              username="Yash-Raj-5424"
              colorScheme="dark"
              fontSize={14}
              style={{ width: '100%' }}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
