import AllProjects from '@/components/AllProjects';
import Container from '@/components/Container';

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-24">
      <AllProjects />
      <Container>
        <footer className="py-12 text-center text-dark-muted text-sm border-t border-dark-border">
          <p>© 2024 Yash Raj. Built with Next.js and Tailwind CSS.</p>
        </footer>
      </Container>
    </main>
  );
}
