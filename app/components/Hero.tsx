"use client";

import React from "react";
import { ArrowRight, Phone, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] sm:min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      
      {/* Sfondi me Foto */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/1.jpg')" }}
      />

      {/* Overlay - Bërë më i çelët (bg-black/45 me gradient të lehtë) që të mos jetë shumë i zi */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/30" />

      {/* Përmbajtja e Tekstit */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left w-full py-12">
        <div className="max-w-2xl space-y-6">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 px-4 py-1.5 rounded-full text-white text-xs sm:text-sm font-medium shadow-sm">
            <ShieldCheck size={16} className="text-red-500" />
            <span>Fenster & Türen in Kassel & Umgebung</span>
          </div>

          {/* Titulli */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            Qualität & Präzision für Ihr <span className="text-red-500">Zuhause</span>
          </h1>

          {/* Përshkrimi */}
          <p className="text-gray-200 text-sm sm:text-lg leading-relaxed max-w-xl">
            Moderne Fenster, Haustüren und Sonnenschutzlösungen. Wir bieten professionelle Beratung, präzises Aufmaß und fachgerechte Montage aus einer Hand.
          </p>

          {/* Butonat */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="#kontakt"
              className="bg-red-700 hover:bg-red-800 text-white font-bold px-6 py-4 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <span>Kostenloses Angebot</span>
              <ArrowRight size={18} />
            </a>

            <a
              href="tel:+4915906321783"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold px-6 py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <Phone size={18} className="text-red-500" />
              <span>+49 159 06321783</span>
            </a>
          </div>

        </div>
      </div>

    </section>
  );
}