'use client';

import { useTheme } from './ThemeProvider';

export default function Nav() {
  const { theme, toggleTheme } = useTheme();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 70;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition - bodyRect - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--border)] bg-[var(--bg)]/95 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <a 
          href="#" 
          className="font-semibold tracking-[-0.02em] text-[15px] hover:text-[var(--accent)] transition-colors"
        >
          CheukYin LAM
        </a>

        <div className="flex items-center gap-8 text-sm">
          <button 
            onClick={() => scrollTo('about')}
            className="text-[var(--text-2)] hover:text-[var(--text)] transition-colors hidden md:block"
          >
            About
          </button>
          <button 
            onClick={() => scrollTo('experience')}
            className="text-[var(--text-2)] hover:text-[var(--text)] transition-colors hidden md:block"
          >
            Experience
          </button>
          <button 
            onClick={() => scrollTo('work')}
            className="text-[var(--text-2)] hover:text-[var(--text)] transition-colors"
          >
            Work
          </button>
          <button 
            onClick={() => scrollTo('proof')}
            className="text-[var(--text-2)] hover:text-[var(--text)] transition-colors hidden md:block"
          >
            Proof
          </button>

          <button
            onClick={toggleTheme}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-[var(--border)] text-[var(--text-2)] hover:text-[var(--text)] hover:border-[var(--text-2)] transition-all"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? '☾' : '☼'}
          </button>
        </div>
      </div>
    </nav>
  );
}
