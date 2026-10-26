import { motion, useInView } from "framer-motion";
import { Eye, Filter, Heart, Search, ShoppingBag, Star } from "lucide-react";
import { useRef, useState } from "react";

const products = [
  {
    id: 1,
    name: "Camiseta Peregrino",
    price: 79.9,
    category: "Vestuário",
    image: "/images/camisa-rota-padre-donizetti.webp",
    fallbackImage: "https://picsum.photos/600/400?random=1",
    rating: 4.8,
    isNew: true,
  },
  {
    id: 2,
    name: "Credencial Oficial",
    price: 25.0,
    category: "Acessórios",
    image: "/images/retire-a-credencial-da-rota.webp",
    fallbackImage: "https://picsum.photos/600/400?random=2",
    rating: 5,
    isBestseller: true,
  },
  {
    id: 3,
    name: "Bastão de Peregrinação",
    price: 45.0,
    category: "Equipamentos",
    image: "/images/bastao-peregrino.webp",
    fallbackImage: "https://picsum.photos/600/400?random=3",
    rating: 4.5,
  },
  {
    id: 4,
    name: "Medalha Padre Donizetti",
    price: 35.0,
    category: "Religiosos",
    image: "/images/medalha.webp",
    fallbackImage: "https://picsum.photos/600/400?random=4",
    rating: 4.9,
    isBestseller: true,
  },
  {
    id: 5,
    name: "Boné Rota Padre Donizetti",
    price: 49.9,
    category: "Vestuário",
    image: "/images/bone-rota-padre-donizetti.webp",
    fallbackImage: "https://picsum.photos/600/400?random=5",
    rating: 4.6,
  },
  {
    id: 6,
    name: "Garrafa Térmica",
    price: 59.9,
    category: "Equipamentos",
    image: "/images/garrafa-rota-padre-donizetti.webp",
    fallbackImage: "https://picsum.photos/600/400?random=6",
    rating: 4.7,
    isNew: true,
  },
  {
    id: 7,
    name: "Livro - Vida de Padre Donizetti",
    price: 39.9,
    category: "Livros",
    image: "/images/agenda-rota-padre-donizetti.webp",
    fallbackImage: "https://picsum.photos/600/400?random=7",
    rating: 4.8,
  },
  {
    id: 8,
    name: "Terço Especial",
    price: 29.9,
    category: "Religiosos",
    image: "/images/terco-padre-donizetti.webp",
    fallbackImage: "https://picsum.photos/600/400?random=8",
    rating: 4.9,
  },
];

const categories = [
  "Todos",
  "Vestuário",
  "Acessórios",
  "Equipamentos",
  "Religiosos",
  "Livros",
];

export default function Loja() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [searchQuery, setSearchQuery] = useState("");
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id],
    );
  };

  const filteredProducts = products.filter(
    (product) =>
      (activeCategory === "Todos" || product.category === activeCategory) &&
      product.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <section
      ref={sectionRef}
      id="loja"
      className="relative py-24 lg:py-32 bg-[var(--cinza-claro)] overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[var(--azul-claro)]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-[var(--azul-escuro)]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-[var(--azul-claro)] font-medium tracking-wider uppercase text-sm mb-4 block">
            Loja Oficial
          </span>
          <h2 className="font-display text-3xl lg:text-5xl font-bold text-[var(--cinza-escuro)] mb-6">
            Produtos da Rota
          </h2>
          <p className="text-[var(--cinza-texto)] text-lg">
            Equipamentos, vestuário e artigos religiosos oficiais da Rota Padre
            Donizetti. Leve uma lembrança desta jornada espiritual.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col md:flex-row gap-4 mb-8"
        >
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--cinza-texto)]" />
            <input
              type="text"
              placeholder="Buscar produtos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white rounded-full border border-gray-200 focus:border-[var(--azul-escuro)] focus:ring-2 focus:ring-[var(--azul-escuro)]/20 outline-none transition-all"
            />
          </div>

          {/* Category Filter */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
            <Filter className="w-5 h-5 text-[var(--cinza-texto)] flex-shrink-0" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  activeCategory === category
                    ? "bg-[var(--azul-escuro)] text-white"
                    : "bg-white text-[var(--cinza-texto)] hover:bg-[var(--azul-escuro)]/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ y: 40, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = product.fallbackImage;
                  }}
                />

                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  {product.isNew && (
                    <span className="px-3 py-1 bg-[var(--azul-escuro)] text-white text-xs font-medium rounded-full">
                      Novo
                    </span>
                  )}
                  {product.isBestseller && (
                    <span className="px-3 py-1 bg-[var(--azul-claro)] text-white text-xs font-medium rounded-full">
                      Mais Vendido
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={() => toggleFavorite(product.id)}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                      favorites.includes(product.id)
                        ? "bg-red-500 text-white"
                        : "bg-white text-[var(--cinza-texto)] hover:bg-red-50 hover:text-red-500"
                    }`}
                  >
                    <Heart
                      className={`w-5 h-5 ${favorites.includes(product.id) ? "fill-current" : ""}`}
                    />
                  </button>
                  <button className="w-10 h-10 bg-white text-[var(--cinza-texto)] rounded-full flex items-center justify-center hover:bg-[var(--azul-escuro)] hover:text-white transition-colors">
                    <Eye className="w-5 h-5" />
                  </button>
                </div>

                {/* Quick Add */}
                <motion.button
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ scale: 1.02 }}
                  className="absolute bottom-0 left-0 right-0 py-3 bg-[var(--azul-escuro)] text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  Adicionar ao Carrinho
                </motion.button>
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex items-center gap-1 mb-2">
                  <Star className="w-4 h-4 text-[var(--azul-claro)] fill-[var(--azul-claro)]" />
                  <span className="text-sm text-[var(--cinza-texto)]">
                    {product.rating}
                  </span>
                </div>
                <h3 className="font-medium text-[var(--cinza-escuro)] mb-1 group-hover:text-[var(--azul-escuro)] transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-[var(--cinza-texto)] mb-2">
                  {product.category}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-display text-lg font-bold text-[var(--azul-escuro)]">
                    R$ {product.price.toFixed(2)}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--azul-escuro)] text-white font-medium rounded-full hover:bg-[var(--azul-medio)] transition-colors shadow-lg hover:shadow-xl"
          >
            <ShoppingBag className="w-5 h-5" />
            Ver Todos os Produtos
          </motion.button>
        </motion.div>

        {/* Info Banner */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 grid sm:grid-cols-3 gap-6"
        >
          {[
            { title: "Frete Grátis", desc: "Para compras acima de R$ 150" },
            { title: "Pagamento Seguro", desc: "Ambiente 100% protegido" },
            { title: "Entrega Rápida", desc: "Receba em até 7 dias úteis" },
          ].map((item, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-xl shadow-sm"
            >
              <h4 className="font-display font-bold text-[var(--cinza-escuro)] mb-1">
                {item.title}
              </h4>
              <p className="text-sm text-[var(--cinza-texto)]">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
