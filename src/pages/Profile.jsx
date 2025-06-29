import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const [xp, setXp] = useState(0);
  const [level, setLevel] = useState(1);
  const [username, setUsername] = useState(() => localStorage.getItem("username") || "");
  const [particles, setParticles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedXp = Number(localStorage.getItem("xp")) || 0;
    const calculatedLevel = Math.floor(storedXp / 10) + 1;

    setXp(storedXp);
    setLevel(calculatedLevel);

    // Particle animation effect
    const interval = setInterval(() => {
      setParticles(prev => {
        const newParticles = prev.filter(p => p.y > -10);
        if (Math.random() < 0.3) {
          newParticles.push({
            id: Date.now() + Math.random(),
            x: Math.random() * window.innerWidth,
            y: window.innerHeight + 10,
            speed: 1 + Math.random() * 3,
            size: 1 + Math.random() * 4,
            color: ['#00ff00', '#00ffff', '#ff00ff', '#ffff00', '#ff4500'][Math.floor(Math.random() * 5)]
          });
        }
        return newParticles.map(p => ({ ...p, y: p.y - p.speed }));
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  const getAvatar = () => {
    if (level >= 10) return "🧙 Master Coder";
    if (level >= 7) return "🛡️ Code Knight";
    if (level >= 4) return "🧠 Bug Hunter";
    return "👶 Newbie";
  };

  const getProgressToNextLevel = () => {
    const xpForCurrentLevel = (level - 1) * 10;
    const xpForNextLevel = level * 10;
    const progress = ((xp - xpForCurrentLevel) / (xpForNextLevel - xpForCurrentLevel)) * 100;
    return Math.min(100, Math.max(0, progress));
  };

  const handleUsernameChange = (e) => {
    const newUsername = e.target.value;
    setUsername(newUsername);
    localStorage.setItem("username", newUsername);
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Enhanced Gaming Background */}
      <div className="fixed inset-0 z-0">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-purple-900 animate-pulse"></div>
        {/* Animated neon grid */}
        <div className="absolute inset-0 opacity-10 animate-profile-grid-move" style={{
          backgroundImage: `linear-gradient(rgba(34,211,238,0.10) 1px, transparent 1px),linear-gradient(90deg, rgba(124,58,237,0.10) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}></div>
        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none z-10">
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
        {/* Neon corner glows */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-cyan-400/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-400/20 rounded-full blur-2xl animate-pulse"></div>
        {/* Energy orbs */}
        <div className="absolute top-20 right-20 w-4 h-4 bg-green-400 rounded-full animate-ping shadow-lg shadow-green-400/50" />
        <div className="absolute top-40 right-40 w-3 h-3 bg-cyan-400 rounded-full animate-pulse shadow-lg shadow-cyan-400/50" />
        <div className="absolute bottom-20 left-20 w-5 h-5 bg-pink-400 rounded-full animate-bounce shadow-lg shadow-pink-400/50" />
        <div className="absolute bottom-40 left-40 w-2 h-2 bg-yellow-400 rounded-full animate-pulse shadow-lg shadow-yellow-400/50" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4 sm:p-6">
        {/* Header Section */}
        <div className="text-center mb-6 sm:mb-8 mt-4 sm:mt-8">
          <div className="inline-block p-4 sm:p-6 bg-gradient-to-r from-gray-900/90 to-black/90 rounded-xl sm:rounded-2xl border-2 border-cyan-500/50 backdrop-blur-sm shadow-2xl mb-4 sm:mb-6 relative overflow-hidden pt-8 sm:pt-0">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-blue-500/20 rounded-xl sm:rounded-2xl blur animate-pulse"></div>
            <div className="relative z-10">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 bg-clip-text text-transparent mb-2 drop-shadow-lg">
                👤 Player Profile
              </h1>
              <div className="text-xs sm:text-sm text-cyan-300 font-medium tracking-wider">Digital Hero Stats</div>
            </div>
          </div>
        </div>

        {/* Profile Card */}
        <div className="w-full max-w-md sm:max-w-lg mx-auto">
          <div className="backdrop-blur-md bg-gray-900/40 border-2 border-cyan-500/30 rounded-xl sm:rounded-2xl shadow-2xl shadow-cyan-500/20 p-4 sm:p-6 relative overflow-hidden">
            {/* Animated border glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-blue-400/20 rounded-xl sm:rounded-2xl blur-xl animate-pulse"></div>
            
            {/* Corner accents */}
            <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-cyan-400 opacity-60 animate-pulse"></div>
            <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-purple-400 opacity-60 animate-pulse"></div>
            <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-blue-400 opacity-60 animate-pulse"></div>
            <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-green-400 opacity-60 animate-pulse"></div>

            <div className="relative z-10">
              {/* Username Section */}
              <div className="mb-6">
                <label className="block text-cyan-300 text-sm sm:text-base font-semibold mb-2">
                  🎮 Hero Name
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={handleUsernameChange}
                  placeholder="Enter your legendary name..."
                  className="w-full p-3 sm:p-4 rounded-lg sm:rounded-xl bg-gray-800/80 border border-cyan-600 text-white placeholder-cyan-300/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm shadow-lg shadow-cyan-500/20 text-sm sm:text-base"
                />
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gradient-to-br from-green-600/20 to-green-700/20 p-3 sm:p-4 rounded-lg border border-green-400/30 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400/0 via-green-400/10 to-green-400/0 animate-pulse"></div>
                  <div className="relative z-10">
                    <div className="text-xs sm:text-sm text-green-300 font-medium">Level</div>
                    <div className="text-lg sm:text-xl font-bold text-green-400">{level}</div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-yellow-600/20 to-yellow-700/20 p-3 sm:p-4 rounded-lg border border-yellow-400/30 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 via-yellow-400/10 to-yellow-400/0 animate-pulse"></div>
                  <div className="relative z-10">
                    <div className="text-xs sm:text-sm text-yellow-300 font-medium">XP</div>
                    <div className="text-lg sm:text-xl font-bold text-yellow-400">{xp}</div>
                  </div>
                </div>
              </div>

              {/* Avatar Section */}
              <div className="text-center mb-6">
                <div className="text-6xl sm:text-7xl mb-3 animate-bounce">{getAvatar().split(" ")[0]}</div>
                <div className="text-lg sm:text-xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {getAvatar().split(" ").slice(1).join(" ")}
                </div>
                <div className="text-xs sm:text-sm text-gray-400 mt-2">
                  {level >= 10 ? "Legendary Status Achieved!" : 
                   level >= 7 ? "Veteran Coder Status!" : 
                   level >= 4 ? "Intermediate Level!" : "Beginner's Journey!"}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8">
          <button
            onClick={() => navigate("/")}
            className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-500 hover:to-cyan-600 rounded-lg sm:rounded-xl font-semibold text-white shadow-lg transition-all duration-300 transform hover:scale-110 border-2 border-cyan-400/50 overflow-hidden text-sm sm:text-base"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-lg sm:rounded-xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 to-cyan-600/0 group-hover:from-cyan-400/20 group-hover:to-cyan-600/20 rounded-lg sm:rounded-xl transition-all duration-300"></div>
            <span className="relative">Back to Home</span>
          </button>

          <button
            onClick={() => navigate("/story")}
            className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 rounded-lg sm:rounded-xl font-semibold text-white shadow-lg transition-all duration-300 transform hover:scale-110 border-2 border-purple-400/50 overflow-hidden text-sm sm:text-base"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg sm:rounded-xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/0 to-purple-600/0 group-hover:from-purple-400/20 group-hover:to-purple-600/20 rounded-lg sm:rounded-xl transition-all duration-300"></div>
            <span className="relative">Continue Story</span>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes profile-grid-move {
          0% { background-position: 0 0, 0 0; }
          100% { background-position: 48px 48px, 48px 48px; }
        }
        .animate-profile-grid-move { animation: profile-grid-move 20s linear infinite; }
      `}</style>
    </div>
  );
} 