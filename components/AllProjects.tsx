'use client';

import Container from './Container';
import ProjectCard from './ProjectCard';

const allProjects = [
  {
    title: 'Notifyr - Bulk Notification Platform',
    techStack: ['Java', 'Spring Boot', 'PostgreSQL', 'RabbitMQ', 'Redis', 'Docker'],
    description:
      'Built an async, fault-tolerant notification platform with RabbitMQ-based delivery, retry and DLQ handling, real email and SMS delivery, campaign-based bulk sending, dynamic audience segmentation, and Prometheus/Grafana observability.',
    githubUrl: 'https://github.com/Yash-Raj-5424/Notifyr', // User to update with actual GitHub URL
  },
  {
    title: 'Outbox',
    techStack: ['Java', 'Spring Boot', 'PostgreSQL', 'Redis', 'Flyway', 'ShedLock', 'Testcontainers', 'Docker'],
    description:
      'A backend payment system built to handle failures, duplicate requests, and concurrent transactions using the Transactional Outbox Pattern, Redis Lua scripting, database-level idempotency, retry + DLQ, and distributed scheduling with ShedLock.',
    githubUrl: 'https://github.com/Yash-Raj-5424/outbox', // User to update with actual GitHub URL
  },
  {
    title: 'TinyLynk — URL Shortener',
    techStack: ['Java 21', 'Spring Boot', 'PostgreSQL', 'Redis', 'Kafka', 'Docker'],
    description:
      'A Spring Boot URL-shortening service with Base62 short codes, Redis caching, and Kafka-based asynchronous click tracking. Supports URL expiry, soft deactivation, validation, and click statistics.',
    githubUrl: 'https://github.com/Yash-Raj-5424/TinyLynk', // User to update with actual GitHub URL
  },
  {
    title: 'gRPC Chat App',
    techStack: ['Java', 'gRPC', 'Protocol Buffers', 'Maven'],
    description:
      'A real-time terminal chat application using gRPC bidirectional streaming, supporting multi-client messaging, private messages, and multiple chat rooms with thread-safe client and room management.',
    githubUrl: 'https://github.com/Yash-Raj-5424/grpc-chat-app', // User to update with actual GitHub URL
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
