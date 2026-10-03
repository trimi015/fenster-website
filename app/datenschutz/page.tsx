export default function DatenschutzPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-20 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Datenschutzerklärung</h1>
      <div className="space-y-4 text-sm leading-relaxed">
        <h2 className="text-lg font-semibold mt-4">1. Datenschutz auf einen Blick</h2>
        <p>
          Die Nutzung unserer Website ist in der Regel ohne Angabe personenbezogener Daten möglich. 
          Wenn Sie uns per E-Mail oder Telefon kontaktieren, werden Ihre Angaben zur Bearbeitung der Anfrage gespeichert.
        </p>
        <h2 className="text-lg font-semibold mt-4">2. Hosting</h2>
        <p>
          Diese Website wird bei Vercel Inc. (USA) gehostet. Ihre Daten werden im Rahmen des globalen Vercel CDN verarbeitet.
        </p>
      </div>
    </main>
  );
}