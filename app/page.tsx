"use client";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import UeberUns from "./components/UeberUns";
import Prozess from "./components/Prozess";
import Produkte from "./components/Produkte";
import Referenzen from "./components/Referenzen";
import Kontakt from "./components/Contact";
import Footer from "./components/Footer";

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
      
    
    </main>
  );
}