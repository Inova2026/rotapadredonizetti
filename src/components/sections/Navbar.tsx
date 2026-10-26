import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'A Rota', href: '#home' },
  { name: 'A Trilha', href: '#trilha' },
  { name: 'Hospedagem', href: '#hospedagem' },
  { name: 'Peregrino', href: '#peregrino' },
  { name: 'Loja', href: '#loja' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'glassmorphism shadow-lg py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#home"
              initial={{ scale: 0.8, rotateY: -15 }}
              animate={{ scale: 1, rotateY: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
              className="relative group"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src="/images/logo.png"
                alt="Rota Padre Donizetti"
                className={`transition-all duration-300 ${
                  isScrolled ? 'h-24' : 'h-28'
                }`}
              />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 glow-cyan rounded-lg" />
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.3 + index * 0.08,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  className={`font-medium text-sm tracking-wide underline-grow transition-colors ${
                    isScrolled
                      ? 'text-[var(--cinza-escuro)] hover:text-[var(--azul-escuro)]'
                      : 'text-white hover:text-[var(--azul-claro)]'
                  }`}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            {/* CTA Button */}
            <motion.a
              href="#peregrino"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden lg:inline-flex items-center px-6 py-2.5 bg-[var(--azul-claro)] text-white font-medium text-sm rounded-full hover:bg-[var(--azul-claro-dark)] transition-colors duration-300 shadow-lg hover:shadow-xl hover:glow-cyan"
            >
              Iniciar Jornada
            </motion.a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                isScrolled
                  ? 'text-[var(--cinza-escuro)] hover:bg-gray-100'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/50"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="absolute right-0 top-0 h-full w-72 bg-white shadow-2xl pt-24 px-6"
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-medium text-[var(--cinza-escuro)] hover:text-[var(--azul-escuro)] py-2 border-b border-gray-100 transition-colors"
                  >
                    {link.name}
                  </motion.a>
                ))}
                <motion.a
                  href="#peregrino"
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-4 inline-flex items-center justify-center px-6 py-3 bg-[var(--azul-claro)] text-white font-medium rounded-full"
                >
                  Iniciar Jornada
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
