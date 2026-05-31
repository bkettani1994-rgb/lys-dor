"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Shield, Layers, Thermometer, BarChart2, Crown } from "lucide-react";

const features = [
  {
    icon: Crown,
    title: "Royal Ergonomics",
    desc: "Contoured lumbar support and 4D adjustable armrests for 12-hour gaming sessions without fatigue.",
    gradient: "from-gold-600/20 to-gold-400/5",
  },
  {
    icon: Zap,
    title: "Zero-Gravity Tilt",
    desc: "Recline 135° with synchronized tilt mechanism that moves with your body like a second skin.",
    gradient: "from-gold-500/20 to-transparent",
  },
  {
    icon: Shield,
    title: "Fortress Build",
    desc: "Military-grade steel frame with carbon fiber reinforcement. Built to last a decade of intense use.",
    gradient: "from-gold-600/20 to-gold-400/5",
  },
  {
    icon: Thermometer,
    title: "Cold Climate Mesh",
    desc: "4D breathable mesh keeps you 12°C cooler during intense sessions. No more sweaty back.",
    gradient: "from-gold-500/20 to-transparent",
  },
  {
    icon: Layers,
    title: "Memory Foam Elite",
    desc: "3-layer NASA-inspired memory foam molds to your exact body shape within 60 seconds.",
    gradient: "from-gold-600/20 to-gold-400/5",
  },
  {
    icon: BarChart2,
    title: "Posture Analytics",
    desc: "Built-in posture sensor syncs with our app to track and optimize your sitting position in real-time.",
    gradient: "from-gold-500/20 to-transparent",
  },
];

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const Icon = feature.icon;

  return (
    <motion.div
      ref={ref}
      className={`relative glass rounded-2xl p-6 group cursor-pointer overflow-hidden bg-gradient-to-br ${feature.gradient}`}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      {/* Hover glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-gold-500/10 to-transparent rounded-2xl" />

      <motion.div
        className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-600 to-gold-400 flex items-center justify-center mb-4"
        whileHover={{ rotate: 5, scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Icon size={22} className="text-dark-900" />
      </motion.div>

      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-gold-400 transition-colors">{feature.title}</h3>
      <p className="text-sm text-white/50 leading-relaxed">{feature.desc}</p>

      <motion.div
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-gold-500 to-transparent"
        initial={{ width: 0 }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.4 }}
      />
    </motion.div>
  );
}

export default function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="py-32 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800/50 to-dark-900 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs text-gold-400 tracking-[0.4em] uppercase font-medium">Engineering</span>
          <h2 className="text-4xl md:text-6xl font-display font-black text-white mt-3 mb-4">
            Built for <span className="gold-text">Dominance</span>
          </h2>
          <p className="text-white/40 max-w-md mx-auto">Every feature engineered to give you the competitive edge.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <FeatureCard key={f.title} feature={f} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
