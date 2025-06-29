import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PortalDropdown from './PortalDropdown';

export default function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Animated background effects - Reduced on mobile */}
      {/* Removed all absolutely positioned/fixed gradient divs that could cause a persistent line */}

      <nav className="mobile-nav-fix relative z-10 bg-black/95 backdrop-blur-sm text-white px-3 sm:px-8 py-3 sm:py-4 flex justify-between items-center shadow-lg safe-area-top">
        {/* Animated corner accents - Hidden on mobile */}
        <div className="absolute top-0 left-0 w-20 h-20 pointer-events-none mobile-hide-decorations sm:block">
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-400 opacity-60 animate-pulse"></div>
          <div className="absolute top-1 left-1 w-2 h-2 bg-cyan-400/40 animate-ping"></div>
        </div>
        <div className="absolute top-0 right-0 w-20 h-20 pointer-events-none mobile-hide-decorations sm:block">
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-purple-400 opacity-60 animate-pulse"></div>
          <div className="absolute top-1 right-1 w-2 h-2 bg-purple-400/40 animate-ping"></div>
        </div>
        <div className="absolute bottom-0 left-0 w-20 h-20 pointer-events-none mobile-hide-decorations sm:block">
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-blue-400 opacity-60 animate-pulse"></div>
        </div>
        <div className="absolute bottom-0 right-0 w-20 h-20 pointer-events-none mobile-hide-decorations sm:block">
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-green-400 opacity-60 animate-pulse"></div>
        </div>

        {/* Logo with gaming effects - Responsive sizing */}
        <div className="relative group">
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse cursor-pointer transition-all duration-300 group-hover:scale-110">
            🍵 DevTale
          </h1>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-pink-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
          <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400/10 to-purple-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10"></div>
        </div>

        {/* Desktop Navigation links with gaming styling - Hidden on mobile */}
        <div className="hidden md:flex space-x-4 lg:space-x-6 items-center">
          <a 
            href="/" 
            className="relative px-3 lg:px-4 py-2 text-cyan-300 hover:text-white transition-all duration-300 group overflow-hidden border border-transparent hover:border-cyan-400/50 rounded-md text-sm lg:text-base"
          >
            <span className="relative z-10">Home</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/20 to-cyan-400/0 transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            <div className="absolute bottom-0 left-0 w-0 h-px bg-cyan-400 group-hover:w-full transition-all duration-300"></div>
          </a>

          <a 
            href="/story" 
            className="relative px-3 lg:px-4 py-2 text-purple-300 hover:text-white transition-all duration-300 group overflow-hidden border border-transparent hover:border-purple-400/50 rounded-md text-sm lg:text-base"
          >
            <span className="relative z-10">Story Mode</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/0 via-purple-400/20 to-purple-400/0 transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            <div className="absolute bottom-0 left-0 w-0 h-px bg-purple-400 group-hover:w-full transition-all duration-300"></div>
          </a>

          <a 
            href="/arena" 
            className="relative px-3 lg:px-4 py-2 text-red-300 hover:text-white transition-all duration-300 group overflow-hidden border border-transparent hover:border-red-400/50 rounded-md text-sm lg:text-base"
          >
            <span className="relative z-10">Code Arena</span>
            <div className="absolute inset-0 bg-gradient-to-r from-red-400/0 via-red-400/20 to-red-400/0 transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            <div className="absolute bottom-0 left-0 w-0 h-px bg-red-400 group-hover:w-full transition-all duration-300"></div>
          </a>

          {isLoggedIn && (
            <a 
              href="/profile" 
              className="relative px-3 lg:px-4 py-2 text-green-300 hover:text-white transition-all duration-300 group overflow-hidden border border-transparent hover:border-green-400/50 rounded-md text-sm lg:text-base"
            >
              <span className="relative z-10">Progress</span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/0 via-green-400/20 to-green-400/0 transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              <div className="absolute bottom-0 left-0 w-0 h-px bg-green-400 group-hover:w-full transition-all duration-300"></div>
            </a>
          )}

          {isLoggedIn ? (
            <button 
              onClick={handleLogout} 
              className="relative px-3 lg:px-4 py-2 text-orange-300 hover:text-white transition-all duration-300 group overflow-hidden border border-transparent hover:border-orange-400/50 rounded-md bg-gradient-to-r from-orange-600/20 to-red-600/20 hover:from-orange-600/40 hover:to-red-600/40 text-sm lg:text-base"
            >
              <span className="relative z-10">Logout</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400/0 via-orange-400/20 to-red-400/20 transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              <div className="absolute bottom-0 left-0 w-0 h-px bg-orange-400 group-hover:w-full transition-all duration-300"></div>
            </button>
          ) : (
            <a 
              href="/login" 
              className="relative px-3 lg:px-4 py-2 text-blue-300 hover:text-white transition-all duration-300 group overflow-hidden border border-blue-400/50 rounded-md bg-gradient-to-r from-blue-600/20 to-cyan-600/20 hover:from-blue-600/40 hover:to-cyan-600/40 text-sm lg:text-base"
            >
              <span className="relative z-10">Login</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/20 to-cyan-400/20 transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              <div className="absolute bottom-0 left-0 w-0 h-px bg-blue-400 group-hover:w-full transition-all duration-300"></div>
            </a>
          )}
        </div>

        {/* Mobile hamburger menu button with gaming effects */}
        <div className="md:hidden relative">
          <button
            onClick={toggleMobileMenu}
            className="relative p-3 min-w-[48px] min-h-[48px] text-cyan-400 hover:text-white transition-all duration-300 group border border-cyan-400/30 rounded-md bg-black/50 backdrop-blur-sm hover:bg-cyan-400/20 cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-400"
            style={{ zIndex: 100 }}
            aria-label="Toggle mobile menu"
          >
            {/* Animated hamburger lines */}
            <div className="w-5 h-0.5 bg-current mb-1.5 transition-all duration-300 group-hover:bg-white"></div>
            <div className="w-5 h-0.5 bg-current mb-1.5 transition-all duration-300 group-hover:bg-white"></div>
            <div className="w-5 h-0.5 bg-current transition-all duration-300 group-hover:bg-white"></div>
          </button>

          {/* Dropdown Mobile Menu using Portal with gaming effects */}
          {isMobileMenuOpen && (
            <PortalDropdown>
              <div
                style={{
                  position: 'fixed',
                  top: 'max(4rem, env(safe-area-inset-top, 0px))',
                  right: 'max(0.75rem, env(safe-area-inset-right, 0px))',
                  left: 'max(0.75rem, env(safe-area-inset-left, 0px))',
                  zIndex: 99999,
                  maxWidth: 'calc(100vw - 1.5rem)',
                  width: '100%',
                  transition: 'transform 0.2s cubic-bezier(.4,0,.2,1)',
                  transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(-20px)',
                }}
                className="bg-gray-900/95 border-2 border-cyan-400/40 rounded-xl shadow-2xl backdrop-blur-md overflow-hidden relative gaming-dropdown animate-fade-in"
              >
                {/* Animated border glow - Reduced on mobile */}
                <div className="absolute inset-0 rounded-xl pointer-events-none border-2 border-cyan-400/30 animate-dropdown-glow z-10 mobile-reduce-animations"></div>
                {/* Animated grid background - Hidden on mobile for performance */}
                <div className="absolute inset-0 opacity-20 pointer-events-none z-0 mobile-hide-decorations">
                  <div className="absolute inset-0 animate-grid-move" style={{
                    backgroundImage: `linear-gradient(rgba(34,211,238,0.12) 1px, transparent 1px),linear-gradient(90deg, rgba(124,58,237,0.10) 1px, transparent 1px)`,
                    backgroundSize: '32px 32px',
                  }}></div>
                </div>
                {/* Floating particles - Hidden on mobile for performance */}
                <div className="absolute inset-0 pointer-events-none z-20 mobile-hide-decorations">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={`mobile-particle-${i}`}
                      className="absolute w-1.5 h-1.5 rounded-full animate-ping"
                      style={{
                        left: `${Math.random() * 90 + 5}%`,
                        top: `${Math.random() * 90 + 5}%`,
                        background: [
                          '#22d3ee', '#7c3aed', '#f472b6', '#facc15', '#34d399', '#f87171'
                        ][i % 6],
                        animationDelay: `${Math.random() * 2}s`,
                        animationDuration: `${1.5 + Math.random()}s`,
                        opacity: 0.7
                      }}
                    />
                  ))}
                </div>
                <div className="p-3 space-y-2 relative z-30">
                  <button 
                    onClick={() => {
                      window.location.href = '/';
                      toggleMobileMenu();
                    }}
                    className="w-full min-h-[48px] text-left px-4 py-3 text-cyan-300 hover:text-white hover:bg-cyan-400/10 rounded-lg transition-colors cursor-pointer gaming-item text-base"
                  >
                     🏠 Home
                  </button>
                  <button 
                    onClick={() => {
                      window.location.href = '/story';
                      toggleMobileMenu();
                    }}
                    className="w-full min-h-[48px] text-left px-4 py-3 text-purple-300 hover:text-white hover:bg-purple-400/10 rounded-lg transition-colors cursor-pointer gaming-item text-base"
                  >
                    📖 Story Mode
                  </button>
                  <button 
                    onClick={() => {
                      window.location.href = '/arena';
                      toggleMobileMenu();
                    }}
                    className="w-full min-h-[48px] text-left px-4 py-3 text-red-300 hover:text-white hover:bg-red-400/10 rounded-lg transition-colors cursor-pointer gaming-item text-base"
                  >
                    ⚔️ Code Arena
                  </button>
                  {isLoggedIn && (
                    <button 
                      onClick={() => {
                        window.location.href = '/profile';
                        toggleMobileMenu();
                      }}
                      className="w-full min-h-[48px] text-left px-4 py-3 text-green-300 hover:text-white hover:bg-green-400/10 rounded-lg transition-colors cursor-pointer gaming-item text-base"
                    >
                      📊 Progress
                    </button>
                  )}
                  {isLoggedIn ? (
                    <button 
                      onClick={() => {
                        handleLogout();
                        toggleMobileMenu();
                      }}
                      className="w-full min-h-[48px] text-left px-4 py-3 text-orange-300 hover:text-white hover:bg-orange-400/10 rounded-lg transition-colors cursor-pointer gaming-item text-base"
                    >
                      🚪 Logout
                    </button>
                  ) : (
                    <button 
                      onClick={() => {
                        window.location.href = '/login';
                        toggleMobileMenu();
                      }}
                      className="w-full min-h-[48px] text-left px-4 py-3 text-blue-300 hover:text-white hover:bg-blue-400/10 rounded-lg transition-colors cursor-pointer gaming-item text-base"
                    >
                      🔑 Login
                    </button>
                  )}
                </div>
              </div>
            </PortalDropdown>
          )}
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-200"
          onClick={toggleMobileMenu}
        />
      )}

      {/* Subtle animated background effect for Navbar (no full-width/fixed/absolute div) */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 opacity-80 pointer-events-none z-0" style={{borderRadius: 'inherit'}} />

      {/* Add a subtle animated gradient bar below the Navbar for gaming effect */}
      {/* (REMOVED: <div className="absolute left-0 right-0 bottom-0 h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-navbar-bar" style={{zIndex: 9}} />) */}
      <style>{`
        @keyframes navbar-bar {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-navbar-bar {
          background-size: 200% 200%;
          animation: navbar-bar 8s ease-in-out infinite;
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
