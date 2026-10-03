"use client";

import Image from "next/image";
import { CheckCircle2, ShieldCheck } from "lucide-react";

export default function UeberUns() {
  return (
    <section id="ueber-uns" className="py-24 bg-gray-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Teksti */}
          <div>
            <span className="text-red-600 font-bold text-sm tracking-wider uppercase">
              Über Fensterbau Spahiu
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mt-2 leading-tight">
              Ihr zuverlässiger Partner für Fenster & Türen in Kassel
            </h2>
            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              Wir stehen für erstklassige Qualität, präzise Handwerkskunst und individuellen Service. Ob Neubau oder Altbausanierung – wir begleiten Sie von der ersten Planung bis zur fachgerechten Endmontage.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-red-600 shrink-0 mt-1" size={22} />
                <div>
                  <h4 className="font-bold text-gray-900">Alles aus einer Hand</h4>
                  <p className="text-gray-600 text-sm">Beratung, Aufmaß, Lieferung und saubere Montage ohne Umwege.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-red-600 shrink-0 mt-1" size={22} />
                <div>
                  <h4 className="font-bold text-gray-900">Höchste Energieeffizienz</h4>
                  <p className="text-gray-600 text-sm">Moderne Profilsysteme zur Senkung Ihrer Heizkosten und für optimalen Schallschutz.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-red-600 shrink-0 mt-1" size={22} />
                <div>
                  <h4 className="font-bold text-gray-900">Kostenlose Vor-Ort-Beratung</h4>
                  <p className="text-gray-600 text-sm">Wir messen direkt bei Ihnen vor Ort aus und erstellen ein maßgeschneidertes Angebot.</p>
                </div>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-gray-200 pt-6">
              <div>
                <span className="text-3xl font-extrabold text-red-600">100%</span>
                <p className="text-xs text-gray-500 font-medium mt-1">Passgenauigkeit</p>
              </div>
              <div>
                <span className="text-3xl font-extrabold text-gray-900">Top</span>
                <p className="text-xs text-gray-500 font-medium mt-1">Qualitätsprofile</p>
              </div>
              <div>
                <span className="text-3xl font-extrabold text-red-600">Kassel</span>
                <p className="text-xs text-gray-500 font-medium mt-1">& Umgebung</p>
              </div>
            </div>
          </div>

          {/* Fotografia /images/2.jpg */}
          <div className="relative">
            <div className="relative h-[450px] w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
              <Image
                src="/images/2.jpg"
                alt="Fensterbau Spahiu Arbeit"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-zinc-900 text-white p-6 rounded-2xl shadow-xl border border-zinc-800 max-w-xs hidden sm:block">
              <div className="flex items-center gap-3">
                <ShieldCheck className="text-red-500" size={36} />
                <div>
                  <h5 className="font-bold text-sm">Qualitätsgarantie</h5>
                  <p className="text-xs text-gray-400 mt-0.5">Fachgerechte Montage nach aktuellen EnEV-Standards</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}