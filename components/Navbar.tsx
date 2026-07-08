'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();
  const isOnHomePage = pathname === '/';
  const isOnProjectsPage = pathname === '/projects';
  const isOnBlogsPage = pathname === '/blogs';
  const isOnArchivesPage = pathname === '/archives';

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (!isOnHomePage) {
      router.push('/');
    } else {
      if (typeof window !== 'undefined' && window.location.search.includes('scroll=')) {
        window.history.replaceState(null, '', '/');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    if (!isOnHomePage) {
      // Navigate to home and then scroll to contact
      router.push('/?scroll=contact');
    } else {
      // Already on home, just scroll to contact
      const element = document.querySelector('#contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const handleProjectsClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isOnProjectsPage) {
      e.preventDefault();
    }
  };

  const handleBlogsClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isOnBlogsPage) {
      e.preventDefault();
    }
  };

  const handleArchivesClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isOnArchivesPage) {
      e.preventDefault();
    }
  };

  return (
    <nav className="fixed top-2 sm:top-4 left-1/2 transform -translate-x-1/2 z-50 w-[calc(100vw-1rem)] max-w-[620px] backdrop-blur-md bg-black/30 border border-dark-border rounded-full">
      <div className="px-3 py-2 sm:px-8 sm:py-3">
        <ul className="flex items-center justify-between gap-3 sm:gap-8 text-[11px] sm:text-sm whitespace-nowrap">
          <li>
            <a 
              href="/"
              onClick={handleHomeClick}
              className="text-dark-muted hover:text-dark-text transition-colors text-sm"
            >
              Home
            </a>
          </li>
          <li>
            <Link 
              href="/projects"
              onClick={handleProjectsClick}
              className="text-dark-muted hover:text-dark-text transition-colors text-sm"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link 
              href="/blogs"
              onClick={handleBlogsClick}
              className="text-dark-muted hover:text-dark-text transition-colors text-sm"
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link 
              href="/archives"
              onClick={handleArchivesClick}
              className="text-dark-muted hover:text-dark-text transition-colors text-sm"
            >
              Archives
            </Link>
          </li>
          <li>
            <a 
              href="#contact"
              onClick={handleContactClick}
              className="text-dark-muted hover:text-dark-text transition-colors text-sm"
            >
              Contact
            </a>
          </li>
          <li>
            <button
              type="button"
              onClick={toggleTheme}
              className="inline-flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full border border-dark-border bg-dark-bg/40 text-dark-muted transition-colors hover:border-dark-muted hover:text-dark-text flex-shrink-0"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              aria-pressed={theme === 'light'}
              title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <Sun size={14} strokeWidth={2} /> : <Moon size={14} strokeWidth={2} />}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
