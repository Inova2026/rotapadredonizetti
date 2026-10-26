import { motion, useInView } from "framer-motion";
import { ArrowRight, Award, Home, MapPin } from "lucide-react";
import { useRef } from "react";

const features = [
  {
    icon: MapPin,
    title: "O Caminho",
    description:
      "Percorra os passos de Padre Donizetti em uma jornada de aproximadamente 105km entre Serrana e Tambaú.",
    image: "/images/peregrino-de-bike-destino-tambau.webp",
    fallbackImage: "./",
    rotation: -2,
    color: "from-[var(--azul-escuro)] to-[var(--azul-medio)]",
  },
  {
    icon: Home,
    title: "Hospedagem",
    description:
      "Durante o percurso, os peregrinos estarão amparados por hotéis e pousadas credenciados para descansar durante sua jornada..",
    image: "/images/hotel-cms-serrana-sp.webp",
    fallbackImage:
      "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9ToxRYToVUiGFO60gqDvmxrLzNBqjjJUUucb0gctfyuzTT8C7VeknLiBZAxpckK0nJ5YUlaR-JZS0SGZ5XORD2PhFcqfMKeSSXKtLVkRBL1aonQTkMUfH9iRYY2NA0wSWYdu2OqwQ=s1360-w1360-h1020-rw",
    rotation: 0,
    color: "from-[var(--azul-claro)] to-[var(--azul-claro-dark)]",
  },
  {
    icon: Award,
    title: "Credenciais",
    description:
      "Obtenha sua credencial e colecione carimbos em cada parada ao longo da rota.",
    image: "/images/retire-a-credencial-da-rota.webp",
    fallbackImage:
      "https://images.unsplash.com/photo-1589330694653-501ba68a0ba6?w=600&q=80",
    rotation: 2,
    color: "from-[var(--azul-ciano)] to-[var(--azul-medio)]",
  },
];

export default function Discover() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="trilha"
      className="relative py-24 lg:py-32 bg-white overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--azul-escuro)]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[var(--azul-claro)]/5 rounded-full blur-3xl" />
      </div>

      {/* SVG Connecting Paths */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M 200 300 Q 400 200 600 350 T 1000 300"
          fill="none"
          stroke="var(--azul-claro)"
          strokeWidth="2"
          strokeDasharray="8 8"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={isInView ? { pathLength: 1, opacity: 0.4 } : {}}
          transition={{ duration: 1.5, delay: 0.7 }}
        />
      </svg>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-[var(--azul-claro)] font-medium tracking-wider uppercase text-sm mb-4 block">
            Descubra
          </span>
          <h2 className="font-display text-3xl lg:text-5xl font-bold text-[var(--cinza-escuro)] mb-6">
            A Rota Padre Donizetti
          </h2>
          <p className="text-[var(--cinza-texto)] text-lg">
            Uma experiência transformadora que combina fé, natureza e história
            em uma jornada inesquecível pelos caminhos do Apóstolo da Caridade.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ y: 100, rotateX: 15, opacity: 0 }}
              animate={
                isInView
                  ? {
                      y: 0,
                      rotateX: 0,
                      opacity: 1,
                    }
                  : {}
              }
              transition={{
                duration: 0.8,
                delay: 0.2 + index * 0.15,
                ease: [0.87, 0, 0.13, 1],
              }}
              whileHover={{
                y: -15,
                rotate: 0,
                transition: { duration: 0.3 },
              }}
              className="group relative"
              style={{
                transform: `rotate(${feature.rotation}deg)`,
                transformStyle: "preserve-3d",
              }}
            >
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <motion.img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        feature.fallbackImage;
                    }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                  {/* Icon Badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{
                      delay: 0.8 + index * 0.15,
                      duration: 0.4,
                      ease: [0.34, 1.56, 0.64, 1],
                    }}
                    className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center shadow-lg`}
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-[var(--cinza-escuro)] mb-3 group-hover:text-[var(--azul-escuro)] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-[var(--cinza-texto)] text-sm leading-relaxed mb-4">
                    {feature.description}
                  </p>
                  <motion.a
                    href={`#${feature.title.toLowerCase().replace(" ", "-")}`}
                    className="inline-flex items-center gap-2 text-[var(--azul-escuro)] font-medium text-sm group/link"
                    whileHover={{ x: 5 }}
                  >
                    Saiba mais
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </motion.a>
                </div>

                {/* Hover Border Glow */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[var(--azul-claro)]/30 transition-colors duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-16"
        >
          <motion.a
            href="#peregrino"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--azul-escuro)] text-white font-medium rounded-full hover:bg-[var(--azul-medio)] transition-colors shadow-lg hover:shadow-xl"
          >
            <MapPin className="w-5 h-5" />
            Comece Sua Peregrinação
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
