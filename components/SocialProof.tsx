"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Award, Users, TrendingUp } from "lucide-react";

const reviews = [
  {
    name: "Marcus Chen",
    role: "Pro Esports Player — Team Nexus",
    avatar: "MC",
    stars: 5,
    quote: "I've tried every premium chair on the market. THRONE X is in a completely different league. My win rate literally went up after switching.",
  },
  {
    name: "Sofia Reyes",
    role: "Content Creator — 2.4M subs",
    avatar: "SR",
    stars: 5,
    quote: "The posture analytics alone are worth it. After 6-hour streams I'm not wrecked anymore. This chair literally changed my career.",
  },
  {
    name: "Jake Morrison",
    role: "Game Developer @ Riot Games",
    avatar: "JM",
    stars: 5,
    quote: "When you sit in this chair you understand immediately. It's not a gaming chair. It's a performance tool that happens to look insane.",
  },
  {
    name: "Aisha Patel",
    role: "Speedrunner — World Record Holder",
    avatar: "AP",
    stars: 5,
    quote: "The zero-gravity tilt during 24h marathons is game-changing. Zero backache. Pure focus. Worth every single cent.",
  },
];

const badges = [
  { icon: Award, label: "Product of the Year 2024" },
  { icon: Users, label: "50,000+ Elite Users" },
  { icon: TrendingUp, label: "#1 Best Seller Gaming" },
  { icon: Star, label: "4.9/5 Average Rating" },
];

export default function SocialProof() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="reviews" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full pointer-events-none" style={{ background: "rgba(201,168,76,0.05)", filter: "blur(100px)" }} />

      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs text-yellow-400 tracking-[0.4em] uppercase font-medium">The Elite Speak</span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mt-3 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Trusted by <span className="gold-text">Champions</span>
          </h2>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {badges.map(({ icon: Icon, label }, i) => (
            <motion.div
              key={label}
              className="flex items-center gap-2 px-4 py-2 rounded-full"
              style={{ background: "rgba(201,168,76,0.05)", border: "1px solid rgba(201,168,76,0.2)", backdropFilter: "blur(20px)" }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(201,168,76,0.2)" }}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1 }}
            >
              <Icon size={14} className="text-yellow-400" />
              <span className="text-xs text-yellow-400/80 tracking-wide">{label}</span>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              className="rounded-2xl p-6 relative group"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(201,168,76,0.1)", backdropFilter: "blur(20px)" }}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.15 }}
              whileHover={{ y: -5 }}
            >
              <div className="absolute top-4 right-6 text-6xl text-yellow-500/10 font-serif leading-none">"</div>
              <div className="flex gap-1 mb-4">
                {[...Array(review.stars)].map((_, j) => (
                  <Star key={j} size={14} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-white/70 leading-relaxed mb-6 text-sm">"{review.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-black font-bold text-sm" style={{ background: "linear-gradient(135deg, #C9A84C, #F5C842)" }}>
                  {review.avatar}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{review.name}</div>
                  <div className="text-xs text-white/40">{review.role}</div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
