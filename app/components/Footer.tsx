export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-gray-400 py-10 px-4 border-t border-zinc-800 text-xs">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Impressum */}
        <div>
          <h3 className="text-white font-bold text-sm mb-3 uppercase tracking-wider">Impressum</h3>
          <p className="font-semibold text-gray-300">Spahiu Fensterbau</p>
          <p>Inhaber: Qlirim Spahiu</p>
          <p>Kirchheimstraße 37</p>
          <p>34127 Kassel, Deutschland</p>
          <p className="mt-2">Telefon: +49 159 06321783</p>
          <p>E-Mail: Spahiufensterbau@gmail.com</p>
          <p className="mt-3 text-[11px] text-gray-500">
            Umsatzsteuer-ID wird nachgereicht / Kleinunternehmer gemäß § 19 UStG.
          </p>
        </div>

        {/* Datenschutz */}
        <div>
          <h3 className="text-white font-bold text-sm mb-3 uppercase tracking-wider">Datenschutz</h3>
          <p className="mb-2">
            Die Nutzung unserer Website ist in der Regel ohne Angabe personenbezogener Daten möglich. 
            Wenn Sie uns per E-Mail oder Telefon kontaktieren, werden Ihre Angaben zur Bearbeitung der Anfrage gespeichert.
          </p>
          <p>
            <strong>Hosting:</strong> Diese Website wird bei Vercel Inc. (USA) gehostet. 
            Ihre Daten werden im Rahmen des globalen Vercel CDN verarbeitet.
          </p>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-zinc-900 text-center text-gray-500">
        &copy; {new Date().getFullYear()} Spahiu Fensterbau. Alle Rechte vorbehalten.
      </div>
    </footer>
  );
}