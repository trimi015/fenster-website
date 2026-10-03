import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-gray-400 py-8 px-4 border-t border-zinc-800 text-xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Të drejtat e autorit */}
        <p>&copy; {new Date().getFullYear()} Spahiu Fensterbau. Alle Rechte vorbehalten.</p>

        {/* Lidhjet Ligjore */}
        <div className="flex gap-6">
          <Link href="/impressum" className="hover:text-white transition-colors underline">
            Impressum
          </Link>
          <Link href="/datenschutz" className="hover:text-white transition-colors underline">
            Datenschutz
          </Link>
        </div>

      </div>
    </footer>
  );
}