// src/pages/Login.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [insects, setInsects] = useState([]);
  const [particles, setParticles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedUsername = localStorage.getItem("username");
    if (savedUsername) setUsername(savedUsername);
  }, []);

  // Insect animation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setInsects(prev => {
        const newInsects = prev.filter(insect => insect.life > 0);
        if (Math.random() < 0.3) {
          newInsects.push({
            id: Date.now() + Math.random(),
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2,
            life: 100,
            rotation: Math.random() * 360,
            size: 15 + Math.random() * 20,
            type: ['🕷️'][Math.floor(Math.random() * 5)]
          });
        }
        return newInsects.map(insect => ({
          ...insect,
          x: insect.x + insect.vx,
          y: insect.y + insect.vy,
          life: insect.life - 0.5,
          rotation: insect.rotation + 3
        }));
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  // Particle animation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles(prev => {
        const newParticles = prev.filter(p => p.y > -10);
        if (Math.random() < 0.4) {
          newParticles.push({
            id: Date.now() + Math.random(),
            x: Math.random() * window.innerWidth,
            y: window.innerHeight + 10,
            speed: 1 + Math.random() * 3,
            size: 1 + Math.random() * 3,
            color: ['#00ff00', '#00ffff', '#ff00ff', '#ffff00', '#ff4500'][Math.floor(Math.random() * 5)]
          });
        }
        return newParticles.map(p => ({ ...p, y: p.y - p.speed }));
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  const handleLogin = () => {
    if (username.trim()) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("username", username.trim());
      setError("");
      navigate("/profile");
    } else {
      setError("⚠️ Please enter your name to begin your journey!");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleLogin();
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 relative overflow-hidden pt-24 pb-8 safe-area-top safe-area-bottom">
      {/* Dark gaming background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-800" />
      
      {/* Animated insects */}
      <div className="absolute inset-0 pointer-events-none">
        {insects.map(insect => (
          <div
            key={insect.id}
            className="absolute text-xl animate-pulse"
            style={{
              left: `${insect.x}px`,
              top: `${insect.y}px`,
              transform: `rotate(${insect.rotation}deg) scale(${insect.size / 20})`,
              opacity: insect.life / 100,
              filter: `hue-rotate(${insect.life * 3.6}deg) drop-shadow(0 0 5px rgba(0, 255, 0, 0.5))`
            }}
          >
            {insect.type}
          </div>
        ))}
      </div>

      {/* Enhanced floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map(particle => (
          <div
            key={particle.id}
            className="absolute rounded-full animate-pulse"
            style={{
              left: `${particle.x}px`,
              top: `${particle.y}px`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              backgroundColor: particle.color,
              opacity: 0.7,
              boxShadow: `0 0 ${particle.size * 3}px ${particle.color}`
            }}
          />
        ))}
      </div>

      {/* Matrix-style code rain */}
      <div className="absolute inset-0 pointer-events-none opacity-15">
        {[...Array(25)].map((_, i) => (
          <div
            key={`matrix-${i}`}
            className="absolute text-green-400 text-sm font-mono animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
              textShadow: '0 0 10px rgba(0, 255, 0, 0.8)'
            }}
          >
            {['if', 'else', 'for', 'while', 'function', 'return', 'const', 'let', 'var', 'class', 'async', 'await'][Math.floor(Math.random() * 12)]}
          </div>
        ))}
      </div>

      {/* Floating energy orbs */}
      <div className="fixed top-20 right-20 w-3 h-3 bg-green-400 rounded-full animate-ping shadow-lg shadow-green-400/50" />
      <div className="fixed top-40 right-40 w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-lg shadow-cyan-400/50" />
      <div className="fixed bottom-20 left-20 w-4 h-4 bg-purple-400 rounded-full animate-bounce shadow-lg shadow-purple-400/50" />
      <div className="fixed bottom-40 left-40 w-1 h-1 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50" />
      
      {/* Main content with enhanced glass morphism */}
      <div className="relative z-10 text-center">
        <div className="mb-8 mt-4 sm:mt-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-green-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-pulse pt-8 sm:pt-0">
             Welcome to Devtale
          </h1>
          <p className="text-cyan-200 mt-4 text-lg max-w-md mx-auto">
            Enter the digital realm of logic and adventure. Your hero name awaits!
          </p>
        </div>

        <div className="backdrop-blur-md bg-gray-900/40 border border-green-500/30 rounded-2xl shadow-2xl shadow-green-500/20 p-8 w-full max-w-md mx-auto relative overflow-hidden">
          {/* Animated corner accents */}
          <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-green-400 rounded-tl-2xl animate-pulse shadow-lg shadow-green-400/50" />
          <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-cyan-400 rounded-tr-2xl animate-pulse shadow-lg shadow-cyan-400/50" style={{animationDelay: '0.5s'}} />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-purple-400 rounded-bl-2xl animate-pulse shadow-lg shadow-purple-400/50" style={{animationDelay: '1s'}} />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-green-400 rounded-br-2xl animate-pulse shadow-lg shadow-green-400/50" style={{animationDelay: '1.5s'}} />
          
          <div className="relative z-10">
            <div className="mb-6">
              <label className="block text-green-300 text-sm font-semibold mb-2">
                 Your Hero Name
              </label>
              <input
                type="text"
                placeholder=" Enter name..."
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onKeyDown={handleKeyPress}
                className="w-full p-4 min-h-[48px] rounded-xl bg-gray-800/80 border border-green-600 text-white placeholder-green-300/60 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm shadow-lg shadow-green-500/20 text-base sm:text-lg"
              />
            </div>

            {error && (
              <div className="mb-4 p-3 rounded-lg bg-red-900/30 border border-red-400/30 text-red-200 text-sm shadow-lg shadow-red-500/20">
                {error}
              </div>
            )}

            <button
              onClick={handleLogin}
              className={`w-full p-4 min-h-[48px] rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg focus:outline-none focus:ring-2 focus:ring-green-400 ${
                !username.trim() 
                  ? 'bg-gray-600/50 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-white'
              }`}
              style={{ marginBottom: 'max(1.5rem, env(safe-area-inset-bottom, 0px))' }}
              disabled={!username.trim()}
            >
              Start Adventure
            </button>

            <div className="mt-6 text-center">
              <p className="text-cyan-200 text-sm">
                New to the realm?{" "}
                <span
                  onClick={() => navigate("/register")}
                  className="text-green-300 cursor-pointer hover:text-green-200 underline transition-colors duration-200"
                >
                  Register here
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS animations */}
      <style jsx>{`
        
      `}</style>
    </div>
  );
}
