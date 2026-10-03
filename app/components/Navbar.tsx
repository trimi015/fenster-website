"use client";

import React, { useRef } from "react";
import { Phone, Mail, MapPin, Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const detailsRef = useRef<HTMLDetailsElement>(null);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();

    // 1. Mbyll menynë e 3 vijave në çast
    if (detailsRef.current) {
      detailsRef.current.open = false;
    }

    // 2. Lëviz te seksioni përkatës në mënyrë të butë
    if (targetId === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.querySelector(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white shadow-sm border-b border-gray-100">
      
      {/* Rripi i sipërm i kontaktit */}
      <div className="bg-zinc-950 text-gray-300 text-[11px] sm:text-xs py-1.5 px-4 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4 sm:gap-6 w-full sm:w-auto justify-between sm:justify-start">
            <a href="tel:+4915906321783" className="flex items-center gap-1.5 hover:text-white transition font-medium">
              <Phone size={13} className="text-red-600 shrink-0" />
              <span>+49 159 06321783</span>
            </a>
            <a href="mailto:Spahiufensterbau@gmail.com" className="hidden xs:flex items-center gap-1.5 hover:text-white transition">
              <Mail size={13} className="text-red-600 shrink-0" />
              <span className="truncate max-w-[180px] sm:max-w-none">Spahiufensterbau@gmail.com</span>
            </a>
          </div>
          <div className="hidden md:flex items-center gap-1.5 text-gray-400">
            <MapPin size={13} className="text-red-600 shrink-0" />
            <span>34127 Kassel & Umgebung</span>
          </div>
        </div>
      </div>

      {/* Navigimi Kryesor */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          
          {/* Logo */}
          <a href="#" onClick={(e) => handleNavClick(e, "#")} className="flex items-center gap-2.5 sm:gap-3">
            <img
              src="/images/10.png"
              alt="Spahiu Fensterbau Logo"
              className="h-9 sm:h-12 w-auto object-contain"
            />
            <span className="text-lg sm:text-xl font-black text-zinc-900 tracking-tight">
              Spahiu <span className="text-red-700">Fensterbau</span>
            </span>
          </a>

          {/* Menyja Desktop */}
          <nav className="hidden md:flex space-x-8 text-gray-700 font-medium text-sm">
            <a href="#" className="hover:text-red-700 transition">Startseite</a>
            <a href="#ueber-uns" className="hover:text-red-700 transition">Über Uns</a>
            <a href="#produkte" className="hover:text-red-700 transition">Produkte</a>
            <a href="#referenzen" className="hover:text-red-700 transition">Referenzen</a>
            <a href="#kontakt" className="hover:text-red-700 transition">Kontakt</a>
          </nav>

          {/* MENYJA MOBILE (<details> që hapet 100% sigurt) */}
          <details ref={detailsRef} className="md:hidden group relative">
            <summary className="list-none cursor-pointer flex items-center justify-center p-2.5 rounded-xl border border-gray-200 bg-gray-50 active:bg-gray-200 text-gray-900 select-none">
              <Menu size={24} className="group-open:hidden block" />
              <X size={24} className="hidden group-open:block text-red-700" />
            </summary>

            {/* Paneli lundrues poshtë */}
            <div className="absolute right-0 top-14 w-[90vw] max-w-sm bg-white border border-gray-200 rounded-2xl shadow-2xl p-5 flex flex-col space-y-3 z-50">
              
              <a
                href="#"
                onClick={(e) => handleNavClick(e, "#")}
                className="w-full flex items-center justify-between py-3 px-4 rounded-xl text-gray-800 font-semibold bg-gray-50 active:bg-red-50 active:text-red-700 transition text-left text-sm"
              >
                <span>Startseite</span>
                <ArrowRight size={16} className="text-gray-400" />
              </a>

              <a
                href="#ueber-uns"
                onClick={(e) => handleNavClick(e, "#ueber-uns")}
                className="w-full flex items-center justify-between py-3 px-4 rounded-xl text-gray-800 font-semibold bg-gray-50 active:bg-red-50 active:text-red-700 transition text-left text-sm"
              >
                <span>Über Uns</span>
                <ArrowRight size={16} className="text-gray-400" />
              </a>

              <a
                href="#produkte"
                onClick={(e) => handleNavClick(e, "#produkte")}
                className="w-full flex items-center justify-between py-3 px-4 rounded-xl text-gray-800 font-semibold bg-gray-50 active:bg-red-50 active:text-red-700 transition text-left text-sm"
              >
                <span>Produkte</span>
                <ArrowRight size={16} className="text-gray-400" />
              </a>

              <a
                href="#referenzen"
                onClick={(e) => handleNavClick(e, "#referenzen")}
                className="w-full flex items-center justify-between py-3 px-4 rounded-xl text-gray-800 font-semibold bg-gray-50 active:bg-red-50 active:text-red-700 transition text-left text-sm"
              >
                <span>Referenzen</span>
                <ArrowRight size={16} className="text-gray-400" />
              </a>

              <a
                href="#kontakt"
                onClick={(e) => handleNavClick(e, "#kontakt")}
                className="w-full flex items-center justify-between py-3 px-4 rounded-xl text-gray-800 font-semibold bg-gray-50 active:bg-red-50 active:text-red-700 transition text-left text-sm"
              >
                <span>Kontakt</span>
                <ArrowRight size={16} className="text-gray-400" />
              </a>

              {/* Informacione Kontakti & Thirrja */}
              <div className="pt-3 border-t border-gray-100 space-y-3">
                <div className="text-xs text-gray-600 space-y-1 px-1">
                  <div className="flex items-center gap-2">
                    <MapPin size={14} className="text-red-700 shrink-0" />
                    <span>34127 Kassel & Umgebung</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail size={14} className="text-red-700 shrink-0" />
                    <span className="truncate">Spahiufensterbau@gmail.com</span>
                  </div>
                </div>

                <a
                  href="tel:+4915906321783"
                  onClick={(e) => handleNavClick(e, "#kontakt")}
                  className="w-full bg-red-700 hover:bg-red-800 text-white font-bold py-3 px-4 rounded-xl shadow transition flex items-center justify-center gap-2 text-xs"
                >
                  <Phone size={16} />
                  <span>+49 159 06321783</span>
                </a>
              </div>

            </div>
          </details>

        </div>
      </div>
    </header>
  );
}