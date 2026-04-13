'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const isOnProjectsPage = pathname === '/projects';

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (isOnProjectsPage) {
      router.push('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    if (isOnProjectsPage) {
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

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 backdrop-blur-md bg-black/30 border border-dark-border rounded-full">
      <div className="px-8 py-3">
        <ul className="flex gap-8">
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
            <a 
              href="#contact"
              onClick={handleContactClick}
              className="text-dark-muted hover:text-dark-text transition-colors text-sm"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
