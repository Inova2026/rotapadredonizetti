import { motion, useScroll, useTransform } from "framer-motion";
import { Award, ChevronDown, Home, MapPin } from "lucide-react";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, -80]);

  const particles = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    size: ((i * 7) % 7) + 2,
    x: (i * 37) % 100,
    y: (i * 53) % 100,
    driftX: ((i * 11) % 31) - 15,
    duration: ((i * 3) % 10) + 10,
    delay: (i * 2) % 5,
  }));

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div
        style={{ y: backgroundY, scale: backgroundScale }}
        className="absolute inset-0 z-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/pes-peregrino-caminhando.webp')`,
          }}
        />
        {/* Gradient Overlay - Cores da Logo */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--azul-escuro)]/90 via-[var(--azul-escuro)]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--azul-escuro)]/60 via-transparent to-[var(--azul-escuro)]/40" />
      </motion.div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              background:
                particle.id % 2 === 0
                  ? "rgba(33, 189, 241, 0.5)"
                  : "rgba(255, 255, 255, 0.3)",
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, particle.driftX, 0],
              opacity: [0.2, 0.7, 0.2],
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

      {/* Light Rays */}
      <div className="absolute inset-0 z-5 pointer-events-none overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-0 w-1 bg-gradient-to-b from-white/15 to-transparent"
            style={{
              left: `${20 + i * 15}%`,
              height: "60%",
              transformOrigin: "top center",
            }}
            animate={{
              rotate: [-5, 5, -5],
              opacity: [0.15, 0.35, 0.15],
            }}
            transition={{
              duration: 15,
              delay: i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32"
      >
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={{ clipPath: "inset(0 0% 0 0)" }}
            transition={{ duration: 0.6, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-[var(--azul-claro)] text-sm font-medium tracking-wider uppercase border border-[var(--azul-claro)]/30">
              <MapPin size={16} />
              Uma Jornada de Fé
            </span>
          </motion.div>

          {/* Headline */}
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            {"Rota Padre Donizetti".split(" ").map((word, index) => (
              <motion.span
                key={index}
                initial={{ y: 60, opacity: 0, rotateX: -30 }}
                animate={{ y: 0, opacity: 1, rotateX: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 1 + index * 0.1,
                  ease: [0.87, 0, 0.13, 1],
                }}
                className="inline-block mr-4"
                style={{ transformStyle: "preserve-3d" }}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* Subheadline */}
          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl text-white/90 mb-10 font-accent italic leading-relaxed"
          >
            Fé, devoção e superação em uma jornada de transformação. Venha
            percorrer caminhos sagrados e descobrir o legado inspirador de Padre
            Donizetti Tavares de Lima.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-4"
          >
            <motion.a
              href="#trilha"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--azul-claro)] text-white font-medium rounded-full hover:bg-[var(--azul-claro-dark)] transition-all duration-300 shadow-lg hover:shadow-xl hover:glow-cyan"
            >
              <MapPin size={20} />
              Conheça a Rota
            </motion.a>
            <motion.a
              href="#peregrino"
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.85 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-medium rounded-full hover:bg-white/20 transition-all duration-300 border border-white/30"
            >
              <Award size={20} />
              Como Participar
            </motion.a>
          </motion.div>

          {/* Feature Cards */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 2.2 }}
            className="grid grid-cols-3 gap-4 mt-16"
          >
            {[
              { icon: MapPin, label: "105km", desc: "de percurso" },
              { icon: Home, label: "05", desc: "municípios" },
              { icon: Award, label: "800+", desc: "peregrinos" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 2.4 + index * 0.15 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-[var(--azul-claro)]/30"
              >
                <item.icon className="w-6 h-6 text-[var(--azul-claro)] mx-auto mb-2" />
                <div className="text-2xl font-display font-bold text-white">
                  {item.label}
                </div>
                <div className="text-xs text-white/70">{item.desc}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 2.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center text-white/60"
        >
          <span className="text-xs mb-2 tracking-wider">ROLAR</span>
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
}
