import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Calendar, MapPin, Route } from "lucide-react";
import { useRef } from "react";

const stats = [
  { value: "1882", label: "Ano de Nascimento", icon: Calendar },
  { value: "1961", label: "Ano de Falecimento", icon: Calendar },
  { value: "105km", label: "Extensão da Rota", icon: Route },
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-[var(--cinza-claro)] overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--azul-claro)]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--azul-escuro)]/5 rounded-full blur-3xl" />

      {/* Gold Connector Line */}
      <svg
        className="absolute top-1/2 left-0 w-full h-2 -translate-y-1/2 pointer-events-none hidden lg:block"
        preserveAspectRatio="none"
      >
        <motion.line
          x1="0"
          y1="1"
          x2="100%"
          y2="1"
          stroke="var(--azul-claro)"
          strokeWidth="2"
          strokeDasharray="8 8"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={isInView ? { pathLength: 1, opacity: 0.4 } : {}}
          transition={{ duration: 1.5, delay: 0.4 }}
        />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <motion.div style={{ y: imageY }} className="relative">
            <motion.div
              initial={{ rotateY: -90, opacity: 0 }}
              animate={isInView ? { rotateY: 0, opacity: 1 } : {}}
              transition={{ duration: 1, ease: [0.87, 0, 0.13, 1] }}
              className="relative perspective-1000"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Main Image */}
              <motion.div
                whileHover={{ rotateY: 5, rotateX: -5 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-2xl overflow-hidden shadow-2xl"
                style={{ transformStyle: "preserve-3d" }}
              >
                <img
                  src="/images/padredonizetti.webp"
                  alt="Padre Donizetti Tavares de Lima"
                  className="w-full h-[500px] lg:h-[600px] object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80";
                  }}
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--azul-escuro)]/40 via-transparent to-transparent" />
              </motion.div>

              {/* Decorative Frame */}
              <div className="absolute -inset-4 border-2 border-[var(--azul-claro)]/30 rounded-3xl -z-10" />
              <div className="absolute -inset-8 border border-[var(--azul-claro)]/10 rounded-3xl -z-20" />

              {/* Floating Badge */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{
                  delay: 1.2,
                  duration: 0.5,
                  ease: [0.34, 1.56, 0.64, 1],
                }}
                className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[var(--azul-claro)]/10 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-[var(--azul-claro)]" />
                  </div>
                  <div>
                    <div className="text-sm text-[var(--cinza-texto)]">
                      Local
                    </div>
                    <div className="font-display font-semibold text-[var(--cinza-escuro)]">
                      Tambaú, SP
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Content Column */}
          <div className="lg:pl-8">
            {/* Eyebrow */}
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mb-4"
            >
              <span className="text-[var(--azul-claro)] font-medium tracking-wider uppercase text-sm">
                Quem Foi
              </span>
            </motion.div>

            {/* Headline */}
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-[var(--cinza-escuro)] mb-6 leading-tight">
              {"Padre Donizetti: Vida e Legado do"
                .split(" ")
                .map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{ y: 40, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : {}}
                    transition={{
                      duration: 0.7,
                      delay: 0.7 + index * 0.06,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="inline-block mr-2"
                  >
                    {word}
                  </motion.span>
                ))}
              <motion.span
                initial={{ y: 40, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.7, delay: 1.3 }}
                className="inline-block text-[var(--azul-claro)]"
              >
                "Apóstolo da Acolhida"
              </motion.span>
            </h2>

            {/* Body Text */}
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
              className="text-[var(--cinza-texto)] text-lg leading-relaxed mb-8"
            >
              Conheça a trajetória do Padre Donizetti Tavares de Lima, um
              sacerdote que dedicou sua vida aos mais necessitados e se tornou
              um símbolo de fé e caridade. Nascido em Cássia (MG) em 1882, o
              Padre Donizetti dedicou grande parte de sua vida à cidade de
              Tambaú (SP), onde realizou um trabalho pastoral extraordinário.
            </motion.p>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="text-[var(--cinza-texto)] leading-relaxed mb-8"
            >
              Na década de 1950, multidões começaram a se dirigir a Tambaú,
              atraídas pela fama dos milagres atribuídos ao padre. Ele faleceu
              em 1961, mas seu legado de fé e caridade continua vivo, inspirando
              milhares de peregrinos a percorrerem esta rota espiritual.
            </motion.p>

            {/* CTA */}
            <motion.a
              href="#trilha"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{
                duration: 0.4,
                delay: 1.2,
                ease: [0.34, 1.56, 0.64, 1],
              }}
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 text-[var(--azul-escuro)] font-medium hover:text-[var(--azul-claro)] transition-colors group"
            >
              Conheça Sua História
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 60, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 1.4 + index * 0.1,
                    ease: [0.34, 1.56, 0.64, 1],
                  }}
                  whileHover={{ y: -10 }}
                  className="text-center p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <stat.icon className="w-6 h-6 text-[var(--azul-claro)] mx-auto mb-2" />
                  <div className="font-display text-2xl lg:text-3xl font-bold text-[var(--cinza-escuro)]">
                    {stat.value}
                  </div>
                  <div className="text-xs text-[var(--cinza-texto)] mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
