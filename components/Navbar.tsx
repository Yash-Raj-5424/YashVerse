'use client';

import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export default function Navbar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
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
      if (searchParams.get('scroll')) {
        router.replace('/');
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
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 backdrop-blur-md bg-black/30 border border-dark-border rounded-full">
      <div className="px-8 py-3">
        <ul className="flex items-center gap-8">
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
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-dark-border bg-dark-bg/40 text-dark-muted transition-colors hover:border-dark-muted hover:text-dark-text"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              aria-pressed={theme === 'light'}
              title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <Sun size={16} strokeWidth={2} /> : <Moon size={16} strokeWidth={2} />}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
