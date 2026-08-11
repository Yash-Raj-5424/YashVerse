'use client';

import Link from 'next/link';
import Container from './Container';
import GitHubIcon from './GitHubIcon';
import LinkedInIcon from './LinkedInIcon';
import MediumIcon from './MediumIcon';

function ResumeIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M7 3.75C7 2.95507 7.67157 2.25 8.5 2.25H13.1716C13.702 2.25 14.2107 2.46066 14.5858 2.83579L18.6642 6.91421C19.0393 7.28929 19.25 7.79799 19.25 8.32843V20.25C19.25 21.0784 18.5784 21.75 17.75 21.75H8.5C7.67157 21.75 7 21.0449 7 20.25V3.75Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M13 2.5V7.5H18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 11.5V16.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M9.5 14L12 16.5L14.5 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

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

  const resumeUrl = 'https://drive.google.com/file/d/1c3rw8YCCxIxJUez9_a_nF9LhwmYzKeod/view?usp=drive_link';

  return (
    <section className="pt-4 pb-6 md:pt-6 md:pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-center">
          {/* Left: Profile Image */}
          <div className="flex justify-center">
            <div className="w-20 aspect-[4/5] sm:w-24 md:w-28 bg-dark-surface rounded-2xl border border-dark-border flex items-center justify-center overflow-hidden shadow-lg shadow-black/10">
              <img
                src="/pfp.jpg"
                alt="Yash Raj"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-2 md:space-y-3">
            <div className="space-y-0.5">
              <h1 className="playfair-display text-4xl md:text-5xl font-bold text-dark-text">Yash Raj</h1>
              <h2 className="playfair-display text-xl md:text-2xl text-dark-muted">Backend Engineer</h2>
            </div>

            <p className="text-sm md:text-base text-dark-muted italic leading-none">
              Open for full-time opportunities and internships
            </p>

            <p className="text-base text-dark-text leading-relaxed max-w-[34rem] mt-0">
              I’m curious about backend systems and love learning by building things in that space. I like picking up new ideas and experimenting with them in practice. I read papers when I&apos;m not writing code. Check out{' '}
              <Link href="/archives" className="underline underline-offset-4 hover:text-dark-accent">
                Archives
              </Link>.
            </p>

            {/* Social Icons */}
            <div className="flex flex-col items-center md:items-start gap-3 pt-1 md:pt-2">
              <div className="flex flex-wrap justify-center md:justify-start gap-2.5 md:gap-3">
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

              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-dark-border bg-dark-surface px-4 py-2 text-sm font-medium text-dark-text transition-colors hover:border-dark-muted hover:text-dark-muted"
              >
                <ResumeIcon />
                Resume
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
