"use client";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = ["Features", "Showcase", "Reviews", "Pricing", "FAQ"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass border-b border-gold-500/10 py-3" : "py-6"
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 2.4, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <motion.div
          className="text-xl font-bold tracking-[0.2em] gold-text cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          THRONE X
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <motion.a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm text-white/60 hover:text-gold-400 transition-colors duration-300 tracking-wider"
              whileHover={{ y: -1 }}
            >
              {link}
            </motion.a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <motion.button
            className="px-5 py-2 text-sm text-white/70 hover:text-gold-400 transition-colors tracking-wider"
            whileHover={{ scale: 1.02 }}
          >
            Sign In
          </motion.button>
          <motion.button
            className="px-5 py-2 text-sm font-semibold bg-gradient-to-r from-gold-500 to-gold-400 text-dark-900 rounded-full tracking-wider"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(201,168,76,0.5)" }}
            whileTap={{ scale: 0.98 }}
          >
            Order Now
          </motion.button>
        </div>

        <button className="md:hidden text-gold-400" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <motion.div
          className="md:hidden glass mt-2 mx-4 rounded-2xl p-6"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block py-3 text-white/70 hover:text-gold-400 transition-colors border-b border-white/5 last:border-0"
              onClick={() => setOpen(false)}
            >
              {link}
            </a>
          ))}
          <button className="w-full mt-4 py-3 bg-gradient-to-r from-gold-500 to-gold-400 text-dark-900 rounded-full font-semibold">
            Order Now
          </button>
        </motion.div>
      )}
    </motion.nav>
  );
}
