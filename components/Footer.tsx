"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, Globe, Rss, Play, Gamepad2 } from "lucide-react";

const socials = [
  { icon: Globe, href: "#", label: "Twitter" },
  { icon: Rss, href: "#", label: "Instagram" },
  { icon: Play, href: "#", label: "YouTube" },
  { icon: Gamepad2, href: "#", label: "Twitch" },
];

const links = {
  Product: ["Features", "Specifications", "Colors", "Compare"],
  Support: ["FAQ", "Warranty", "Returns", "Contact"],
  Company: ["About", "Press", "Careers", "Partners"],
};

export default function Footer() {
  return (
    <footer className="relative pt-24 pb-10 px-6" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
          <div className="md:col-span-2">
            <motion.div className="text-2xl font-bold tracking-[0.2em] gold-text mb-4" whileHover={{ scale: 1.02 }}>
              THRONE X
            </motion.div>
            <p className="text-sm text-white/40 leading-relaxed max-w-xs mb-6">
              The world's most advanced gaming chair. Engineered for those who refuse to accept second place.
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white/40 hover:text-yellow-400 transition-all"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(201,168,76,0.1)", backdropFilter: "blur(20px)" }}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={15} />
                </motion.a>
              ))}
            </div>
          </div>

          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <div className="text-xs text-yellow-400/60 tracking-[0.3em] uppercase font-medium mb-4">{category}</div>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <motion.a
                      href="#"
                      className="text-sm text-white/40 hover:text-yellow-400 transition-colors flex items-center gap-1 group"
                      whileHover={{ x: 3 }}
                    >
                      {item}
                      <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <div className="text-xs text-white/25">© 2024 THRONE X. All rights reserved.</div>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Cookies"].map((item) => (
              <a key={item} href="#" className="text-xs text-white/25 hover:text-yellow-400 transition-colors">{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
