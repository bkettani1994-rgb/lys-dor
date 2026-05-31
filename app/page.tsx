import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import SocialProof from "@/components/SocialProof";
import Showcase from "@/components/Showcase";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";

export default function Home() {
  return (
    <main className="relative bg-dark-900 overflow-hidden">
      <Loader />
      <Navbar />
      <Hero />
      <Features />
      <SocialProof />
      <Showcase />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}
