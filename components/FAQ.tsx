"use client";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { q: "How long does delivery take?", a: "Standard delivery is 5–7 business days. Elite tier orders include white-glove delivery with setup, scheduled at your convenience within 48 hours of dispatch." },
  { q: "What's the return policy?", a: "We offer a full 30-day no-questions return policy. If you don't love it, we pick it up at our expense and refund you in full within 48 hours." },
  { q: "Is assembly difficult?", a: "THRONE X assembles in under 15 minutes with our tool-free snap system. Every chair ships with a step-by-step guide and QR video instructions." },
  { q: "Does it fit taller/heavier users?", a: "The THRONE X Pro supports users up to 180kg and 200cm tall. The seat depth, back height, and armrests are all independently adjustable for a perfect custom fit." },
  { q: "How does the posture analytics work?", a: "A discreet sensor in the lumbar support connects to our iOS/Android app via Bluetooth. It tracks your posture in real-time and sends gentle vibration alerts when you slouch." },
  { q: "Can I upgrade my chair later?", a: "Yes. We offer a modular upgrade program. You can swap the seat foam, mesh back, and armrests anytime. Elite members get a 40% upgrade credit." },
];

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className="rounded-2xl overflow-hidden"
      style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(201,168,76,0.1)", backdropFilter: "blur(20px)" }}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <button
        className="w-full flex items-center justify-between p-6 text-left group"
        onClick={() => setOpen(!open)}
      >
        <span className={`font-semibold text-sm md:text-base transition-colors ${open ? "text-yellow-400" : "text-white/80 group-hover:text-white"}`}>
          {faq.q}
        </span>
        <motion.div
          className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ml-4"
          style={open ? { background: "#F5C842", color: "#050505" } : { background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.5)" }}
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {open ? <Minus size={14} /> : <Plus size={14} />}
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 text-sm text-white/50 leading-relaxed border-t border-white/5 pt-4">
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="faq" className="py-32 px-6 relative" ref={ref}>
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs text-yellow-400 tracking-[0.4em] uppercase font-medium">Questions</span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mt-3 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Got <span className="gold-text">Questions?</span>
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={faq.q} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
