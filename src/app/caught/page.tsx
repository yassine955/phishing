"use client";

import Link from "next/link";

export default function CaughtPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Warning icon */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-amber-500 rounded-full mb-6 animate-bounce">
            <span className="text-5xl">⚠️</span>
          </div>
        </div>

        {/* Main card */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-6 text-center">
            <h1 className="text-3xl font-bold text-white mb-2">
              WACHT EVEN!
            </h1>
            <p className="text-amber-100 text-lg">
              Dit was een test
            </p>
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                U heeft zojuist op een phishing link geklikt
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Gelukkig was dit een security awareness training. In het echte leven had dit gevaarlijk kunnen zijn!
              </p>
            </div>

            {/* Warning signs */}
            <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded-r-lg">
              <h3 className="text-lg font-semibold text-red-800 mb-2">
                Waarschuwingssignalen die u had kunnen herkennen:
              </h3>
              <ul className="text-red-700 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>&quot;U bent de 1.000.000ste bezoeker&quot; - klassieke phishing tactiek</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Urgentie creëren met timers en &quot;laatste kans&quot; berichten</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Te mooi om waar te zijn: gratis €500 zonder voorwaarden</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Nep-testimonials en sociale bewijskracht</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Valse beveiligingsindicatoren</span>
                </li>
              </ul>
            </div>

            {/* Tips */}
            <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6 rounded-r-lg">
              <h3 className="text-lg font-semibold text-green-800 mb-2">
                Tips om uzelf te beschermen:
              </h3>
              <ul className="text-green-700 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Controleer altijd de URL van de website</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Wees wantrouwig bij &quot;gratis&quot; aanbiedingen</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Neem de tijd - oplichters willen dat u snel handelt</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Deel nooit persoonlijke gegevens via onbekende links</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Bij twijfel: vraag het na bij een bekende of IT-afdeling</span>
                </li>
              </ul>
            </div>

            {/* Stats box */}
            <div className="bg-blue-50 rounded-xl p-6 text-center mb-6">
              <p className="text-blue-800 text-lg">
                <span className="font-bold">Wist u dat?</span><br />
                91% van alle cyberaanvallen begint met een phishing e-mail of link
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Bekijk de phishing pagina opnieuw
              </Link>
              <a
                href="https://veiliginternetten.nl/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
              >
                Meer informatie over online veiligheid
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-gray-400 mt-6 text-sm">
          Dit is onderdeel van een security awareness training.<br />
          Geen persoonlijke gegevens zijn verzameld.
        </p>
      </div>
    </div>
  );
}
