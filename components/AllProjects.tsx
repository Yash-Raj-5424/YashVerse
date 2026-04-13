'use client';

import Container from './Container';
import ProjectCard from './ProjectCard';

const allProjects = [
  {
    title: 'Distributed Rate Limiter',
    techStack: ['Redis', 'Spring Boot', 'Java'],
    description:
      'Implemented a distributed rate limiter using Redis with token bucket algorithm. Handles 10K+ concurrent requests per second with <5ms latency per check. Integrated across microservices to prevent abuse and ensure SLA compliance.',
    githubUrl: '#', // User to update with actual GitHub URL
  },
  {
    title: 'Microservices Cache Layer',
    techStack: ['Redis', 'Kafka', 'Docker', 'Java'],
    description:
      'Built an event-driven cache invalidation system for microservices using Kafka topics. Reduces database queries by 70% and ensures <100ms eventual consistency across 15 services. Deployed on Kubernetes with auto-scaling.',
    githubUrl: '#', // User to update with actual GitHub URL
  },
  {
    title: 'PostgreSQL Query Optimizer',
    techStack: ['PostgreSQL', 'Python', 'Git'],
    description:
      'Analyzed and optimized 40+ slow queries in legacy codebase. Added strategic indexes and rewrote complex joins, achieving 15x improvement in average execution time. Documented patterns to guide future query design.',
    githubUrl: '#', // User to update with actual GitHub URL
  },
  {
    title: 'Real-time Log Aggregation Pipeline',
    techStack: ['Kafka', 'Python', 'Docker', 'MySQL'],
    description:
      'Built event streaming pipeline to aggregate logs from 20+ microservices. Processes 1M+ events per minute with <2s end-to-end latency. Enables real-time dashboards and retroactive debugging across distributed system.',
    githubUrl: '#', // User to update with actual GitHub URL
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
