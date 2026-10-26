import { useEffect } from 'react';
import Navbar from './components/sections/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Discover from './components/sections/Discover';
import Statistics from './components/sections/Statistics';
import Hospedagem from './components/sections/Hospedagem';
import Peregrino from './components/sections/Peregrino';
import Loja from './components/sections/Loja';
import CTA from './components/sections/CTA';
import Footer from './components/sections/Footer';

function App() {
  useEffect(() => {
    // Smooth scroll for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      if (anchor) {
        const href = anchor.getAttribute('href');
        if (href && href !== '#') {
          e.preventDefault();
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Discover />
        <Statistics />
        <Hospedagem />
        <Peregrino />
        <Loja />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
