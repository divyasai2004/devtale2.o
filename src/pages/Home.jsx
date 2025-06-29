import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      {/* Dark gaming grid background */}
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

      {/* Animated dark circuit lines */}
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

      {/* Floating dark particles */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-ping shadow-lg shadow-cyan-400/50" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-purple-400 rounded-full animate-pulse shadow-lg shadow-purple-400/50" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-20 w-3 h-3 bg-green-400 rounded-full animate-bounce shadow-lg shadow-green-400/50" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-pink-400 rounded-full animate-ping shadow-lg shadow-pink-400/50" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-60 left-1/3 w-1 h-1 bg-yellow-400 rounded-full animate-pulse shadow-lg shadow-yellow-400/50" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-80 right-1/3 w-2 h-2 bg-orange-400 rounded-full animate-bounce shadow-lg shadow-orange-400/50" style={{animationDelay: '5s'}}></div>
      </div>

      {/* Dark geometric gaming shapes */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-5 w-16 h-16 border border-cyan-400 rotate-45 animate-spin shadow-lg shadow-cyan-400/30" style={{animationDuration: '20s'}}></div>
        <div className="absolute bottom-10 right-5 w-12 h-12 border border-purple-400 rotate-12 animate-pulse shadow-lg shadow-purple-400/30"></div>
        <div className="absolute top-1/3 right-10 w-8 h-8 bg-gradient-to-r from-green-500/30 to-blue-500/30 rotate-45 animate-bounce shadow-lg shadow-green-500/40" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/3 left-10 w-6 h-6 border border-pink-400 rounded-full animate-spin shadow-lg shadow-pink-400/30" style={{animationDuration: '15s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-gradient-to-br from-yellow-400/30 to-orange-500/30 rotate-12 animate-pulse shadow-lg shadow-yellow-400/40"></div>
        <div className="absolute bottom-1/2 right-1/4 w-10 h-10 border border-red-400 rotate-45 animate-spin shadow-lg shadow-red-400/30" style={{animationDuration: '25s'}}></div>
      </div>

      {/* Dark gaming scanlines */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 255, 0.1) 2px, rgba(0, 255, 255, 0.1) 4px)',
          animation: 'scanlines 10s linear infinite'
        }}></div>
      </div>

      {/* Main content container */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
        
        {/* Gaming title with dark glow */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="relative">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 sm:mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-green-400 bg-clip-text text-transparent drop-shadow-2xl animate-pulse">
               Welcome to🍵
            </h1>
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 blur-2xl rounded-full -z-10"></div>
          </div>
          
          <div className="relative mt-2">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 sm:mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              DevTale
            </h1>
            <div className="absolute -inset-6 bg-gradient-to-r from-purple-500/15 to-cyan-500/15 blur-3xl rounded-full -z-10 animate-pulse"></div>
            
            {/* Glitch effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent opacity-0 animate-pulse" style={{animationDuration: '3s', animationDelay: '1s'}}>
              🎧
            </div>
          </div>
        </div>

        {/* Dark gaming description panel */}
        <div className="text-center mb-8 sm:mb-12 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl">
          <div className="relative">
            <div className="bg-gray-900/80 backdrop-blur-sm border border-cyan-400/30 rounded-xl p-6 shadow-2xl shadow-black/50">
              <div className="absolute top-2 left-3 flex space-x-1">
                <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              </div>
              
              <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed font-medium mt-4">
                Learn to code through epic quests and storytelling. Embark on a journey where code meet adventure!
              </p>
            </div>
          </div>
        </div>

        {/* Your original CTA button */}
        <button
          className="bg-gray-800 border border-white-400 text-white px-6 py-2 rounded hover:bg-purple hover:text-black transition"
          onClick={() => navigate("/story")}
        >
          Begin the Adventure 🎮
        </button>

        {/* Dark gaming HUD elements */}
        <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
          <div className="flex items-center space-x-2 bg-gray-900/90 backdrop-blur-sm rounded-lg px-3 py-2 border border-green-400/40 shadow-lg shadow-black/50">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-sm shadow-green-400/50"></div>
            <span className="text-xs sm:text-sm text-green-400 font-mono">ONLINE</span>
          </div>
        </div>

        <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
          <div className="bg-gray-900/90 backdrop-blur-sm rounded-lg px-3 py-2 border border-purple-400/40 shadow-lg shadow-black/50">
            <span className="text-xs sm:text-sm text-purple-400 font-mono">LVL 1</span>
          </div>
        </div>

        <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6">
          <div className="bg-gray-900/90 backdrop-blur-sm rounded-lg px-3 py-2 border border-pink-400/40 shadow-lg shadow-black/50">
            <span className="text-xs sm:text-sm text-pink-400 font-mono">⭐ XP: 10</span>
          </div>
        </div>

        <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6">
          <div className="bg-gray-900/90 backdrop-blur-sm rounded-lg px-3 py-2 border border-yellow-400/40 shadow-lg shadow-black/50">
            <span className="text-xs sm:text-sm text-yellow-400 font-mono">🏆 WIN</span>
          </div>
        </div>

        {/* Additional dark gaming elements */}
        <div className="absolute top-1/3 left-0 opacity-30">
          <div className="w-1 h-20 bg-gradient-to-b from-cyan-400/50 to-transparent animate-pulse"></div>
        </div>
        
        <div className="absolute top-1/3 right-0 opacity-30">
          <div className="w-1 h-20 bg-gradient-to-b from-purple-400/50 to-transparent animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2 opacity-40">
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
      
      {/* CSS Animations */}
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
      `}</style>
    </div>
  );
}





// // import React from "react";
// // import { useNavigate } from "react-router-dom";

// // export default function Home() {
// //   const navigate = useNavigate();

// //   return (
// //     <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-purple-900">
// //       {/* Dark gaming grid pattern */}
// //       <div className="absolute inset-0 opacity-20">
// //         <div className="absolute inset-0" style={{
// //           backgroundImage: `
// //             linear-gradient(rgba(147, 51, 234, 0.1) 1px, transparent 1px),
// //             linear-gradient(90deg, rgba(147, 51, 234, 0.1) 1px, transparent 1px)
// //           `,
// //           backgroundSize: '50px 50px'
// //         }}></div>
// //       </div>

// //       {/* Neon circuit lines */}
// //       <div className="absolute inset-0 opacity-30">
// //         <div className="absolute top-0 left-1/4 w-px h-32 bg-gradient-to-b from-cyan-400 to-transparent animate-pulse"></div>
// //         <div className="absolute top-0 right-1/3 w-px h-24 bg-gradient-to-b from-purple-400 to-transparent animate-pulse delay-1000"></div>
// //         <div className="absolute bottom-0 left-1/3 w-px h-28 bg-gradient-to-t from-pink-400 to-transparent animate-pulse delay-500"></div>
// //         <div className="absolute bottom-0 right-1/4 w-px h-20 bg-gradient-to-t from-green-400 to-transparent animate-pulse delay-1500"></div>
        
// //         <div className="absolute top-1/4 left-0 h-px w-24 bg-gradient-to-r from-cyan-400 to-transparent animate-pulse delay-700"></div>
// //         <div className="absolute top-1/3 right-0 h-px w-32 bg-gradient-to-l from-purple-400 to-transparent animate-pulse delay-300"></div>
// //         <div className="absolute bottom-1/4 left-0 h-px w-28 bg-gradient-to-r from-pink-400 to-transparent animate-pulse delay-1200"></div>
// //         <div className="absolute bottom-1/3 right-0 h-px w-20 bg-gradient-to-l from-green-400 to-transparent animate-pulse delay-800"></div>
// //       </div>

// //       {/* Animated background elements */}
// //       <div className="absolute inset-0 opacity-20">
// //         <div className="absolute top-20 left-10 w-3 h-3 bg-cyan-400 rounded-full animate-pulse shadow-lg shadow-cyan-400/50"></div>
// //         <div className="absolute top-40 right-20 w-2 h-2 bg-pink-400 rounded-full animate-ping shadow-lg shadow-pink-400/50"></div>
// //         <div className="absolute bottom-32 left-20 w-4 h-4 bg-yellow-400 rounded-full animate-bounce shadow-lg shadow-yellow-400/50"></div>
// //         <div className="absolute bottom-20 right-10 w-3 h-3 bg-green-400 rounded-full animate-pulse delay-1000 shadow-lg shadow-green-400/50"></div>
// //         <div className="absolute top-60 left-1/3 w-2 h-2 bg-blue-400 rounded-full animate-ping delay-500 shadow-lg shadow-blue-400/50"></div>
// //         <div className="absolute top-80 right-1/3 w-3 h-3 bg-purple-400 rounded-full animate-bounce delay-700 shadow-lg shadow-purple-400/50"></div>
// //       </div>

// //       {/* Dark geometric shapes */}
// //       <div className="absolute inset-0 opacity-15">
// //         <div className="absolute top-10 left-5 w-20 h-20 border-2 border-cyan-400 rotate-45 animate-spin shadow-lg shadow-cyan-400/30" style={{animationDuration: '20s'}}></div>
// //         <div className="absolute bottom-10 right-5 w-16 h-16 border-2 border-pink-400 rotate-12 animate-pulse shadow-lg shadow-pink-400/30"></div>
// //         <div className="absolute top-1/3 right-10 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rotate-45 animate-bounce shadow-lg shadow-purple-500/40" style={{animationDelay: '2s'}}></div>
// //         <div className="absolute bottom-1/3 left-10 w-8 h-8 border-2 border-green-400 rounded-full animate-spin shadow-lg shadow-green-400/30" style={{animationDuration: '15s'}}></div>
// //         <div className="absolute top-1/2 left-1/4 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rotate-12 animate-pulse shadow-lg shadow-yellow-400/40"></div>
// //       </div>

// //       {/* Main content */}
// //       <div className="relative z-10 min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
// //         {/* Title Section */}
// //         <div className="text-center mb-8 sm:mb-12">
// //           <div className="relative">
// //             <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 sm:mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-2xl">
// //               🎮 Welcome to
// //             </h1>
// //             <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 sm:mb-8 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
// //               Algoritale
// //             </h1>
// //             <div className="absolute -top-2 -left-2 w-full h-full bg-gradient-to-r from-cyan-500/20 to-pink-500/20 blur-xl -z-10"></div>
// //           </div>
// //         </div>

// //         {/* Description */}
// //         <div className="text-center mb-8 sm:mb-12 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl">
// //           <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed font-medium">
// //             Learn to code through epic quests and storytelling. Embark on a journey where algorithms meet adventure!
// //           </p>
// //         </div>

// //         {/* CTA Button */}
// //         <div className="relative group">
// //           <button
// //             className="relative px-8 py-4 sm:px-10 sm:py-5 text-base sm:text-lg md:text-xl font-bold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl border-2 border-purple-400 hover:border-cyan-400 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/25"
// //             onClick={() => navigate("/story")}
// //           >
// //             <span className="relative z-10">Begin the Adventure</span>
// //             <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
// //           </button>
// //           <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
// //         </div>

// //         {/* Gaming UI Elements */}
// //         <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
// //           <div className="flex items-center space-x-2 bg-black/40 backdrop-blur-sm rounded-lg px-3 py-2 border border-cyan-400/30">
// //             <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
// //             <span className="text-xs sm:text-sm text-cyan-400 font-mono">ONLINE</span>
// //           </div>
// //         </div>

// //         <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
// //           <div className="bg-black/40 backdrop-blur-sm rounded-lg px-3 py-2 border border-purple-400/30">
// //             <span className="text-xs sm:text-sm text-purple-400 font-mono">LVL 1</span>
// //           </div>
// //         </div>

// //         <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6">
// //           <div className="bg-black/40 backdrop-blur-sm rounded-lg px-3 py-2 border border-pink-400/30">
// //             <span className="text-xs sm:text-sm text-pink-400 font-mono">XP: 0</span>
// //           </div>
// //         </div>

// //         <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6">
// //           <div className="bg-black/40 backdrop-blur-sm rounded-lg px-3 py-2 border border-yellow-400/30">
// //             <span className="text-xs sm:text-sm text-yellow-400 font-mono">⭐ NEW</span>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Bottom glow effect */}
// //       <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-purple-900/50 to-transparent"></div>
// //     </div>
// //   );
// // }


// import React from "react";
// import { useNavigate } from "react-router-dom";

// export default function Home() {
//   const navigate = useNavigate();

//   return (
//     <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-purple-700 via-pink-500 to-red-500 text-white">
//       <h1 className="text-5xl font-bold mb-4">🎮 Welcome to Algoritale</h1>
//       <p className="text-lg text-center max-w-md mb-6">
//         Learn to code through epic quests and storytelling.
//       </p>
//       <button
//         className="bg-black px-6 py-2 rounded hover:bg-white hover:text-black transition"
//         onClick={() => navigate("/story")}
//       >
//         Begin the Adventure
//       </button>
//     </div>
//   );
// }
