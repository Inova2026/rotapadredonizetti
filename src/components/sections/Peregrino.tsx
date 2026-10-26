import { motion, useInView } from "framer-motion";
import {
  Award,
  Backpack,
  CheckCircle,
  Download,
  FileText,
  Heart,
  Mail,
  MapPin,
  Phone,
  Shield,
  Stamp,
  Sun,
} from "lucide-react";
import { useRef, useState } from "react";

const steps = [
  {
    icon: FileText,
    title: "Adquira sua Credencial",
    description:
      "Você pode solicitar sua credencial online ou retirá-la pessoalmente em um dos pontos de distribuição oficial.",
    color: "bg-[var(--azul-escuro)]",
  },
  {
    icon: Stamp,
    title: "Colete os Carimbos",
    description:
      "Em cada ponto oficial da rota, apresente sua credencial para receber o carimbo exclusivo daquele local.",
    color: "bg-[var(--azul-claro)]",
  },
  {
    icon: Award,
    title: "Receba seu Certificado",
    description:
      "Ao chegar em Tambaú com todos os carimbos, você receberá o certificado oficial de conclusão da peregrinação.",
    color: "bg-[var(--azul-ciano)]",
  },
];

const tips = [
  {
    icon: Backpack,
    title: "O Que Levar",
    items: [
      "Mochila confortável",
      "Calçados adequados",
      "Protetor solar e chapéu",
      "Garrafa de água",
      "Credencial do peregrino",
    ],
  },
  {
    icon: Sun,
    title: "Dicas Importantes",
    items: [
      "Planeje sua jornada com antecedência",
      "Reserve hospedagens com antecedência",
      "Caminhe em grupo se for iniciante",
      "Respeite a natureza e o ambiente local",
    ],
  },
  {
    icon: Shield,
    title: "Segurança",
    items: [
      "Leve documentos",
      "Tenha seguro saúde",
      "Informe alguém sobre seu percurso",
      "Mantenha contato com a central",
    ],
  },
];

const emissionPoints = [
  {
    name: "Paróquia Nossa Senhora das Dores",
    location: "Serrana, SP",
    address: "Praça da Matriz, 92",
  },
  {
    name: "Paróquia Divino Espírito Santo",
    location: "Serra Azul, SP",
    address: "Rua Capitão Luiz do Carmo, 531",
  },
  {
    name: "Parroquia Santo Antônio de Pádua",
    location: "Bento Quirino, SP",
    address: "Praça Santo Antonio, 256",
  },

  {
    name: "Paróquia São Simão Apóstolo",
    location: "São Simão, SP",
    address: "Praça da Matriz, 415",
  },
  {
    name: "Paróquia Santa Rosa do Viterbo",
    location: "Santa Rosa do Viterbo, SP",
    address: "Praça Dr Guido Maestrelo, 119",
  },
  {
    name: "Santuário de Nossa Senhora Aparecida",
    location: "Tambaú, SP",
    address: "Praça Padre Donizetti, 09",
  },
];

export default function Peregrino() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState<"credencial" | "dicas" | "pontos">(
    "credencial",
  );

  return (
    <section
      ref={sectionRef}
      id="peregrino"
      className="relative py-24 lg:py-32 bg-white overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--azul-claro)]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[var(--azul-escuro)]/5 rounded-full blur-3xl" />
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
            Informações
          </span>
          <h2 className="font-display text-3xl lg:text-5xl font-bold text-[var(--cinza-escuro)] mb-6">
            Guia do Peregrino
          </h2>
          <p className="text-[var(--cinza-texto)] text-lg">
            Tudo o que você precisa saber para viver uma experiência
            transformadora na Rota Padre Donizetti.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {[
            { id: "credencial", label: "Credencial", icon: Award },
            { id: "dicas", label: "Dicas", icon: Heart },
            { id: "pontos", label: "Pontos de Emissão", icon: MapPin },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                activeTab === tab.id
                  ? "bg-[var(--azul-escuro)] text-white shadow-lg"
                  : "bg-[var(--cinza-claro)] text-[var(--cinza-texto)] hover:bg-[var(--azul-escuro)]/10"
              }`}
            >
              <tab.icon className="w-5 h-5" />
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <div className="min-h-[500px]">
          {/* Credencial Tab */}
          {activeTab === "credencial" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {/* What is Credential */}
              <div className="bg-gradient-to-br from-[var(--azul-escuro)] to-[var(--azul-medio)] rounded-3xl p-8 lg:p-12 mb-12 text-white">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="font-display text-2xl lg:text-3xl font-bold mb-4">
                      O que é a Credencial?
                    </h3>
                    <p className="text-white/80 leading-relaxed mb-6">
                      A Credencial do Peregrino é um documento que comprova a
                      realização da peregrinação pela Rota Padre Donizetti. Ao
                      longo do caminho, o peregrino deve carimbar sua credencial
                      nos pontos oficiais para registrar sua passagem.
                    </p>
                    <p className="text-white/80 leading-relaxed">
                      Ao chegar em Tambaú, com a credencial devidamente
                      carimbada, o peregrino pode solicitar o Certificado de
                      Conclusão da Rota Padre Donizetti no Santuário.
                    </p>
                  </div>
                  <div className="relative">
                    <motion.div
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
                    >
                      <div className="aspect-[3/4] bg-white rounded-lg shadow-2xl p-6 relative overflow-hidden">
                        <div className="absolute top-0 left-0 right-0 h-20 bg-[var(--azul-escuro)]" />
                        <div className="relative pt-16 text-center">
                          <Award className="w-16 h-16 text-[var(--azul-claro)] mx-auto mb-4" />
                          <h4 className="font-display text-lg font-bold text-[var(--cinza-escuro)] mb-2">
                            Credencial do Peregrino
                          </h4>
                          <p className="text-[var(--cinza-texto)] text-sm mb-4">
                            Rota Padre Donizetti
                          </p>
                          <div className="space-y-2">
                            {[...Array(5)].map((_, i) => (
                              <div
                                key={i}
                                className="h-8 border-2 border-dashed border-gray-200 rounded flex items-center justify-center"
                              >
                                <span className="text-gray-300 text-xs">
                                  Carimbo {i + 1}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Steps */}
              <div className="grid md:grid-cols-3 gap-6">
                {steps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.15 }}
                    whileHover={{ y: -5 }}
                    className="relative p-6 bg-[var(--cinza-claro)] rounded-2xl"
                  >
                    <div
                      className={`w-12 h-12 ${step.color} rounded-xl flex items-center justify-center mb-4`}
                    >
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="absolute top-6 right-6 w-8 h-8 bg-white rounded-full flex items-center justify-center font-display font-bold text-[var(--azul-escuro)]">
                      {index + 1}
                    </div>
                    <h4 className="font-display text-lg font-bold text-[var(--cinza-escuro)] mb-2">
                      {step.title}
                    </h4>
                    <p className="text-[var(--cinza-texto)] text-sm">
                      {step.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Dicas Tab */}
          {activeTab === "dicas" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-3 gap-6"
            >
              {tips.map((tip, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.15 }}
                  whileHover={{ y: -5 }}
                  className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100"
                >
                  <div className="w-14 h-14 bg-[var(--azul-claro)]/10 rounded-xl flex items-center justify-center mb-4">
                    <tip.icon className="w-7 h-7 text-[var(--azul-claro)]" />
                  </div>
                  <h4 className="font-display text-lg font-bold text-[var(--cinza-escuro)] mb-4">
                    {tip.title}
                  </h4>
                  <ul className="space-y-3">
                    {tip.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-[var(--cinza-texto)]"
                      >
                        <CheckCircle className="w-4 h-4 text-[var(--azul-escuro)] mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Pontos Tab */}
          {activeTab === "pontos" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {emissionPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.15 }}
                    whileHover={{ y: -5 }}
                    className="p-6 bg-[var(--cinza-claro)] rounded-2xl"
                  >
                    <div className="w-12 h-12 bg-[var(--azul-escuro)]/10 rounded-xl flex items-center justify-center mb-4">
                      <MapPin className="w-6 h-6 text-[var(--azul-escuro)]" />
                    </div>
                    <h4 className="font-display text-lg font-bold text-[var(--cinza-escuro)] mb-1">
                      {point.name}
                    </h4>
                    <p className="text-[var(--azul-escuro)] font-medium text-sm mb-2">
                      {point.location}
                    </p>
                    <p className="text-[var(--cinza-texto)] text-sm">
                      {point.address}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Download Section */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="p-8 bg-gradient-to-r from-[var(--azul-claro)]/10 to-[var(--azul-claro)]/5 rounded-2xl border border-[var(--azul-claro)]/20 text-center"
              >
                <Download className="w-12 h-12 text-[var(--azul-claro)] mx-auto mb-4" />
                <h4 className="font-display text-xl font-bold text-[var(--cinza-escuro)] mb-2">
                  Baixe o Guia Completo do Peregrino
                </h4>
                <p className="text-[var(--cinza-texto)] mb-6 max-w-lg mx-auto">
                  Tenha todas as informações necessárias em seu celular ou
                  impresso para consulta durante a peregrinação.
                </p>
                <motion.a
                  href="https://drive.google.com/file/d/1t_PR8SeDlLPMw8S61E-HLkDcYNcKCaer/view?usp=drive_linkk"
                  download
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-8 py-3 bg-[var(--azul-claro)] text-white font-medium rounded-full"
                >
                  <Download className="w-5 h-5" />
                  Download PDF
                </motion.a>
              </motion.div>
            </motion.div>
          )}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 text-center"
        >
          <p className="text-[var(--cinza-texto)] mb-4">
            Ainda tem dúvidas? Entre em contato conosco.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="mailto:contato@rotapadredonizetti.com.br"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--cinza-claro)] text-[var(--cinza-escuro)] font-medium rounded-full hover:bg-[var(--azul-escuro)]/10 transition-colors"
            >
              <Mail className="w-5 h-5" />
              contato@rotapadredonizetti.com.br
            </motion.a>
            <motion.a
              href="tel:1639875746"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--cinza-claro)] text-[var(--cinza-escuro)] font-medium rounded-full hover:bg-[var(--azul-escuro)]/10 transition-colors"
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
