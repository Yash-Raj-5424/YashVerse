'use client';

import Container from './Container';
import GitHubIcon from './GitHubIcon';
import MailIcon from './MailIcon';

export default function Contact() {
  const contactIcons = [
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
      name: 'Email',
      icon: <MailIcon />,
      url: 'mailto:yashraj31706@gmail.com',
    },
  ];

  return (
    <section id="contact" className="py-16 md:py-20">
      <Container>
        <h2 className="text-2xl md:text-3xl font-bold text-dark-text mb-8">Get in Touch</h2>
        <div className="flex flex-wrap gap-4 justify-start md:justify-start">
          {contactIcons.map((contact) => (
            <a
              key={contact.name}
              href={contact.url}
              title={`Connect on ${contact.name} - Update with your profile URL`}
              className="inline-flex items-center justify-center w-14 h-14 border border-dark-border bg-dark-surface rounded-full text-dark-muted hover:text-dark-text hover:border-dark-muted transition-colors"
              aria-label={`Connect on ${contact.name}`}
            >
              {typeof contact.icon === 'string' ? (
                <span className="text-2xl">{contact.icon}</span>
              ) : (
                contact.icon
              )}
            </a>
          ))}
        </div>
        <p className="mt-6 text-sm text-dark-muted">
          Update the href attributes above with your actual social profiles and email address.
        </p>
      </Container>
    </section>
  );
}
