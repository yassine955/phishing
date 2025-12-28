"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleClaim = async () => {
    setIsLoading(true);

    try {
      const response = await fetch("/api/claim", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        router.push("/caught");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      {/* Confetti effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: ["#FFD700", "#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4"][i % 5],
              animation: `confetti 3s ease-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-lg w-full">
        {/* Urgency banner */}
        <div className="bg-red-600 text-white text-center py-2 px-4 rounded-t-2xl font-bold text-sm animate-pulse">
          LAATSTE KANS! Nog maar 2 minuten beschikbaar!
        </div>

        {/* Main card */}
        <div className="bg-white rounded-b-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-6 text-center">
            <div className="text-6xl mb-4 animate-bounce-slow">🎉</div>
            <h1 className="text-3xl font-bold text-white mb-2">
              GEFELICITEERD!
            </h1>
            <p className="text-green-100 text-lg">
              U bent de 1.000.000ste bezoeker!
            </p>
          </div>

          {/* Prize section */}
          <div className="p-6">
            <div className="prize-card rounded-xl p-6 mb-6 text-center">
              <div className="text-5xl mb-3">🏆</div>
              <h2 className="text-2xl font-bold text-amber-900 mb-2">
                Uw Prijs
              </h2>
              <p className="text-4xl font-bold text-amber-800">
                €500 Cadeaubon
              </p>
              <p className="text-amber-700 mt-2">
                Albert Heijn / Bol.com / MediaMarkt
              </p>
            </div>

            {/* Trust indicators */}
            <div className="flex justify-center gap-4 mb-6 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <span className="text-green-500">✓</span> Gratis
              </div>
              <div className="flex items-center gap-1">
                <span className="text-green-500">✓</span> Geen kosten
              </div>
              <div className="flex items-center gap-1">
                <span className="text-green-500">✓</span> Direct ontvangen
              </div>
            </div>

            {/* Fake user counter */}
            <div className="bg-gray-100 rounded-lg p-4 mb-6 text-center">
              <p className="text-gray-600 text-sm">
                <span className="font-bold text-green-600">2.847</span> mensen hebben vandaag hun prijs al opgehaald!
              </p>
            </div>

            {/* The button */}
            <button
              onClick={handleClaim}
              disabled={isLoading}
              className="claim-button w-full py-4 px-8 rounded-xl text-white text-xl font-bold uppercase tracking-wide animate-pulse-glow disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
            >
              <span className="relative z-10">
                {isLoading ? "Bezig met laden..." : "🎁 CLAIM NU UW PRIJS!"}
              </span>
              <div className="absolute inset-0 animate-shimmer"></div>
            </button>

            {/* Urgency text */}
            <p className="text-center text-red-600 text-sm mt-4 font-medium animate-pulse">
              ⚠️ Deze aanbieding verloopt over 01:47 minuten!
            </p>

            {/* Fake security badge */}
            <div className="flex justify-center items-center gap-2 mt-6 text-gray-500 text-xs">
              <span>🔒</span>
              <span>100% Veilig & Beveiligd</span>
              <span>|</span>
              <span>SSL Gecertificeerd</span>
            </div>
          </div>
        </div>

        {/* Fake testimonials */}
        <div className="mt-6 space-y-3">
          <div className="glass rounded-lg p-3 text-white text-sm">
            <span className="font-bold">Jan uit Amsterdam</span> heeft zojuist €500 ontvangen! 🎉
          </div>
          <div className="glass rounded-lg p-3 text-white text-sm">
            <span className="font-bold">Lisa uit Rotterdam</span> heeft zojuist €500 ontvangen! 🎉
          </div>
        </div>
      </div>
    </div>
  );
}
