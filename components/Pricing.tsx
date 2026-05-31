"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Check, Flame } from "lucide-react";

const tiers = [
  {
    name: "Core",
    price: 499,
    desc: "The entry to excellence",
    features: ["Steel frame construction", "2D memory foam seat", "Adjustable lumbar support", "2-year warranty", "Standard mesh back"],
    cta: "Order Core",
    highlight: false,
  },
  {
    name: "Pro",
    price: 899,
    desc: "The throne of champions",
    features: ["Carbon-reinforced steel frame", "3-layer NASA memory foam", "4D adjustable armrests", "Posture analytics app", "Cold climate mesh", "Zero-gravity tilt system", "10-year warranty"],
    cta: "Claim Your Throne",
    highlight: true,
  },
  {
    name: "Elite",
    price: 1299,
    desc: "Reserved for the few",
    features: ["Everything in Pro", "Hand-stitched leather finish", "White-glove delivery & setup", "Custom colorway option", "Dedicated concierge support", "Lifetime warranty"],
    cta: "Request Elite Access",
    highlight: false,
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="pricing" className="py-32 px-6 relative" ref={ref}>
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs text-yellow-400 tracking-[0.4em] uppercase font-medium">Invest in Excellence</span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mt-3 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Choose Your <span className="gold-text">Throne</span>
          </h2>
        </motion.div>

        <motion.div
          className="flex items-center justify-center gap-3 rounded-full px-6 py-3 mb-12 mx-auto w-fit"
          style={{ background: "rgba(201,168,76,0.05)", border: "1px solid rgba(201,168,76,0.2)", backdropFilter: "blur(20px)" }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Flame size={16} className="text-yellow-400 animate-pulse" />
          <span className="text-sm text-yellow-400">Launch pricing — limited time offer</span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              className="relative rounded-2xl p-8"
              style={tier.highlight
                ? { background: "linear-gradient(to bottom, rgba(201,168,76,0.15), rgba(10,10,10,0.8))", border: "1px solid rgba(201,168,76,0.3)" }
                : { background: "rgba(255,255,255,0.03)", border: "1px solid rgba(201,168,76,0.1)", backdropFilter: "blur(20px)" }
              }
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {tier.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-black text-xs font-bold tracking-wider" style={{ background: "linear-gradient(135deg, #C9A84C, #F5C842)" }}>
                  MOST POPULAR
                </div>
              )}

              <div className="mb-6">
                <div className="text-xs text-yellow-400/60 tracking-[0.3em] uppercase mb-1">{tier.name}</div>
                <div className="text-5xl font-black text-white mb-1">${tier.price}</div>
                <div className="text-sm text-white/40">{tier.desc}</div>
              </div>

              <div className="space-y-3 mb-8">
                {tier.features.map((f) => (
                  <div key={f} className="flex items-start gap-3">
                    <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={tier.highlight ? { background: "#F5C842" } : { background: "rgba(201,168,76,0.3)" }}>
                      <Check size={10} style={{ color: tier.highlight ? "#050505" : "#C9A84C" }} />
                    </div>
                    <span className="text-sm text-white/60">{f}</span>
                  </div>
                ))}
              </div>

              <motion.button
                className="w-full py-4 rounded-xl font-bold tracking-wider text-sm transition-all"
                style={tier.highlight
                  ? { background: "linear-gradient(135deg, #A07830, #F5C842)", color: "#050505" }
                  : { background: "rgba(255,255,255,0.03)", color: "rgba(255,255,255,0.7)", border: "1px solid rgba(201,168,76,0.2)" }
                }
                whileHover={{ scale: 1.03, boxShadow: tier.highlight ? "0 0 40px rgba(201,168,76,0.4)" : "none" }}
                whileTap={{ scale: 0.97 }}
              >
                {tier.cta}
              </motion.button>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-center text-xs text-white/25 mt-8"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          Free shipping worldwide · 30-day no-questions returns · Secure checkout
        </motion.p>
      </div>
    </section>
  );
}
