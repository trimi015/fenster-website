"use client";

import React, { useState } from "react";
import { Send, Phone, Mail, MapPin, Check } from "lucide-react";

const opsionetInteresit = [
  "Fenster",
  "Haustüren",
  "Schiebetüren",
  "Rollläden & Sonnenschutz",
  "Montage & Reparatur",
  "Sonstiges",
];

export default function Contact() {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const toggleInterest = (option: string) => {
    if (selectedInterests.includes(option)) {
      setSelectedInterests(selectedInterests.filter((item) => item !== option));
    } else {
      setSelectedInterests([...selectedInterests, option]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formular gesendet:", { ...formData, interests: selectedInterests });
    alert("Vielen Dank! Ihre Anfrage wurde erfolgreich gesendet.");
  };

  return (
    <section id="kontakt" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Titulli i Seksionit */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-red-700 font-bold text-xs sm:text-sm tracking-wider uppercase">
            Kontaktieren Sie Uns
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 mt-2">
            Kostenloses Angebot anfordern
          </h2>
          <p className="mt-3 text-sm sm:text-lg text-gray-600">
            Haben Sie Fragen oder möchten Sie ein unverbindliches Angebot? Wir beraten Sie gerne.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Informacionet e Kontaktit */}
          <div className="bg-zinc-950 text-white p-6 sm:p-8 rounded-2xl shadow-lg space-y-6">
            <h3 className="text-xl font-bold border-b border-zinc-800 pb-4 text-white">
              Spahiu Fensterbau
            </h3>

            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="text-red-600 shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-semibold">Standort</p>
                  <p className="text-gray-400">34127 Kassel & Umgebung</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="text-red-600 shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-semibold">Telefon</p>
                  <a href="tel:+4915906321783" className="text-gray-400 hover:text-white transition-colors">
                    +49 159 06321783
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="text-red-600 shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-semibold">E-Mail</p>
                  <a href="mailto:Spahiufensterbau@gmail.com" className="text-gray-400 hover:text-white transition-colors break-all">
                    Spahiufensterbau@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Forma e Kontaktit */}
          <div className="lg:col-span-2 bg-white p-6 sm:p-8 rounded-2xl border border-gray-200/80 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ihr Name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-700 focus:border-transparent outline-none text-sm transition-all"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Telefon *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+49 ..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-700 focus:border-transparent outline-none text-sm transition-all"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  E-Mail
                </label>
                <input
                  type="email"
                  placeholder="Ihre E-Mail-Adresse"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-700 focus:border-transparent outline-none text-sm transition-all"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              {/* LISTA E INTERESAVE (Scrollable & Multi-Select) */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Woran haben Sie Interesse? (Mehrfachauswahl möglich)
                </label>
                
                <div className="max-h-48 overflow-y-auto pr-1 space-y-2 border border-gray-200 p-3 rounded-xl bg-gray-50/50 scrollbar-thin">
                  {opsionetInteresit.map((option) => {
                    const isSelected = selectedInterests.includes(option);
                    return (
                      <div
                        key={option}
                        onClick={() => toggleInterest(option)}
                        className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition-all border ${
                          isSelected
                            ? "bg-red-700 text-white border-red-700 shadow-sm"
                            : "bg-white text-gray-700 border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <span className="text-xs sm:text-sm font-medium">{option}</span>
                        <div
                          className={`w-5 h-5 rounded-md flex items-center justify-center border ${
                            isSelected
                              ? "bg-white text-red-700 border-white"
                              : "border-gray-300 bg-white"
                          }`}
                        >
                          {isSelected && <Check size={14} strokeWidth={3} />}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Ihre Nachricht
                </label>
                <textarea
                  rows={4}
                  placeholder="Beschreiben Sie kurz Ihr Projekt..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-700 focus:border-transparent outline-none text-sm transition-all"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-red-700 hover:bg-red-800 text-white font-bold py-4 rounded-xl shadow-md transition-all duration-300 flex items-center justify-center gap-2 text-base"
              >
                <span>Anfrage senden</span>
                <Send size={18} />
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}