import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { useRef } from "react";

export default function CTA() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  const particles = Array.from({ length: 15 }, (_, index) => ({
    width: ((index * 3) % 4) + 2,
    height: ((index * 5) % 4) + 2,
    left: `${(index * 37) % 100}%`,
    top: `${(index * 53) % 100}%`,
    duration: ((index * 2) % 5) + 5,
    delay: (index * 2) % 3,
  }));

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/hero-peregrinos.png')`,
          }}
          onError={(e) => {
            (e.target as HTMLDivElement).style.backgroundImage =
              `url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&q=80')`;
          }}
        />
        {/* Overlay - Cores da Logo */}
        <div className="absolute inset-0 bg-[var(--azul-escuro)]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--azul-escuro)]/90 to-[var(--azul-escuro)]/70" />
      </motion.div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/20"
            style={{
              width: particle.width,
              height: particle.height,
              left: particle.left,
              top: particle.top,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.87, 0, 0.13, 1] }}
        >
          <h2 className="font-display text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            {"Pronto para iniciar sua jornada espiritual?"
              .split(" ")
              .map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ y: 30, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: 0.2 + index * 0.05,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="inline-block mr-2"
                >
                  {word}
                </motion.span>
              ))}
          </h2>
        </motion.div>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-white/80 text-lg lg:text-xl mb-10 max-w-2xl mx-auto"
        >
          Entre em contato conosco e saiba como participar da próxima
          peregrinação. Uma experiência transformadora espera por você.
        </motion.p>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{
            duration: 0.5,
            delay: 0.9,
            ease: [0.34, 1.56, 0.64, 1],
          }}
          className="flex flex-wrap justify-center gap-4"
        >
          <motion.a
            href="#peregrino"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--azul-claro)] text-white font-medium rounded-full hover:bg-[var(--azul-claro-dark)] transition-all shadow-lg hover:shadow-xl hover:glow-cyan"
          >
            <MapPin className="w-5 h-5" />
            Iniciar Jornada
          </motion.a>
          <motion.a
            href="https://wa.me/5516991209426"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 border border-white/30 text-white font-medium rounded-full backdrop-blur-sm hover:bg-white/20 transition-all shadow-lg hover:shadow-xl"
          >
            <span>Fale Conosco</span>

            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-16 flex flex-wrap justify-center gap-8"
        >
          {[
            { value: "800+", label: "Peregrinos" },
            { value: "05", label: "Cidades" },
            { value: "105km", label: "de Rota" },
            { value: "100%", label: "Transformador" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-display text-2xl lg:text-3xl font-bold text-[var(--azul-claro)]">
                {stat.value}
              </div>
              <div className="text-white/60 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
