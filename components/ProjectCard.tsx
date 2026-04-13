import GitHubIcon from './GitHubIcon';

interface ProjectCardProps {
  title: string;
  techStack: string[];
  description: string;
  githubUrl?: string;
}

export default function ProjectCard({
  title,
  techStack,
  description,
  githubUrl,
}: ProjectCardProps) {
  return (
    <div className="border border-dark-border bg-dark-surface rounded-lg p-6 hover:border-dark-muted transition-colors">
      <div className="flex justify-between items-start gap-4 mb-4">
        <h3 className="text-lg font-bold text-dark-text flex-1">{title}</h3>
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="View source code on GitHub"
            aria-label="View source code on GitHub"
            className="text-dark-muted hover:text-dark-text transition-colors flex-shrink-0"
          >
            <GitHubIcon />
          </a>
        )}
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 text-xs border border-dark-border bg-transparent text-dark-muted rounded"
          >
            {tech}
          </span>
        ))}
      </div>
      <p className="text-dark-text text-sm leading-relaxed">{description}</p>
    </div>
  );
}
