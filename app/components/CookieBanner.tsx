"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Kontrollojmë nëse përdoruesi ka dhënë pëlokimin më parë
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-zinc-950 text-gray-300 border-t border-zinc-800 p-4 md:p-6 shadow-2xl text-xs md:text-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="space-y-1">
          <p className="font-semibold text-white">Datenschutzeinstellungen</p>
          <p className="text-gray-400">
            Wir nutzen Cookies auf unserer Website, umweltfreundliche Funktionalitäten zu bieten und die Nutzung zu analysieren. 
            Weitere Informationen finden Sie in unserer{" "}
            <Link href="/datenschutz" className="underline text-white hover:text-gray-200">
              Datenschutzerklärung
            </Link>.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={acceptCookies}
            className="bg-green-600 hover:bg-green-500 text-white font-medium px-5 py-2.5 rounded transition-colors text-xs md:text-sm"
          >
            Alle akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}