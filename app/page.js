import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TrustStrip from "../components/TrustStrip";
import Problem from "../components/Problem";
import HowItWorks from "../components/HowItWorks";
import Verification from "../components/Verification";
import Console from "../components/Console";
import Solutions from "../components/Solutions";
import About from "../components/About";
import DeepDive from "../components/DeepDive";
import FAQ from "../components/FAQ";
import Demo from "../components/Demo";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <Problem />
        <HowItWorks />
        <Verification />
        <Console />
        <Solutions />
        <About />
        <DeepDive />
        <FAQ />
        <Demo />
      </main>
      <Footer />
    </>
  );
}
