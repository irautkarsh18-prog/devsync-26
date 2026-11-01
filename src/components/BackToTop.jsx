import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setIsVisible(currentScroll > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top of page"
      className="fixed bottom-6 right-6 z-40 p-3.5 rounded-xl bg-[#E53935] border-2 border-[#E53935] border-b-4 border-b-[#B71C1C] text-white hover:brightness-110 shadow-2xl transition-all duration-200 active:translate-y-1 active:border-b-2 group focus:outline-none"
    >
      <ArrowUp className="w-5 h-5 stroke-[3] group-hover:-translate-y-0.5 transition-transform" />
      <span className="sr-only">Scroll to top</span>
    </button>
  );
}
