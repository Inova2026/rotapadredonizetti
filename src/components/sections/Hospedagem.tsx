import { motion, useInView } from "framer-motion";
import {
  Bed,
  Car,
  ChevronLeft,
  ChevronRight,
  Coffee,
  MapPin,
  Phone,
  Star,
  Utensils,
  Wifi,
  type LucideIcon,
} from "lucide-react";
import {
  useEffect,
  useRef,
  useState,
  type TouchEvent as ReactTouchEvent,
} from "react";

const amenityIcons: Record<string, LucideIcon> = {
  "Café da Manhã": Coffee,
  "Wi-Fi": Wifi,
  Estacionamento: Car,
  Cantina: Utensils,
  "Próximo à Rota": MapPin,
  "Ambiente Familiar": Bed,
  "Quartos Confortáveis": Bed,
};
const accommodations = [
  {
    id: 1,
    name: "CMS Plaza Hotel",
    location: "Serrana",
    address: "Rua Santa Cruz 442, Centro",
    phone: "(16) 3987-5746",
    whatsapp: true,
    image: "/images/hotel-cms-serrana-sp.webp",
    fallbackImage:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    amenities: ["Café da Manhã", "Wi-Fi", "Estacionamento"],
    rating: 4.5,
    description:
      "Hotel moderno no centro de Serrana, ponto de partida ideal para sua peregrinação.",
  },
  {
    id: 2,
    name: "VM Estacionamento e Cantina",
    location: "Serrana",
    address: "Rua João Terçariol 123, Centro",
    phone: "(16) 99135-7944",
    contact: "Maria Inês",
    image: "/images/vm-cantina.webp",
    fallbackImage:
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80",
    amenities: ["Estacionamento", "Cantina", "Próximo à Rota"],
    rating: 4,
    description:
      "A 500 metros da Rota, oferece estacionamento seguro e cantina com comidas caseiras.",
  },
  {
    id: 3,
    name: "Pousada da Vovó",
    location: "Serra Azul",
    address: "Rua Expedicionário Geraldo Rodrigues de Souza 581, Centro",
    phone: "(16) 99224-4755",
    contact: "Ana",
    image: "/images/restaurante-da-vovo-serra-azul-sp.webp",
    fallbackImage:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80",
    amenities: ["Café da Manhã", "Ambiente Familiar", "Wi-Fi"],
    rating: 5,
    description:
      "Pousada familiar com ambiente acolhedor e um delicioso café da manhã típico da região.Oferecemos almoço ou jantar grátis.Também somos ponto de carimbo para os romeiros da Rota do Padre Donizetti.",
  },
  {
    id: 4,
    name: "Hotel São Simão",
    location: "São Simão",
    address: "Rua Santa Cruz, 164 - Centro",
    phone: "16 3984-1218 ",
    image: "/images/hotel-sao-simao.webp",
    fallbackImage:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80",
    amenities: ["Café da Manhã", "Estacionamento", "Wi-Fi"],
    rating: 4,
    description:
      "Hotel completo com estrutura para descanso e recuperação da energia.Tambem somos ponto de carimbo para os romeiros da Rota do Padre Donizetti.",
  },
  {
    id: 5,
    name: "Pousada Alfa",
    location: "São Simão",
    address: "Rua José Furlan, 1159 - Centro",
    phone: "(16)  16 3984-1218 ",
    image: "/images/pousada-alfa-sao-simao-sp.webp",
    fallbackImage:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
    amenities: ["Café da Manhã", "Quartos Confortáveis", "Wi-Fi"],
    rating: 4.5,
    description:
      "Pousada aconchegante a 600 metros da Rota Padre Dozinetti.Também somos ponto de carimbo para os romeiros da Rota do Padre Donizetti.",
  },
];

export default function Hospedagem() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(() =>
    typeof window === "undefined"
      ? 1
      : window.innerWidth >= 1024
        ? 3
        : window.innerWidth >= 640
          ? 2
          : 1,
  );
  const maxIndex = Math.max(0, accommodations.length - visibleCards);

  useEffect(() => {
    const updateVisibleCards = () => {
      const nextVisibleCards =
        window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1;
      setVisibleCards(nextVisibleCards);
      setCurrentIndex((index) =>
        Math.min(index, Math.max(0, accommodations.length - nextVisibleCards)),
      );
    };

    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleTouchStart = (event: ReactTouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.changedTouches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event: ReactTouchEvent<HTMLDivElement>) => {
    const touchEndX = event.changedTouches[0]?.clientX;
    if (touchStartX.current === null || touchEndX === undefined) return;

    const swipeDistance = touchEndX - touchStartX.current;
    touchStartX.current = null;

    if (swipeDistance < -50) nextSlide();
    if (swipeDistance > 50) prevSlide();
  };

  return (
    <section
      ref={sectionRef}
      id="hospedagem"
      className="relative py-24 lg:py-32 bg-[var(--cinza-claro)] overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[var(--azul-escuro)]/5 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-[var(--azul-claro)] font-medium tracking-wider uppercase text-sm mb-4 block">
            Onde Ficar
          </span>
          <h2 className="font-display text-3xl lg:text-5xl font-bold text-[var(--cinza-escuro)] mb-6">
            Pousadas e Hospedagens
          </h2>
          <p className="text-[var(--cinza-texto)] text-lg">
            Encontre os melhores lugares para descansar ao longo da Rota Padre
            Donizetti, com opções para todos os tipos de peregrinos.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            aria-label="Hospedagem anterior"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-[var(--azul-escuro)] hover:text-white transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Próximas hospedagens"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-[var(--azul-escuro)] hover:text-white transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Cards Container */}
          <div
            className="overflow-hidden touch-pan-y"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <motion.div
              className="flex"
              animate={{ x: `-${(currentIndex * 100) / visibleCards}%` }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              {accommodations.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ y: 60, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-3"
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow h-full">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            item.fallbackImage;
                        }}
                      />
                      <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                        <Star className="w-4 h-4 text-[var(--azul-claro)] fill-[var(--azul-claro)]" />
                        <span className="text-sm font-medium">
                          {item.rating}
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4">
                        <span className="px-3 py-1 bg-[var(--azul-escuro)] text-white text-xs font-medium rounded-full">
                          {item.location}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <h3 className="font-display text-lg font-bold text-[var(--cinza-escuro)] mb-2">
                        {item.name}
                      </h3>
                      <p className="text-[var(--cinza-texto)] text-sm mb-4 line-clamp-2">
                        {item.description}
                      </p>

                      {/* Address */}
                      <div className="flex items-start gap-2 text-sm text-[var(--cinza-texto)] mb-3">
                        <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span>{item.address}</span>
                      </div>

                      {/* Phone */}
                      <div className="flex items-center gap-2 text-sm text-[var(--cinza-texto)] mb-4">
                        <Phone className="w-4 h-4 flex-shrink-0" />
                        <span>{item.phone}</span>
                        {item.whatsapp && (
                          <span className="text-xs text-[var(--azul-claro)] font-medium">
                            WhatsApp
                          </span>
                        )}
                      </div>

                      {/* Amenities */}
                      <div className="flex flex-wrap gap-2">
                        {item.amenities.slice(0, 3).map((amenity, i) => {
                          const Icon = amenityIcons[amenity] || Bed;
                          return (
                            <span
                              key={i}
                              className="inline-flex items-center gap-1 px-2 py-1 bg-[var(--cinza-claro)] text-[var(--cinza-texto)] text-xs rounded-full"
                            >
                              <Icon className="w-3 h-3" />
                              {amenity}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Ir para hospedagem ${index + 1}`}
                aria-current={index === currentIndex ? "true" : undefined}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-8 bg-[var(--azul-escuro)]"
                    : "bg-[var(--cinza-texto)]/30 hover:bg-[var(--cinza-texto)]/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Info Box */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 p-6 bg-[var(--azul-escuro)]/5 rounded-2xl border border-[var(--azul-escuro)]/10"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-display text-lg font-bold text-[var(--cinza-escuro)] mb-1">
                Precisa de ajuda para encontrar hospedagem?
              </h4>
              <p className="text-[var(--cinza-texto)] text-sm">
                Entre em contato conosco e ajudaremos você a planejar sua
                estadia. Ponto de carimbo e funcionamento 24 horas de domingo à
                domingo
              </p>
            </div>
            <motion.a
              href="tel:16 99120 9426"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--azul-escuro)] text-white font-medium rounded-full hover:bg-[var(--azul-medio)] transition-colors whitespace-nowrap"
            >
              <Phone className="w-5 h-5" />
              (16) 99120-9426
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
