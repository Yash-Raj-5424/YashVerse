'use client';

import Container from './Container';
import GitHubIcon from './GitHubIcon';
import MailIcon from './MailIcon';

interface SocialIcon {
  name: string;
  icon: string | React.ReactNode;
  url?: string;
}

export default function Hero() {
  const socialIcons: SocialIcon[] = [
    {
      name: 'GitHub',
      icon: <GitHubIcon />,
      url: '#', // User to update with actual GitHub profile
    },
    {
      name: 'Twitter',
      icon: '𝕏',
      url: '#', // User to update with actual Twitter profile
    },
    {
      name: 'Email',
      icon: <MailIcon />,
      url: '#', // User to update with actual email
    },
  ];

  return (
    <section className="pt-20 pb-16 md:pt-24 md:pb-20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Profile Image */}
          <div className="flex justify-center">
            <div className="w-48 h-48 md:w-56 md:h-56 bg-dark-surface rounded-full border border-dark-border flex items-center justify-center overflow-hidden">
              <img
                src="/yash.png"
                alt="Yash Raj"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-dark-text">Yash Raj</h1>
              <h2 className="text-xl md:text-2xl text-dark-muted mt-2">Backend Engineer</h2>
            </div>

            <p className="text-sm md:text-base text-dark-muted italic">
              Open for full-time opportunities and internships
            </p>

            <p className="text-base text-dark-text leading-relaxed">
              Passionate about building robust backend systems and distributed architecture. 
              Experienced in designing scalable microservices, optimizing database performance, 
              and implementing event-driven systems. Focused on writing clean, efficient code 
              that powers reliable applications at scale.
            </p>

            {/* Social Icons */}
            <div className="flex flex-wrap gap-4 pt-4">
              {socialIcons.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  aria-label={social.name}
                  className="inline-flex items-center justify-center w-12 h-12 border border-dark-border bg-dark-surface rounded-full text-dark-muted hover:text-dark-text hover:border-dark-muted transition-colors"
                  title={social.name}
                >
                  {typeof social.icon === 'string' ? (
                    <span className="text-xl">{social.icon}</span>
                  ) : (
                    social.icon
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
