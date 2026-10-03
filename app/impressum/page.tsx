export default function ImpressumPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-20 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Impressum</h1>
      <div className="space-y-4 text-sm leading-relaxed">
        <p className="font-semibold">Angaben gemäß § 5 TMG</p>
        <p>
          Spahiu Fensterbau<br />
          Qlirim Spahiu<br />
          Kirchheimstraße 37<br />
          34127 Kassel, Deutschland
        </p>
        <p>
          <strong>Kontakt:</strong><br />
          Telefon: +49 159 06321783<br />
          E-Mail: Spahiufensterbau@gmail.com
        </p>
        <p className="text-xs text-gray-500 mt-6">
          Umsatzsteuer-ID wird nachgereicht / Kleinunternehmer gemäß § 19 UStG.
        </p>
      </div>
    </main>
  );
}