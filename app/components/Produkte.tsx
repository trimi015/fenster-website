"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const produkteData = [
  {
    id: 1,
    title: "Fenster",
    description: "Moderne Kunststoff-, Aluminium- und Holzfenster mit höchster Wärmedämmung und Sicherheit.",
    image: "/images/2.jpg",
  },
  {
    id: 2,
    title: "Haustüren",
    description: "Stilvolle und einbruchsichere Haustüren, individuell nach Ihren Wünschen gestaltet.",
    image: "/images/3.jpg",
  },
  {
    id: 3,
    title: "Schiebetüren",
    description: "Großzügige Glasflächen für lichtdurchflutete Räume und nahtlosen Übergang nach draußen.",
    image: "/images/4.jpg",
  },
  {
    id: 4,
    title: "Rollläden & Sonnenschutz",
    description: "Effektiver Hitzeschutz, Sichtschutz und zusätzliche Einbruchhemmung für Ihr Zuhause.",
    image: "/images/5.jpg",
  },
];

export default function Produkte() {
  return (
    <section id="produkte" className="py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Titulli i Seksionit */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <span className="text-red-700 font-bold text-xs sm:text-sm tracking-wider uppercase">
            Unsere Produkte
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 mt-2">
            Qualität für Ihr Zuhause
          </h2>
          <p className="mt-3 text-sm sm:text-lg text-gray-600">
            Entdecken Sie unsere vielfältige Produktauswahl für modernstes Wohnen.
          </p>
        </div>

        {/* Container i kartave: Kompakt me horizontal scroll në mobile, Grid në desktop */}
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory pb-6 pt-2 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-none">
          {produkteData.map((produkt) => (
            <div
              key={produkt.id}
              className="w-[270px] sm:w-[300px] md:w-auto flex-shrink-0 snap-center bg-white rounded-2xl overflow-hidden border border-gray-200/80 shadow-sm flex flex-col justify-between group hover:shadow-md transition-all duration-300"
            >
              <div>
                {/* Imazhi i Produktit */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-gray-100">
                  <Image
                    src={produkt.image}
                    alt={produkt.title}
                    fill
                    sizes="(max-width: 768px) 270px, 300px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    unoptimized
                  />
                </div>

                {/* Përmbajtja */}
                <div className="p-5 sm:p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {produkt.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {produkt.description}
                  </p>
                </div>
              </div>

              {/* Butoni/Linku në fund të kartës */}
              <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0">
                <a
                  href="#kontakt"
                  className="inline-flex items-center gap-2 text-sm font-bold text-red-700 hover:text-red-800 transition-colors"
                >
                  <span>Anfragen</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}