import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import HowItWorks from "../components/HowItWorks";
import Features from "../components/Features";
import Solutions from "../components/Solutions";
import Security from "../components/Security";
import CTA from "../components/CTA";
import DemoModal from "@/components/DemoModal";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <HowItWorks />
      <Features />
      <Solutions />
      <Security />
      <CTA />
      <DemoModal />
      <Footer />
    </>
  );
}