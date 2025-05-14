import Footer from "@/components/Footer";
import Features from "@/components/Home/Features";
import Hero from "@/components/Home/Hero";
import HowItWorks from "@/components/Home/HowItWorks";
import SpecialistSection from "@/components/Home/SpecialistSection";
import TestimonialsSection from "@/components/Home/TestimonialsSection";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (

    // <>
    // <h1>hello</h1>
    // </>
    <div className="min-h-screen flex flex-col">
      <Navbar/>
      <main className="flex-grow md:pt-0 pt-10 px-4 md:px-0 pb-10 md:pb-0">
        <Hero/>
        <Features/>
        <HowItWorks/>
        <SpecialistSection/>
        <TestimonialsSection/>
      </main>

      <Footer/>

    </div>
  );
}
