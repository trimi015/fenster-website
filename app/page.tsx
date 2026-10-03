"use client";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import UeberUns from "./components/UeberUns";
import Prozess from "./components/Prozess";
import Produkte from "./components/Produkte";
import Referenzen from "./components/Referenzen";
import Kontakt from "./components/Contact";

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
      
      <footer className="bg-black text-gray-400 py-6 text-center text-sm border-t border-zinc-800">
        <p>© {new Date().getFullYear()} Fensterbau Spahiu. Alle Rechte vorbehalten.</p>
      </footer>
    </main>
  );
}