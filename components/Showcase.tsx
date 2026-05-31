"use client";
import { useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const specs = [
  { label: "Weight Capacity", value: "180 kg" },
  { label: "Recline Range", value: "90° – 135°" },
  { label: "Seat Width", value: "56 cm" },
  { label: "Frame Material", value: "Steel + Carbon" },
  { label: "Foam Density", value: "65D Memory" },
  { label: "Warranty", value: "10 Years" },
];

const colorOptions = [
  { name: "Obsidian Gold", primary: "#C9A84C" },
  { name: "Midnight Chrome", primary: "#888888" },
  { name: "Blood Red", primary: "#C0392B" },
];

export default function Showcase() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeColor, setActiveColor] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref });
  const rotateY = useTransform(scrollYProgress, [0, 1], [-5, 5]);

  const color = colorOptions[activeColor].primary;

  return (
    <section id="showcase" className="py-32 px-6 relative" ref={ref}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to bottom, #050505, rgba(10,10,10,0.3), #050505)" }} />

      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs text-yellow-400 tracking-[0.4em] uppercase font-medium">Design</span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mt-3 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Obsessive <span className="gold-text">Craftsmanship</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{ rotateY }}
          >
            <div className="relative aspect-square flex items-center justify-center">
              <motion.div
                className="absolute w-full h-full rounded-full"
                style={{ border: "1px solid rgba(201,168,76,0.1)" }}
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute top-0 left-1/2 w-2 h-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400" />
              </motion.div>
              <motion.div
                className="absolute w-3/4 h-3/4 rounded-full"
                style={{ border: "1px solid rgba(201,168,76,0.05)" }}
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute bottom-0 right-0 w-1.5 h-1.5 rounded-full bg-yellow-500/60" />
              </motion.div>
              <div className="absolute w-48 h-48 rounded-full transition-all duration-700" style={{ background: color + "33", filter: "blur(60px)" }} />

              <motion.svg
                viewBox="0 0 400 420"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4/5 drop-shadow-2xl relative z-10"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <defs>
                  <linearGradient id="sc-gold" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor={color} />
                    <stop offset="100%" stopColor={color + "99"} />
                  </linearGradient>
                  <linearGradient id="sc-dark" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1A1A1A" />
                    <stop offset="100%" stopColor="#050505" />
                  </linearGradient>
                </defs>
                {[0, 72, 144, 216, 288].map((angle, i) => (
                  <rect key={i} x="194" y="350" width="12" height="45" rx="6" fill="url(#sc-gold)" transform={`rotate(${angle}, 200, 375)`} />
                ))}
                {[0, 72, 144, 216, 288].map((angle, i) => {
                  const rad = (angle * Math.PI) / 180;
                  const cx = 200 + Math.sin(rad) * 45;
                  const cy = 375 + Math.cos(rad) * 22;
                  return <circle key={i} cx={cx} cy={cy} r="7" fill="#111" stroke={color} strokeWidth="1.5" />;
                })}
                <rect x="188" y="300" width="24" height="60" rx="8" fill="url(#sc-gold)" />
                <rect x="100" y="255" width="200" height="50" rx="18" fill="url(#sc-dark)" stroke={color} strokeWidth="1.5" />
                <rect x="110" y="260" width="180" height="18" rx="9" fill="rgba(201,168,76,0.1)" />
                <rect x="115" y="65" width="170" height="200" rx="18" fill="url(#sc-dark)" stroke={color} strokeWidth="1.5" />
                <rect x="125" y="75" width="150" height="180" rx="12" fill="rgba(255,255,255,0.02)" />
                <rect x="194" y="72" width="12" height="186" rx="6" fill="url(#sc-gold)" opacity="0.7" />
                <rect x="135" y="35" width="130" height="50" rx="18" fill="url(#sc-dark)" stroke={color} strokeWidth="1.5" />
                <rect x="78" y="220" width="38" height="48" rx="10" fill="url(#sc-dark)" stroke={color} strokeWidth="1.5" />
                <rect x="284" y="220" width="38" height="48" rx="10" fill="url(#sc-dark)" stroke={color} strokeWidth="1.5" />
                <text x="200" y="175" textAnchor="middle" fill={color} fontSize="16" fontFamily="serif" fontWeight="bold" opacity="0.5">TX</text>
              </motion.svg>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white mb-2">THRONE X — Pro Series</h3>
            <p className="text-white/40 mb-8 text-sm leading-relaxed">
              Every component handpicked. Every measurement validated by professional ergonomists and elite esports athletes.
            </p>

            <div className="mb-8">
              <div className="text-xs text-white/40 tracking-wider uppercase mb-3">Select Colorway</div>
              <div className="flex gap-3">
                {colorOptions.map((c, i) => (
                  <motion.button
                    key={c.name}
                    onClick={() => setActiveColor(i)}
                    className="relative w-10 h-10 rounded-full"
                    style={{
                      backgroundColor: c.primary,
                      border: `2px solid ${activeColor === i ? "#F5C842" : "rgba(255,255,255,0.2)"}`,
                      transform: activeColor === i ? "scale(1.1)" : "scale(1)",
                    }}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    title={c.name}
                  />
                ))}
              </div>
              <div className="text-xs text-yellow-400/60 mt-2">{colorOptions[activeColor].name}</div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {specs.map(({ label, value }, i) => (
                <motion.div
                  key={label}
                  className="rounded-xl p-4"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(201,168,76,0.1)", backdropFilter: "blur(20px)" }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.08 }}
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="text-lg font-bold text-yellow-400">{value}</div>
                  <div className="text-xs text-white/40 mt-1">{label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
