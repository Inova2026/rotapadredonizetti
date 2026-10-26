import { motion } from "framer-motion";
import {
  Facebook,
  Heart,
  Instagram,
  Mail,
  MapPin,
  Music2,
  Phone,
} from "lucide-react";

const navLinks = [
  { name: "A Rota", href: "#home" },
  { name: "A Trilha", href: "#trilha" },
  { name: "Hospedagem", href: "#hospedagem" },
  { name: "Peregrino", href: "#peregrino" },
  { name: "Loja", href: "#loja" },
];

const socialLinks = [
  {
    icon: Facebook,
    href: "https://www.facebook.com/share/1beJ3TENUx/",
    label: "Facebook",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/rotapadredonizetti?srtk=MTJnMmhuMzA2eHh2Zg==",
    label: "Instagram",
  },
  {
    icon: Music2,
    href: "https://vm.tiktok.com/ZS9UaF4T4Dw4W-IFcra/",
    label: "TikTok",
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-[var(--azul-escuro)] text-white overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--azul-claro)]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
      </div>

      {/* Main Footer */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & About */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Uma jornada de fé e descoberta pelos caminhos de Padre Donizetti
              Tavares de Lima, o Apóstolo da Caridade.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.6 + index * 0.08,
                    ease: [0.34, 1.56, 0.64, 1],
                  }}
                  whileHover={{ scale: 1.2, color: "#21bdf1" }}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-display text-lg font-bold mb-6">
              Links Rápidos
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-[var(--azul-claro)] transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-[var(--azul-claro)] transition-all" />
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-display text-lg font-bold mb-6">Contato</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:contato@rotapadredonizetti.com.br"
                  className="text-white/70 hover:text-[var(--azul-claro)] transition-colors flex items-start gap-3"
                >
                  <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">
                    contato@rotapadredonizetti.com.br
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5516991209426?text=Bem%20vindos%20a%20Rota%20Padre%20Donizetti.%20%0APosso%20te%20ajudar%20nesta%20Jornada%3F"
                  className="text-white/70 hover:text-[var(--azul-claro)] transition-colors flex items-start gap-3"
                >
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">(16) 99120-9426</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm">
                  Serrana, SP
                  <br />
                  Praça da Matriz, S/N
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h4 className="font-display text-lg font-bold mb-6">Newsletter</h4>
            <p className="text-white/70 text-sm mb-4">
              Receba novidades e informações sobre as próximas peregrinações.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:border-[var(--azul-claro)] transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-4 py-3 bg-[var(--azul-claro)] text-white font-medium rounded-lg hover:bg-[var(--azul-claro-dark)] transition-colors"
              >
                Inscrever-se
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="text-white/50 text-sm text-center md:text-left"
            >
              © {new Date().getFullYear()} Rota Padre Donizetti. Todos os
              direitos reservados.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 }}
              className="text-white/50 text-sm flex items-center gap-1"
            >
              Feito com <Heart className="w-4 h-4 text-red-400 fill-red-400" />{" "}
              para os peregrinos
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  );
}
