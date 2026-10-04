"use client";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import UeberUns from "./components/UeberUns";
import Prozess from "./components/Prozess";
import Produkte from "./components/Produkte";
import Referenzen from "./components/Referenzen";
import Kontakt from "./components/Contact";
import Footer from "./components/Footer";
import CookieBanner from "./components/CookieBanner";
import WhatsAppButton from "./components/WhatsAppButton";
export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      <Hero />
      <UeberUns />
      <Prozess />
      <Produkte />
      <Referenzen />
      <Kontakt />
      <Footer />
      <CookieBanner />
      <WhatsAppButton />
    
    </main>
  );
}