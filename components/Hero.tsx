"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Star, Shield, Zap } from "lucide-react";
import ParticleField from "./ParticleField";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleField />

      {/* Background glow */}
      <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold-500/5 blur-[120px] pointer-events-none" />

      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 text-center"
      >
        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 glass-gold px-4 py-2 rounded-full mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.6 }}
        >
          <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
          <span className="text-xs text-gold-400 tracking-[0.2em] font-medium uppercase">Limited Edition 2024</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="text-6xl md:text-8xl lg:text-[110px] font-display font-black leading-none mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.7 }}
        >
          <span className="block text-white">REIGN</span>
          <span className="block gold-text">SUPREME</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-white/50 max-w-xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.9 }}
        >
          Engineered for elite performance. Crafted for those who demand nothing less than absolute dominance.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.0 }}
        >
          <motion.button
            className="group relative flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gold-600 to-gold-400 text-dark-900 font-bold rounded-full text-base tracking-wider overflow-hidden"
            whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(201,168,76,0.6)" }}
            whileTap={{ scale: 0.97 }}
          >
            <span>Claim Your Throne</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
          </motion.button>

          <motion.button
            className="flex items-center gap-3 px-8 py-4 glass text-white/70 hover:text-gold-400 font-medium rounded-full text-base tracking-wider transition-all duration-300"
            whileHover={{ scale: 1.03, borderColor: "rgba(201,168,76,0.4)" }}
            whileTap={{ scale: 0.97 }}
          >
            Watch Film
            <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center">
              <span className="w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[8px] border-l-current translate-x-[1px]" />
            </span>
          </motion.button>
        </motion.div>

        {/* Chair mockup */}
        <motion.div
          className="relative mx-auto mb-16"
          initial={{ opacity: 0, scale: 0.8, y: 60 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 3.1, ease: "easeOut" }}
          style={{ maxWidth: 500 }}
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* SVG Chair Mockup */}
            <svg viewBox="0 0 500 480" xmlns="http://www.w3.org/2000/svg" className="w-full drop-shadow-2xl">
              <defs>
                <linearGradient id="chairGold" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#C9A84C" />
                  <stop offset="50%" stopColor="#F5C842" />
                  <stop offset="100%" stopColor="#A07830" />
                </linearGradient>
                <linearGradient id="chairDark" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1A1A1A" />
                  <stop offset="100%" stopColor="#0A0A0A" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                  <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
                </filter>
                <radialGradient id="shadow" cx="50%" cy="100%" r="40%">
                  <stop offset="0%" stopColor="#C9A84C" stopOpacity="0.3"/>
                  <stop offset="100%" stopColor="#C9A84C" stopOpacity="0"/>
                </radialGradient>
              </defs>

              {/* Shadow under chair */}
              <ellipse cx="250" cy="460" rx="160" ry="20" fill="url(#shadow)" />

              {/* Base / star base */}
              <g filter="url(#glow)">
                {[0, 72, 144, 216, 288].map((angle, i) => (
                  <rect
                    key={i}
                    x="244" y="400" width="12" height="50"
                    rx="6"
                    fill="url(#chairGold)"
                    transform={`rotate(${angle}, 250, 430)`}
                  />
                ))}
              </g>
              {/* Wheels */}
              {[0, 72, 144, 216, 288].map((angle, i) => {
                const rad = (angle * Math.PI) / 180;
                const cx = 250 + Math.sin(rad) * 50;
                const cy = 430 + Math.cos(rad) * 25;
                return <circle key={i} cx={cx} cy={cy} r="8" fill="#111" stroke="#C9A84C" strokeWidth="1.5" />;
              })}

              {/* Center cylinder */}
              <rect x="238" y="340" width="24" height="70" rx="8" fill="url(#chairGold)" />

              {/* Seat */}
              <rect x="130" y="290" width="240" height="55" rx="20" fill="url(#chairDark)" stroke="#C9A84C" strokeWidth="1.5" />
              <rect x="140" y="295" width="220" height="20" rx="10" fill="rgba(201,168,76,0.1)" />

              {/* Back */}
              <rect x="145" y="100" width="210" height="200" rx="20" fill="url(#chairDark)" stroke="#C9A84C" strokeWidth="1.5" />
              {/* Back cushion lines */}
              <rect x="155" y="115" width="190" height="170" rx="14" fill="rgba(201,168,76,0.05)" />
              {/* Gold accent stripe */}
              <rect x="242" y="110" width="16" height="180" rx="8" fill="url(#chairGold)" opacity="0.8" />

              {/* Headrest */}
              <rect x="165" y="60" width="170" height="60" rx="20" fill="url(#chairDark)" stroke="#C9A84C" strokeWidth="1.5" />
              <rect x="175" y="68" width="150" height="44" rx="14" fill="rgba(201,168,76,0.08)" />

              {/* Armrests */}
              <rect x="100" y="255" width="45" height="55" rx="12" fill="url(#chairDark)" stroke="#C9A84C" strokeWidth="1.5" />
              <rect x="355" y="255" width="45" height="55" rx="12" fill="url(#chairDark)" stroke="#C9A84C" strokeWidth="1.5" />

              {/* Logo on back */}
              <text x="250" y="210" textAnchor="middle" fill="url(#chairGold)" fontSize="18" fontFamily="serif" fontWeight="bold" opacity="0.6">TX</text>

              {/* Glow effect around chair */}
              <ellipse cx="250" cy="290" rx="120" ry="30" fill="none" stroke="#C9A84C" strokeWidth="0.5" opacity="0.2" />
            </svg>
          </motion.div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          className="flex flex-wrap justify-center gap-8 md:gap-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.3 }}
        >
          {[
            { value: "50K+", label: "Elite Gamers" },
            { value: "4.9★", label: "Average Rating" },
            { value: "10yr", label: "Warranty" },
            { value: "#1", label: "Gaming Chair 2024" },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold gold-text">{value}</div>
              <div className="text-xs text-white/40 tracking-wider uppercase mt-1">{label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <span className="text-xs text-white/30 tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-gold-500/50 to-transparent" />
      </motion.div>
    </section>
  );
}
