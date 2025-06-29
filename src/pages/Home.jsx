import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative overflow-hidden bg-black mobile-content-padding">
      {/* Dark gaming grid background - Now visible on mobile */}
      <div className="absolute inset-0 opacity-15">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            animation: 'gridSlide 30s linear infinite'
          }}
        ></div>
      </div>

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 opacity-90"></div>

      {/* Animated dark circuit lines - Now visible on mobile */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 left-1/4 w-px h-32 bg-gradient-to-b from-cyan-400 to-transparent animate-pulse"></div>
        <div className="absolute top-0 right-1/3 w-px h-24 bg-gradient-to-b from-purple-400 to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-0 left-1/3 w-px h-28 bg-gradient-to-t from-green-400 to-transparent animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-0 right-1/4 w-px h-20 bg-gradient-to-t from-pink-400 to-transparent animate-pulse" style={{animationDelay: '3s'}}></div>
        
        <div className="absolute top-1/4 left-0 h-px w-24 bg-gradient-to-r from-cyan-400 to-transparent animate-pulse" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-1/3 right-0 h-px w-32 bg-gradient-to-l from-purple-400 to-transparent animate-pulse" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute bottom-1/4 left-0 h-px w-28 bg-gradient-to-r from-green-400 to-transparent animate-pulse" style={{animationDelay: '2.5s'}}></div>
        <div className="absolute bottom-1/3 right-0 h-px w-20 bg-gradient-to-l from-pink-400 to-transparent animate-pulse" style={{animationDelay: '3.5s'}}></div>
      </div>

      {/* Floating dark particles - Now visible on mobile */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-ping shadow-lg shadow-cyan-400/50" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-purple-400 rounded-full animate-pulse shadow-lg shadow-purple-400/50" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-20 w-3 h-3 bg-green-400 rounded-full animate-bounce shadow-lg shadow-green-400/50" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-pink-400 rounded-full animate-ping shadow-lg shadow-pink-400/50" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-60 left-1/3 w-1 h-1 bg-yellow-400 rounded-full animate-pulse shadow-lg shadow-yellow-400/50" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-80 right-1/3 w-2 h-2 bg-orange-400 rounded-full animate-bounce shadow-lg shadow-orange-400/50" style={{animationDelay: '5s'}}></div>
      </div>

      {/* Dark geometric gaming shapes - Now visible on mobile */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-5 w-16 h-16 border border-cyan-400 rotate-45 animate-spin shadow-lg shadow-cyan-400/30" style={{animationDuration: '20s'}}></div>
        <div className="absolute bottom-10 right-5 w-12 h-12 border border-purple-400 rotate-12 animate-pulse shadow-lg shadow-purple-400/30"></div>
        <div className="absolute top-1/3 right-10 w-8 h-8 bg-gradient-to-r from-green-500/30 to-blue-500/30 rotate-45 animate-bounce shadow-lg shadow-green-500/40" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/3 left-10 w-6 h-6 border border-pink-400 rounded-full animate-spin shadow-lg shadow-pink-400/30" style={{animationDuration: '15s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-gradient-to-br from-yellow-400/30 to-orange-500/30 rotate-12 animate-pulse shadow-lg shadow-yellow-400/40"></div>
        <div className="absolute bottom-1/2 right-1/4 w-10 h-10 border border-red-400 rotate-45 animate-spin shadow-lg shadow-red-400/30" style={{animationDuration: '25s'}}></div>
      </div>

      {/* Dark gaming scanlines - Now visible on mobile */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 255, 0.1) 2px, rgba(0, 255, 255, 0.1) 4px)',
          animation: 'scanlines 10s linear infinite'
        }}></div>
      </div>

      {/* Main content container */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-16 sm:pt-0 mobile-padding">
        
        {/* Gaming title with dark glow - Responsive sizing */}
        <div className="text-center mb-4 sm:mb-6 md:mb-8 lg:mb-12">
          <div className="relative">
            <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black mb-1 sm:mb-2 md:mb-4 lg:mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-green-400 bg-clip-text text-transparent drop-shadow-2xl animate-pulse text-balance">
               Welcome to🍵
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
        <div className="text-center mb-4 sm:mb-6 md:mb-8 lg:mb-12 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto">
          <div className="relative">
            <div className="bg-gray-900/80 backdrop-blur-sm border border-cyan-400/30 rounded-xl p-3 sm:p-4 md:p-6 shadow-2xl shadow-black/50">
              <div className="absolute top-2 left-3 flex space-x-1 mobile-hide-decorations sm:block">
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
          className="bg-gray-800 border border-white-400 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base hover:bg-purple hover:text-black transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
          onClick={() => navigate("/story")}
        >
          Begin the Adventure 🎮
        </button>

        {/* Dark gaming HUD elements - Responsive positioning and sizing */}
        <div className="absolute top-20 sm:top-4 md:top-6 left-2 sm:left-4 md:left-6">
          <div className="flex items-center space-x-1 sm:space-x-2 bg-gray-900/90 backdrop-blur-sm rounded-lg px-2 sm:px-3 py-1 sm:py-2 border border-green-400/40 shadow-lg shadow-black/50">
            <div className="w-1 sm:w-2 h-1 sm:h-2 bg-green-400 rounded-full animate-pulse shadow-sm shadow-green-400/50"></div>
            <span className="text-xs sm:text-sm text-green-400 font-mono">ONLINE</span>
          </div>
        </div>

        <div className="absolute top-20 sm:top-4 md:top-6 right-2 sm:right-4 md:right-6">
          <div className="bg-gray-900/90 backdrop-blur-sm rounded-lg px-2 sm:px-3 py-1 sm:py-2 border border-purple-400/40 shadow-lg shadow-black/50">
            <span className="text-xs sm:text-sm text-purple-400 font-mono">LVL 1</span>
          </div>
        </div>

        <div className="absolute bottom-4 sm:bottom-6 left-2 sm:left-4 md:left-6">
          <div className="bg-gray-900/90 backdrop-blur-sm rounded-lg px-2 sm:px-3 py-1 sm:py-2 border border-pink-400/40 shadow-lg shadow-black/50">
            <span className="text-xs sm:text-sm text-pink-400 font-mono">⭐ XP: 10</span>
          </div>
        </div>

        <div className="absolute bottom-4 sm:bottom-6 right-2 sm:right-4 md:right-6">
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

      {/* Dark bottom glow */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-gray-900/30 to-transparent"></div>
      
      {/* CSS Animations - Optimized for mobile */}
      <style jsx>{`
        @keyframes gridSlide {
          0% { transform: translate(0, 0); }
          100% { transform: translate(60px, 60px); }
        }
        
        @keyframes scanlines {
          0% { transform: translateY(0); }
          100% { transform: translateY(20px); }
        }
        
        @keyframes glitch {
          0%, 100% { opacity: 0; }
          50% { opacity: 0.1; }
        }
        
        @media (max-width: 768px) {
          @keyframes gridSlide {
            0% { transform: translate(0, 0); }
            100% { transform: translate(30px, 30px); }
          }
          
          @keyframes scanlines {
            0% { transform: translateY(0); }
            100% { transform: translateY(10px); }
          }
        }
      `}</style>
    </div>
  );
}
