"use client";

import React from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";

// Ndrysho këtu rrugët e imazheve që të përputhen 100% me emrat te public/images/
const referenzenData = [
  {
    id: 1,
    title: "Moderne Einfamilienhaus-Fenster",
    location: "Kassel",
    description: "Komplette Erneuerung aller Fenster mit 3-fach Verglasung für optimale Energieeffizienz.",
    image: "/images/6.jpg",
  },
  {
    id: 2,
    title: "Exklusive Aluminium-Haustür",
    location: "Baunatal",
    description: "Einbau einer modernen Haustür mit Seitenteil und individuellem Sicherheitssystem.",
    image: "/images/7.jpg",
  },
  {
    id: 3,
    title: "Großzügige Hebe-Schiebeanlage",
    location: "Vellmar",
    description: "Nahtloser Übergang zum Garten mit barrierefreier Bodenschwelle und maximalem Lichteinfall.",
    image: "/images/8.jpg",
  },
  {
    id: 4,
    title: "Premium Kunststoff-Fenster",
    location: "Kassel & Umgebung",
    description: "Hochwertige Profile mit hervorragender Schalldämmung und modernem Design.",
    image: "/images/1.jpg", // Ndryshuar te foto 1.jpg që ekziston
  },
  {
    id: 5,
    title: "Haustür & Fenster Kombination",
    location: "Lohfelden",
    description: "Perfekt aufeinander abgestimmtes Farbkonzept und fachgerechte Montage aus einer Hand.",
    image: "/images/2.jpg", // Ndryshuar te foto 2.jpg që ekziston
  },
  {
    id: 6,
    title: "Sonnenschutz & Rollläden",
    location: "Fuldabrück",
    description: "Integrierte Rollladensysteme für Hitzeschutz, Einbruchhemmung und Abdunkelung.",
    image: "/images/3.jpg", // Ndryshuar te foto 3.jpg që ekziston
  },
];

export default function Referenzen() {
  return (
    <section id="referenzen" className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Titulli i Seksionit */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <span className="text-red-700 font-bold text-xs sm:text-sm tracking-wider uppercase">
            Unsere Arbeiten
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 mt-2">
            Aktuelle Referenzprojekte
          </h2>
          <p className="mt-3 text-sm sm:text-lg text-gray-600">
            Überzeugen Sie sich von unserer präzisen Arbeit und der Qualität unserer Montage.
          </p>
        </div>

        {/* Container i kartave: Horizontal Scroll në mobile */}
        <div className="flex md:grid md:grid-cols-3 gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory pb-6 pt-2 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-none">
          {referenzenData.map((project) => (
            <div
              key={project.id}
              className="w-[270px] sm:w-[320px] md:w-auto flex-shrink-0 snap-center bg-gray-50/90 rounded-2xl overflow-hidden border border-gray-200/80 shadow-sm flex flex-col justify-between group hover:shadow-md transition-all duration-300"
            >
              <div>
                {/* Imazhi i Projektit */}
                <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-gray-200">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 270px, 350px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    unoptimized
                  />
                  <div className="absolute top-3 left-3 bg-zinc-900/80 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                    <MapPin size={12} className="text-red-500" />
                    <span>{project.location}</span>
                  </div>
                </div>

                {/* Përmbajtja */}
                <div className="p-5 sm:p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}