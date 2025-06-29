import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative overflow-hidden bg-black mobile-content-padding pt-16 pb-8">
      {/* Subtle animated diagonal gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 animate-gradient-move" style={{backgroundSize: '200% 200%'}} />

      {/* Main content container */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-8 sm:pt-0 mobile-padding">
        
        {/* Gaming title with dark glow - Responsive sizing */}
        <div className="text-center mb-4 sm:mb-6 md:mb-8 lg:mb-10">
          <div className="relative">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black mb-1 sm:mb-2 md:mb-4 lg:mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-green-400 bg-clip-text text-transparent drop-shadow-2xl animate-pulse text-balance">
               Welcome to...
            </h1>
            <div className="absolute -inset-1 sm:-inset-2 md:-inset-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 blur-xl sm:blur-2xl rounded-full -z-10"></div>
          </div>
          
          <div className="relative mt-1 sm:mt-2">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black mb-2 sm:mb-4 md:mb-6 lg:mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent text-balance">
              DevTale
            </h1>
            <div className="absolute -inset-2 sm:-inset-3 md:-inset-6 bg-gradient-to-r from-purple-500/15 to-cyan-500/15 blur-2xl sm:blur-3xl rounded-full -z-10 animate-pulse"></div>
            
            {/* Glitch effect overlay - Hidden on mobile for performance */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent opacity-0 animate-pulse mobile-hide-decorations sm:block" style={{animationDuration: '3s', animationDelay: '1s'}}>
              🎧
            </div>
          </div>
        </div>

        {/* Dark gaming description panel - Responsive sizing */}
        <div className="text-center mb-4 sm:mb-6 md:mb-8 lg:mb-10 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto">
          <div className="relative">
            <div className="bg-gray-900/80 backdrop-blur-sm border border-cyan-400/30 rounded-xl p-3 sm:p-4 md:p-6 shadow-2xl shadow-black/50">
              <div className="absolute top-2 left-3 flex flex-row space-x-1">
                <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              </div>
              
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed font-medium mt-4 sm:mt-4 md:mt-4 text-balance">
                Learn to code through epic quests and storytelling. Embark on a journey where code meets adventure!
              </p>
            </div>
          </div>
        </div>

        {/* Your original CTA button - Responsive sizing */}
        <button
          className="bg-gray-800 border border-white-400 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg text-base sm:text-lg hover:bg-purple hover:text-black transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl min-h-[48px] min-w-[48px] focus:outline-none focus:ring-2 focus:ring-cyan-400 mt-4"
          style={{ marginBottom: 'max(1.5rem, env(safe-area-inset-bottom, 0px))' }}
          onClick={() => navigate("/story")}
        >
          Begin the Adventure 🎮
        </button>

        {/* Dark gaming HUD elements - Responsive positioning and sizing */}
        <div className="absolute top-20 sm:top-4 md:top-6 left-2 sm:left-4 md:left-6 safe-area-top">
          <div className="flex items-center space-x-1 sm:space-x-2 bg-gray-900/90 backdrop-blur-sm rounded-lg px-2 sm:px-3 py-1 sm:py-2 border border-green-400/40 shadow-lg shadow-black/50">
            <div className="w-1 sm:w-2 h-1 sm:h-2 bg-green-400 rounded-full animate-pulse shadow-sm shadow-green-400/50"></div>
            <span className="text-xs sm:text-sm text-green-400 font-mono">ONLINE</span>
          </div>
        </div>

        <div className="absolute top-20 sm:top-4 md:top-6 right-2 sm:right-4 md:right-6 safe-area-top">
          <div className="bg-gray-900/90 backdrop-blur-sm rounded-lg px-2 sm:px-3 py-1 sm:py-2 border border-purple-400/40 shadow-lg shadow-black/50">
            <span className="text-xs sm:text-sm text-purple-400 font-mono">LVL 1</span>
          </div>
        </div>

        <div className="absolute bottom-4 sm:bottom-6 left-2 sm:left-4 md:left-6 safe-area-bottom">
          <div className="bg-gray-900/90 backdrop-blur-sm rounded-lg px-2 sm:px-3 py-1 sm:py-2 border border-pink-400/40 shadow-lg shadow-black/50">
            <span className="text-xs sm:text-sm text-pink-400 font-mono">⭐ XP: 10</span>
          </div>
        </div>

        <div className="absolute bottom-4 sm:bottom-6 right-2 sm:right-4 md:right-6 safe-area-bottom">
          <div className="bg-gray-900/90 backdrop-blur-sm rounded-lg px-2 sm:px-3 py-1 sm:py-2 border border-yellow-400/40 shadow-lg shadow-black/50">
            <span className="text-xs sm:text-sm text-yellow-400 font-mono">🏆 WIN</span>
          </div>
        </div>

        {/* Additional dark gaming elements - Hidden on mobile */}
        <div className="absolute top-1/3 left-0 opacity-30 mobile-hide-decorations sm:block">
          <div className="w-1 h-20 bg-gradient-to-b from-cyan-400/50 to-transparent animate-pulse"></div>
        </div>
        
        <div className="absolute top-1/3 right-0 opacity-30 mobile-hide-decorations sm:block">
          <div className="w-1 h-20 bg-gradient-to-b from-purple-400/50 to-transparent animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2 opacity-40 mobile-hide-decorations sm:block">
          <div className="flex space-x-1">
            <div className="w-1 h-4 bg-cyan-400/70 animate-pulse rounded"></div>
            <div className="w-1 h-6 bg-purple-400/70 animate-pulse rounded" style={{animationDelay: '0.2s'}}></div>
            <div className="w-1 h-3 bg-green-400/70 animate-pulse rounded" style={{animationDelay: '0.4s'}}></div>
            <div className="w-1 h-5 bg-pink-400/70 animate-pulse rounded" style={{animationDelay: '0.6s'}}></div>
            <div className="w-1 h-2 bg-yellow-400/70 animate-pulse rounded" style={{animationDelay: '0.8s'}}></div>
          </div>
        </div>
      </div>

      {/* Gaming animated background: neon grid + floating particles */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Neon grid */}
        <div className="absolute inset-0 opacity-10 animate-home-grid-move" style={{
          backgroundImage: `linear-gradient(rgba(34,211,238,0.10) 1px, transparent 1px),linear-gradient(90deg, rgba(124,58,237,0.10) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}></div>
        {/* Floating particles */}
        {Array.from({length: 18}).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              backgroundColor: [
                '#22d3ee', '#7c3aed', '#f472b6', '#facc15', '#34d399', '#f87171'
              ][i % 6],
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${1.5 + Math.random()}s`,
              opacity: 0.7
            }}
          />
        ))}
      </div>

      {/* Add CSS for animated gradient and grid */}
      <style>{`
        @keyframes gradient-move {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-move {
          animation: gradient-move 16s ease-in-out infinite;
        }
        @keyframes home-grid-move {
          0% { background-position: 0 0, 0 0; }
          100% { background-position: 48px 48px, 48px 48px; }
        }
        .animate-home-grid-move {
          animation: home-grid-move 18s linear infinite;
        }
      `}</style>
    </div>
  );
}
