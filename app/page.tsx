import { Suspense } from 'react';
import Hero from '@/components/Hero';
import TechStack from '@/components/TechStack';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import GitHubActivity from '@/components/GitHubActivity';
import Container from '@/components/Container';
import ScrollToContact from '@/components/ScrollToContact';

export default function Home() {
  return (
    <main className="min-h-screen pt-24">
      <Hero />
      <TechStack />
      <Projects />
      <GitHubActivity />
      <Contact />
      <Container>
        <footer className="py-12 text-center text-dark-muted text-sm border-t border-dark-border">
          <p>© 2024 Yash Raj. Built with Next.js and Tailwind CSS.</p>
        </footer>
      </Container>
      <Suspense fallback={null}>
        <ScrollToContact />
      </Suspense>
    </main>
  );
}
