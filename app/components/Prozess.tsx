"use client";

import React from "react";
import { MessageSquare, Calendar, FileText, Wrench } from "lucide-react";

export default function Prozess() {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Titulli i Seksionit */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <span className="text-red-700 font-bold text-xs sm:text-sm tracking-wider uppercase">
            IN 4 SCHRITTEN ZUM ZIEL
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 mt-2">
            So läuft Ihr Projekt ab
          </h2>
          <p className="mt-3 text-sm sm:text-lg text-gray-600">
            Einfach, transparent und verlässlich – von der ersten Idee bis zur fertigen Montage.
          </p>
        </div>

        {/* Container i kartave: Kompakt me horizontal scroll në mobile */}
        <div className="flex md:grid md:grid-cols-4 gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory pb-6 pt-2 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-none">
          
          {/* Karta 01 */}
          <div className="w-[270px] sm:w-[300px] md:w-auto flex-shrink-0 snap-center bg-gray-50/90 p-5 sm:p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-4">
                <div className="p-2.5 bg-red-700 text-white rounded-xl shadow-md">
                  <MessageSquare size={20} />
                </div>
                <span className="text-2xl sm:text-3xl font-extrabold text-gray-300">01</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Beratung & Erstkontakt</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Kontaktieren Sie uns unverbindlich. Wir besprechen Ihre Wünsche und Anforderungen.
              </p>
            </div>
          </div>

          {/* Karta 02 */}
          <div className="w-[270px] sm:w-[300px] md:w-auto flex-shrink-0 snap-center bg-gray-50/90 p-5 sm:p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-4">
                <div className="p-2.5 bg-red-700 text-white rounded-xl shadow-md">
                  <Calendar size={20} />
                </div>
                <span className="text-2xl sm:text-3xl font-extrabold text-gray-300">02</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Kostenloses Aufmaß vor Ort</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Wir kommen zu Ihnen nach Hause und nehmen exakte Maße für Ihre neuen Fenster & Türen.
              </p>
            </div>
          </div>

          {/* Karta 03 */}
          <div className="w-[270px] sm:w-[300px] md:w-auto flex-shrink-0 snap-center bg-gray-50/90 p-5 sm:p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-4">
                <div className="p-2.5 bg-red-700 text-white rounded-xl shadow-md">
                  <FileText size={20} />
                </div>
                <span className="text-2xl sm:text-3xl font-extrabold text-gray-300">03</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Transparentes Angebot</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Sie erhalten ein detailliertes und faires Angebot ohne versteckte Kosten.
              </p>
            </div>
          </div>

          {/* Karta 04 */}
          <div className="w-[270px] sm:w-[300px] md:w-auto flex-shrink-0 snap-center bg-gray-50/90 p-5 sm:p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-4">
                <div className="p-2.5 bg-red-700 text-white rounded-xl shadow-md">
                  <Wrench size={20} />
                </div>
                <span className="text-2xl sm:text-3xl font-extrabold text-gray-300">04</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Lieferung & Montage</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Unsere erfahrenen Monteure bauen Ihre Elemente präzise, sauber und termingerecht ein.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}