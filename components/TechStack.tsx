'use client';

import Container from './Container';
import {
  Coffee,
  Code,
  Settings,
  Atom,
  Database,
  Zap,
  Package,
  GitBranch,
  Github,
} from 'lucide-react';

const skills = [
  { name: 'Java', Icon: Coffee },
  { name: 'Python', Icon: Code },
  { name: 'Spring Boot', Icon: Settings },
  { name: 'React.js', Icon: Atom },
  { name: 'PostgreSQL', Icon: Database },
  { name: 'MySQL', Icon: Database },
  { name: 'Redis', Icon: Zap },
  { name: 'Kafka', Icon: Zap },
  { name: 'Docker', Icon: Package },
  { name: 'Git', Icon: GitBranch },
  { name: 'GitHub', Icon: Github },
];

export default function TechStack() {
  return (
    <section className="py-16 md:py-20">
      <Container>
        <h2 className="text-2xl md:text-3xl font-bold text-dark-text mb-8">Tech Stack</h2>
        <div className="flex flex-wrap gap-3">
          {skills.map(({ name, Icon }) => (
            <div
              key={name}
              className="px-4 py-2 border border-dark-border bg-dark-surface text-dark-text rounded-full text-sm hover:border-dark-muted transition-colors flex items-center gap-2"
            >
              <Icon size={16} strokeWidth={2} className="text-dark-muted" />
              {name}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
