'use client';

import Link from 'next/link';
import Container from './Container';
import ProjectCard from './ProjectCard';

const featuredProjects = [
  {
    title: 'Distributed Rate Limiter',
    techStack: ['Redis', 'Spring Boot', 'Java'],
    description:
      'Implemented a distributed rate limiter using Redis with token bucket algorithm. Handles 10K+ concurrent requests per second with <5ms latency per check.',
    githubUrl: '#', // User to update with actual GitHub URL
  },
  {
    title: 'Microservices Cache Layer',
    techStack: ['Redis', 'Kafka', 'Docker', 'Java'],
    description:
      'Built an event-driven cache invalidation system for microservices using Kafka topics. Reduces database queries by 70% and ensures <100ms eventual consistency.',
    githubUrl: '#', // User to update with actual GitHub URL
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
