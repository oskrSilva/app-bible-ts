import { useCallback } from 'react';

export function useNavigateToSection() {
  const navigateToSection = useCallback((section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return { navigateToSection };
}