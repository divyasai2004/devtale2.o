import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <>
      {/* Animated background effects */}
      <div className="fixed top-0 left-0 w-full h-20 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-cyan-900/20 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-purple-500/50 via-cyan-400/80 to-blue-500/50 shadow-lg shadow-cyan-400/30"></div>
      </div>

      <nav className="relative z-10 bg-black/95 backdrop-blur-sm border-b border-cyan-400/30 text-white px-8 py-4 flex justify-between items-center shadow-2xl shadow-cyan-400/10">
        {/* Animated corner accents */}
        <div className="absolute top-0 left-0 w-20 h-20 pointer-events-none">
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-400 opacity-60 animate-pulse"></div>
          <div className="absolute top-1 left-1 w-2 h-2 bg-cyan-400/40 animate-ping"></div>
        </div>
        <div className="absolute top-0 right-0 w-20 h-20 pointer-events-none">
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-purple-400 opacity-60 animate-pulse"></div>
          <div className="absolute top-1 right-1 w-2 h-2 bg-purple-400/40 animate-ping"></div>
        </div>
        <div className="absolute bottom-0 left-0 w-20 h-20 pointer-events-none">
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-blue-400 opacity-60 animate-pulse"></div>
        </div>
        <div className="absolute bottom-0 right-0 w-20 h-20 pointer-events-none">
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-green-400 opacity-60 animate-pulse"></div>
        </div>

        {/* Logo with gaming effects */}
        <div className="relative group">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse cursor-pointer transition-all duration-300 group-hover:scale-110">
            🍵 DevTale
          </h1>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-pink-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
          <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400/10 to-purple-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10"></div>
        </div>

        {/* Navigation links with gaming styling */}
        <div className="flex space-x-6 items-center">
          <a 
            href="/" 
            className="relative px-4 py-2 text-cyan-300 hover:text-white transition-all duration-300 group overflow-hidden border border-transparent hover:border-cyan-400/50 rounded-md"
          >
            <span className="relative z-10">Home</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/20 to-cyan-400/0 transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            <div className="absolute bottom-0 left-0 w-0 h-px bg-cyan-400 group-hover:w-full transition-all duration-300"></div>
          </a>

          <a 
            href="/story" 
            className="relative px-4 py-2 text-purple-300 hover:text-white transition-all duration-300 group overflow-hidden border border-transparent hover:border-purple-400/50 rounded-md"
          >
            <span className="relative z-10">Story Mode</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/0 via-purple-400/20 to-purple-400/0 transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            <div className="absolute bottom-0 left-0 w-0 h-px bg-purple-400 group-hover:w-full transition-all duration-300"></div>
          </a>

          <a 
            href="/arena" 
            className="relative px-4 py-2 text-red-300 hover:text-white transition-all duration-300 group overflow-hidden border border-transparent hover:border-red-400/50 rounded-md"
          >
            <span className="relative z-10">Code Arena</span>
            <div className="absolute inset-0 bg-gradient-to-r from-red-400/0 via-red-400/20 to-red-400/0 transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            <div className="absolute bottom-0 left-0 w-0 h-px bg-red-400 group-hover:w-full transition-all duration-300"></div>
          </a>

          {isLoggedIn && (
            <a 
              href="/profile" 
              className="relative px-4 py-2 text-green-300 hover:text-white transition-all duration-300 group overflow-hidden border border-transparent hover:border-green-400/50 rounded-md"
            >
              <span className="relative z-10">Progress</span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/0 via-green-400/20 to-green-400/0 transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              <div className="absolute bottom-0 left-0 w-0 h-px bg-green-400 group-hover:w-full transition-all duration-300"></div>
            </a>
          )}

          {isLoggedIn ? (
            <button 
              onClick={handleLogout} 
              className="relative px-4 py-2 text-orange-300 hover:text-white transition-all duration-300 group overflow-hidden border border-transparent hover:border-orange-400/50 rounded-md bg-gradient-to-r from-orange-600/20 to-red-600/20 hover:from-orange-600/40 hover:to-red-600/40"
            >
              <span className="relative z-10">Logout</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400/0 via-orange-400/20 to-red-400/20 transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              <div className="absolute bottom-0 left-0 w-0 h-px bg-orange-400 group-hover:w-full transition-all duration-300"></div>
            </button>
          ) : (
            <a 
              href="/login" 
              className="relative px-4 py-2 text-blue-300 hover:text-white transition-all duration-300 group overflow-hidden border border-blue-400/50 rounded-md bg-gradient-to-r from-blue-600/20 to-cyan-600/20 hover:from-blue-600/40 hover:to-cyan-600/40"
            >
              <span className="relative z-10">Login</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/20 to-cyan-400/20 transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              <div className="absolute bottom-0 left-0 w-0 h-px bg-blue-400 group-hover:w-full transition-all duration-300"></div>
            </a>
          )}

          {/* <a 
            href="/profile" 
            className="relative px-4 py-2 text-pink-300 hover:text-white transition-all duration-300 group overflow-hidden border border-transparent hover:border-pink-400/50 rounded-md"
          >
            <span className="relative z-10">Profile</span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-400/0 via-pink-400/20 to-pink-400/0 transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            <div className="absolute bottom-0 left-0 w-0 h-px bg-pink-400 group-hover:w-full transition-all duration-300"></div>
          </a> */}
        </div>

        {/* Floating particles effect */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-2 left-1/4 w-1 h-1 bg-cyan-400 rounded-full opacity-60 animate-ping" style={{animationDelay: '0s'}}></div>
          <div className="absolute top-4 right-1/3 w-1 h-1 bg-purple-400 rounded-full opacity-40 animate-ping" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-2 left-1/3 w-1 h-1 bg-blue-400 rounded-full opacity-50 animate-ping" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-3 right-1/4 w-1 h-1 bg-green-400 rounded-full opacity-60 animate-ping" style={{animationDelay: '0.5s'}}></div>
        </div>

        {/* Scanning line effect */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-cyan-400/60 to-transparent opacity-40 animate-pulse transform translate-x-0"></div>
        </div>
      </nav>

      <style jsx>{`
        @keyframes scan {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100vw); }
        }
        .animate-scan {
          animation: scan 3s linear infinite;
        }
      `}</style>
    </>
  );
}







// import React from "react";
// import { Link, useNavigate } from "react-router-dom";

// export default function Navbar() {
//   const navigate = useNavigate();
//   const isLoggedIn = localStorage.getItem("isLoggedIn");

//   const handleLogout = () => {
//     localStorage.clear();
//     navigate("/login");
//   };
//   return (
//     <nav className="bg-black text-white px-6 py-3 flex justify-between items-center">
//       <h1 className="text-xl font-bold">🎮 Algoritale</h1>
//       <div className="space-x-4">
//         <Link to="/" className="hover:underline">Home</Link>
//         <Link to="/story" className="hover:underline">Story Mode</Link>
//         <Link to="/arena" className="hover:underline">Code Arena</Link>
       
//         {isLoggedIn && (
//           <Link to="/profile" className="hover:underline">Progress</Link>
//         )}
//         {isLoggedIn ? (
//           <button onClick={handleLogout} className="hover:underline">Logout</button>
//         ) : (
//           <Link to="/login" className="hover:underline">Login</Link>
//         )}
//          <Link to="/profile" className="hover:underline">Profile</Link> 
//       </div>
//     </nav>
//   );
// }
