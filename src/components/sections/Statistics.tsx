import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Church, MapPin, Route, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const stats = [
  {
    value: 105,
    suffix: "",
    label: "Quilômetros de percurso total",
    icon: Route,
  },
  { value: 5, suffix: "", label: "Municípios participantes", icon: MapPin },
  {
    value: 25,
    suffix: "+",
    label: "Pontos históricos e religiosos",
    icon: Church,
  },
  { value: 800, suffix: "+", label: "Peregrinos por ano", icon: Users },
];

const cities = [
  { name: "Serrana", x: 20, y: 20 },
  { name: "Serra Azul", x: 35, y: 35 },
  { name: "Santa Rita", x: 50, y: 45 },
  { name: "Tambaú", x: 80, y: 70 },
];

function AnimatedCounter({
  value,
  suffix,
  isInView,
}: {
  value: number;
  suffix: string;
  isInView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 1500;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value, isInView]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function Statistics() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const mapRotate = useTransform(scrollYProgress, [0, 1], [-5, 5]);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-gradient-blue overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Animated Gradient Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--azul-claro)] rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white rounded-full blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{
                  duration: 0.8,
                  delay: 0.2 + index * 0.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20"
              >
                <stat.icon className="w-8 h-8 text-[var(--azul-claro)] mb-4" />
                <div className="font-display text-4xl lg:text-5xl font-bold text-gradient-blue mb-2">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    isInView={isInView}
                  />
                </div>
                <div className="text-white/80 text-sm">{stat.label}</div>

                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-[var(--azul-claro)]/5 opacity-0 hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>

          {/* Map Illustration */}
          <motion.div
            initial={{ scale: 0.8, rotate: -10, opacity: 0 }}
            animate={isInView ? { scale: 1, rotate: 0, opacity: 1 } : {}}
            transition={{
              duration: 1,
              delay: 0.4,
              ease: [0.34, 1.56, 0.64, 1],
            }}
            style={{ rotate: mapRotate }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Map Background */}
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20" />

              {/* SVG Route Map */}
              <svg
                viewBox="0 0 100 100"
                className="absolute inset-0 w-full h-full p-8"
              >
                {/* Route Path */}
                <motion.path
                  d="M 20 20 Q 35 25 35 35 T 50 45 Q 65 55 80 70"
                  fill="none"
                  stroke="var(--azul-claro)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : {}}
                  transition={{ duration: 2, delay: 1 }}
                  style={{
                    strokeDasharray: "4 4",
                  }}
                />

                {/* City Dots */}
                {cities.map((city, index) => (
                  <motion.g key={index}>
                    {/* Pulsing Ring */}
                    <motion.circle
                      cx={city.x}
                      cy={city.y}
                      r="4"
                      fill="none"
                      stroke="var(--azul-claro)"
                      strokeWidth="1"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={
                        isInView
                          ? { scale: [1, 2, 1], opacity: [0.8, 0, 0.8] }
                          : {}
                      }
                      transition={{
                        duration: 2,
                        delay: 1.5 + index * 0.2,
                        repeat: Infinity,
                      }}
                    />
                    {/* Main Dot */}
                    <motion.circle
                      cx={city.x}
                      cy={city.y}
                      r="3"
                      fill="var(--azul-claro)"
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{
                        delay: 1 + index * 0.15,
                        duration: 0.3,
                        ease: [0.34, 1.56, 0.64, 1],
                      }}
                    />
                    {/* City Label */}
                    <motion.text
                      x={city.x}
                      y={city.y - 8}
                      textAnchor="middle"
                      fill="white"
                      fontSize="4"
                      fontFamily="Cinzel"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ delay: 1.8 + index * 0.15 }}
                    >
                      {city.name}
                    </motion.text>
                  </motion.g>
                ))}
              </svg>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 border-2 border-[var(--azul-claro)]/30 rounded-full" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 border border-[var(--azul-claro)]/20 rounded-full" />
            </div>

            {/* Map Caption */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 2.5 }}
              className="text-center text-white/60 text-sm mt-6"
            >
              Rota Serrana → Tambaú
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
