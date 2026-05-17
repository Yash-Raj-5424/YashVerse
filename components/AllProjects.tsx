'use client';

import Container from './Container';
import ProjectCard from './ProjectCard';

const allProjects = [
  {
    title: 'Outbox - Fault Tolerant Payment Processing System',
    techStack: ['Spring Boot', 'Postgres', 'Redis', 'Flyway'],
    description:
      'Implemented an outbox pattern-based payment processing system ensuring exactly-once delivery semantics. Handles 50K+ transactions daily with automatic retry logic and dead-letter queue for failed payments. Achieves 99.99% reliability with comprehensive audit trails.',
    githubUrl: 'https://github.com/Yash-Raj-5424/outbox', // User to update with actual GitHub URL
  },
  {
    title: 'FluxWard - Distributed API Rate Limiter',
    techStack: ['Spring Boot', 'Postgres', 'Redis', 'Lua', 'Resilience4j', 'Prometheus'],
    description:
      'Implemented a distributed rate limiter using Redis with token bucket algorithm. Handles 10K+ concurrent requests per second with <5ms latency per check. Integrated across microservices to prevent abuse and ensure SLA compliance.',
    githubUrl: 'https://github.com/Yash-Raj-5424/FluxWard', // User to update with actual GitHub URL
  },
  {
    title: 'kalmeQ - A message queue like Kafka',
    techStack: ['Java', 'Zookeeper', 'Docker', 'Spring Boot'],
    description:
      'Built a distributed message queue system inspired by Kafka architecture. Supports pub-sub messaging with partition-based ordering guarantees. Handles 100K+ messages per second with persistent storage and consumer group management.',
    githubUrl: 'https://github.com/Yash-Raj-5424/kalmeQ', // User to update with actual GitHub URL
  },
  {
    title: 'TinyLynk - URL shortener service',
    techStack: ['Spring Boot', 'Postgres', 'Redis', 'Docker'],
    description:
      'Built a high-performance URL shortening service handling millions of redirects daily. Implements custom alphabet encoding for compact URLs with collision detection. Caches hot URLs in Redis achieving sub-millisecond redirect latency with 99.9% uptime.',
    githubUrl: 'https://github.com/Yash-Raj-5424/TinyLynk', // User to update with actual GitHub URL
  },
];

export default function AllProjects() {
  return (
    <section className="py-16 md:py-20">
      <Container>
        <h2 className="text-2xl md:text-3xl font-bold text-dark-text mb-8">All Projects</h2>
        <div className="space-y-6">
          {allProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              techStack={project.techStack}
              description={project.description}
              githubUrl={project.githubUrl}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
