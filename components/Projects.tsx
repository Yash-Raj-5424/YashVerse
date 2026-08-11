'use client';

import Link from 'next/link';
import Container from './Container';
import ProjectCard from './ProjectCard';

const featuredProjects = [
  {
    title: 'Outbox - Fault Tolerant Payment Processing System',
    techStack: ['Spring Boot', 'Postgres', 'Redis', 'Flyway'],
    description:
      'Implemented an outbox pattern-based payment processing system ensuring exactly-once delivery semantics. Handles 50K+ transactions daily with automatic retry logic and dead-letter queue.',
    githubUrl: 'https://github.com/Yash-Raj-5424/outbox', // User to update with actual GitHub URL
  },
  {
    title: 'Notifyr - Bulk Notification Platform',
    techStack: ['Java', 'Spring Boot', 'PostgreSQL', 'RabbitMQ', 'Redis', 'Docker'],
    description:
      'An async, fault-tolerant notification platform with RabbitMQ delivery, retry/DLQ handling, real email and SMS sending, campaign-based bulk messaging, and observability via Prometheus and Grafana.',
    githubUrl: 'https://github.com/Yash-Raj-5424/Notifyr', // User to update with actual GitHub URL
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-20">
      <Container>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-dark-text">Featured Projects</h2>
          <Link
            href="/projects"
            className="text-sm text-dark-muted hover:text-dark-text transition-colors"
          >
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((project, index) => (
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
