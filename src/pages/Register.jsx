import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = () => {
    if (username.trim()) {
      localStorage.setItem("username", username.trim());
      setError("");
      navigate("/login");
    } else {
      setError("⚠️ Please enter a username to register.");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleRegister();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-black pt-24 pb-8 safe-area-top safe-area-bottom">
      {/* Animated neon/glassmorphism background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 opacity-90"></div>
        {/* Animated grid */}
        <div className="absolute inset-0 opacity-10 animate-register-grid-move" style={{
          backgroundImage: `linear-gradient(rgba(34,211,238,0.10) 1px, transparent 1px),linear-gradient(90deg, rgba(124,58,237,0.10) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}></div>
        {/* Floating particles */}
        {[...Array(10)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              background: [
                '#22d3ee', '#7c3aed', '#f472b6', '#facc15', '#34d399', '#f87171'
              ][i % 6],
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${1.5 + Math.random()}s`,
              opacity: 0.7
            }}
          />
        ))}
        {/* Neon glows in corners */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-cyan-400/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-400/20 rounded-full blur-2xl animate-pulse"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-sm mx-auto p-6 bg-black/80 border-2 border-cyan-400/30 rounded-2xl shadow-2xl backdrop-blur-md gaming-register-panel mt-4 sm:mt-8">
        <h1 className="text-3xl font-black mb-4 text-center bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse drop-shadow-lg pt-8 sm:pt-0">
          📝 Register for Algoritale
        </h1>
        <p className="text-gray-400 mb-6 text-center">Begin your coding adventure by choosing a hero name.</p>

        <input
          type="text"
          placeholder="👤 Choose a unique hero name..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={handleKeyPress}
          className="w-full p-4 min-h-[48px] mb-4 rounded-lg bg-gray-800/80 text-white border-2 border-cyan-400/20 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40 transition-all duration-300 shadow-lg shadow-cyan-400/10 gaming-input text-base sm:text-lg"
        />

        {error && <p className="text-red-400 text-sm mb-4 text-center animate-pulse">{error}</p>}

        <button
          onClick={handleRegister}
          className={`w-full p-4 min-h-[48px] rounded-lg font-bold bg-gradient-to-r from-purple-600 via-cyan-600 to-pink-600 hover:from-purple-500 hover:to-cyan-500 text-white shadow-lg shadow-cyan-400/20 border-2 border-cyan-400/30 transition-all duration-200 gaming-btn focus:outline-none focus:ring-2 focus:ring-cyan-400 ${!username.trim() && "opacity-50 cursor-not-allowed"}`}
          style={{ marginBottom: 'max(1.5rem, env(safe-area-inset-bottom, 0px))' }}
          disabled={!username.trim()}
        >
          ✅ Register
        </button>

        <p className="mt-4 text-sm text-gray-400 text-center">
          Already registered?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-cyan-400 cursor-pointer hover:underline hover:text-white transition-colors"
          >
            Login here
          </span>
        </p>
      </div>

      {/* Custom styles for gaming effect */}
      <style jsx>{`
        @keyframes register-grid-move {
          0% { background-position: 0 0, 0 0; }
          100% { background-position: 40px 40px, 40px 40px; }
        }
        .animate-register-grid-move { animation: register-grid-move 18s linear infinite; }
        .gaming-register-panel {
          box-shadow: 0 0 32px 8px #22d3ee33, 0 0 64px 16px #7c3aed22;
        }
        .gaming-input:focus {
          box-shadow: 0 0 0 2px #22d3ee, 0 0 12px 2px #7c3aed55;
          background: linear-gradient(90deg, #22d3ee22 0%, #7c3aed22 100%);
        }
        .gaming-btn:focus, .gaming-btn:hover {
          outline: none;
          box-shadow: 0 0 0 2px #22d3ee, 0 0 12px 2px #7c3aed55;
          background: linear-gradient(90deg, #22d3ee55 0%, #7c3aed55 100%);
        }
      `}</style>
    </div>
  );
}
