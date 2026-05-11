import Container from '@/components/Container';

export default function BlogsPage() {
  return (
    <main className="min-h-screen pt-24">
      <Container>
        <h1 className="text-4xl md:text-5xl font-bold text-dark-text mb-8">Blogs</h1>
        <p className="text-dark-muted">Coming soon...</p>
        <footer className="py-12 text-center text-dark-muted text-sm border-t border-dark-border mt-20">
          <p>© 2024 Yash Raj. Built with Next.js and Tailwind CSS.</p>
        </footer>
      </Container>
    </main>
  );
}
