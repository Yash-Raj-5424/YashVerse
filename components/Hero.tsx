'use client';

import Link from 'next/link';
import Container from './Container';
import GitHubIcon from './GitHubIcon';
import LinkedInIcon from './LinkedInIcon';
import MediumIcon from './MediumIcon';

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
      url: 'https://github.com/Yash-Raj-5424',
    },
    {
      name: 'Twitter',
      icon: '𝕏',
      url: 'https://x.com/yash_mish91',
    },
    {
      name: 'LinkedIn',
      icon: <LinkedInIcon />,
      url: 'https://linkedin.com/in/yashraj37',
    },
    {
      name: 'Medium',
      icon: <MediumIcon />,
      url: 'https://medium.com/@yashraj31706',
    },
  ];

  return (
    <section className="pt-16 pb-12 md:pt-20 md:pb-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left: Profile Image */}
          <div className="flex justify-center">
            <div className="w-40 aspect-[4/5] sm:w-44 md:w-56 bg-dark-surface rounded-2xl border border-dark-border flex items-center justify-center overflow-hidden shadow-lg shadow-black/10">
              <img
                src="/yash_pfp.png"
                alt="Yash Raj"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-4 md:space-y-5">
            <div className="space-y-1">
              <h1 className="playfair-display text-4xl md:text-5xl font-bold text-dark-text">Yash Raj</h1>
              <h2 className="playfair-display text-xl md:text-2xl text-dark-muted">Backend Engineer</h2>
            </div>

            <p className="text-sm md:text-base text-dark-muted italic">
              Open for full-time opportunities and internships
            </p>

            <p className="text-base text-dark-text leading-relaxed max-w-[34rem]">
              I’m curious about backend systems and love learning by building things in that space. I like picking up new ideas and experimenting with them in practice. I read papers when I&apos;m not writing code. Check out{' '}
              <Link href="/archives" className="underline underline-offset-4 hover:text-dark-accent">
                Archives
              </Link>.
            </p>

            {/* Social Icons */}
            <div className="flex flex-wrap gap-3 md:gap-4 pt-2 md:pt-3">
              {socialIcons.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  aria-label={social.name}
                  className="inline-flex items-center justify-center w-11 h-11 md:w-12 md:h-12 border border-dark-border bg-dark-surface rounded-full text-dark-muted hover:text-dark-text hover:border-dark-muted transition-colors"
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
