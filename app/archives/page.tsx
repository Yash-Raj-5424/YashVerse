import Container from '@/components/Container';

const papers = [
  {
    title: 'Attention Is All You Need',
    link: 'https://drive.google.com/file/d/1tNhOIw4KuUko6iB4sLXRirC45Tpp8Ksy/view?usp=drive_link',
  },
  {
    title: 'Kafka: A Distributed Messaging System for Log Processing',
    link: 'https://drive.google.com/file/d/1V_UdnChxAhKx7c_ff8p7g6xpCPKf8_-S/view?usp=sharing',
  },
  {
    title: 'The Ubiquitous B-Tree',
    link: 'https://drive.google.com/file/d/1hWix6MIoqx6C4l9IxiprthGMTCMtY7Bj/view?usp=drive_link',
  },
  {
    title: 'The Google File System',
    link: 'https://drive.google.com/file/d/1u1AG300znt9HWSmIdbueqrA_PVmo76-t/view?usp=drive_link',
  },
  {
    title: 'The Path of a Packet Through the Linux Kernel',
    link: 'https://drive.google.com/file/d/1Jw07LuvOspysHg7G4upnjsqNUIKORwmO/view?usp=drive_link',
  },
];

export default function ArchivesPage() {
  return (
    <main className="min-h-screen pt-24">
      <Container>
        <h1 className="text-4xl md:text-5xl font-bold text-dark-text mb-8">Archives</h1>
        <ul className="space-y-4 text-dark-text list-disc pl-6">
          {papers.map((paper) => (
            <li key={paper.title}>
              <a
                href={paper.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-text underline decoration-dark-muted underline-offset-4 hover:text-dark-muted transition-colors ml-1"
              >
                {paper.title}
              </a>
            </li>
          ))}
        </ul>
        <footer className="py-12 text-center text-dark-muted text-sm border-t border-dark-border mt-20">
          <p>© 2024 Yash Raj. Built with Next.js and Tailwind CSS.</p>
        </footer>
      </Container>
    </main>
  );
}
