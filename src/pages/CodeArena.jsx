import React, { useState, useEffect } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import codeArenaQuestions from "../data/codeArenaQuestions";

export default function CodeArena() {
  const [selectedId, setSelectedId] = useState(1);
  const currentProblem = codeArenaQuestions.find((q) => q.id === selectedId);
  const [code, setCode] = useState("// Write your code here...");
  const [output, setOutput] = useState("");
  const [message, setMessage] = useState("");
  const [glowEffect, setGlowEffect] = useState(false);
  const [particles, setParticles] = useState([]);
  const [fireParticles, setFireParticles] = useState([]);
  const [isRunning, setIsRunning] = useState(false);

  // Enhanced particle animation effect - Reduced on mobile
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
            size: 2 + Math.random() * 4,
            color: ['#ff4500', '#ff6347', '#ff8c00', '#ffa500', '#ffd700'][Math.floor(Math.random() * 5)]
          });
        }
        return newParticles.map(p => ({ ...p, y: p.y - p.speed }));
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  // Fire particle effect - Reduced on mobile
  useEffect(() => {
    const interval = setInterval(() => {
      setFireParticles(prev => {
        const newFireParticles = prev.filter(p => p.life > 0);
        if (Math.random() < 0.6) {
          newFireParticles.push({
            id: Date.now() + Math.random(),
            x: Math.random() * window.innerWidth,
            y: window.innerHeight,
            vx: (Math.random() - 0.5) * 2,
            vy: -3 - Math.random() * 4,
            life: 100,
            size: 3 + Math.random() * 6
          });
        }
        return newFireParticles.map(p => ({
          ...p,
          x: p.x + p.vx,
          y: p.y + p.vy,
          life: p.life - 2,
          size: p.size * 0.98
        }));
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const runCode = () => {
    setIsRunning(true);
    setGlowEffect(true);
    
    setTimeout(() => setGlowEffect(false), 1000);
    
    try {
      const log = [];
      const originalLog = console.log;
      console.log = (...args) => log.push(args.join(" "));
      eval(code);
      console.log = originalLog;
      const result = log.join("\n");
      setOutput(result);

      if (result.trim() === currentProblem.expectedOutput.trim()) {
        setMessage("✅ Correct Output!");
      } else {
        setMessage("❌ Output does not match.");
      }
    } catch (err) {
      setOutput("❌ Error: " + err.message);
      setMessage("⚠️ Code Error! Try again.");
    }
    
    setTimeout(() => setIsRunning(false), 1000);
  };

  return (
    <div className="min-h-screen bg-black text-white px-2 sm:px-4 py-4 sm:py-8 relative overflow-hidden pt-16 sm:pt-8 mobile-content-padding">
      {/* Epic gaming background with fire theme */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-red-900" />
      
      {/* Animated fire particles - Hidden on mobile for performance */}
      <div className="absolute inset-0 pointer-events-none mobile-hide-decorations sm:block">
        {fireParticles.map(particle => (
          <div
            key={particle.id}
            className="absolute rounded-full animate-pulse"
            style={{
              left: `${particle.x}px`,
              top: `${particle.y}px`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              backgroundColor: `rgba(255, ${Math.floor(particle.life * 2.55)}, 0, ${particle.life / 100})`,
              boxShadow: `0 0 ${particle.size * 2}px rgba(255, ${Math.floor(particle.life * 2.55)}, 0, ${particle.life / 100})`
            }}
          />
        ))}
      </div>

      {/* Enhanced floating particles - Hidden on mobile for performance */}
      <div className="absolute inset-0 pointer-events-none mobile-hide-decorations sm:block">
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
              opacity: 0.8,
              boxShadow: `0 0 ${particle.size * 3}px ${particle.color}`
            }}
          />
        ))}
      </div>

      {/* Matrix-style code rain with fire colors - Hidden on mobile for performance */}
      <div className="absolute inset-0 pointer-events-none opacity-20 mobile-hide-decorations sm:block">
        {[...Array(30)].map((_, i) => (
          <div
            key={`matrix-${i}`}
            className="absolute text-orange-400 text-xs sm:text-sm font-mono animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
              textShadow: '0 0 10px rgba(255, 165, 0, 0.8)'
            }}
          >
            {['if', 'else', 'for', 'while', 'function', 'return', 'const', 'let', 'var', 'class', 'async', 'await'][Math.floor(Math.random() * 12)]}
          </div>
        ))}
      </div>

      {/* Animated fire border effect - Reduced on mobile */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-orange-500/20 to-yellow-500/20 animate-pulse mobile-reduce-animations" />
      
      {/* Cyberpunk grid overlay - Hidden on mobile for performance */}
      <div className="fixed inset-0 pointer-events-none opacity-10 mobile-hide-decorations sm:block">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: `
                 linear-gradient(rgba(255, 69, 0, 0.3) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(255, 69, 0, 0.3) 1px, transparent 1px)
               `,
               backgroundSize: '50px 50px',
               animation: 'gridMove 15s linear infinite'
             }}>
        </div>
      </div>

      {/* Floating energy orbs - Hidden on mobile */}
      <div className="fixed top-20 right-20 w-4 h-4 bg-orange-400 rounded-full animate-ping shadow-lg shadow-orange-400/50 mobile-hide-decorations sm:block" />
      <div className="fixed top-40 right-40 w-2 h-2 bg-red-400 rounded-full animate-pulse shadow-lg shadow-red-400/50 mobile-hide-decorations sm:block" />
      <div className="fixed bottom-20 left-20 w-3 h-3 bg-yellow-400 rounded-full animate-bounce shadow-lg shadow-yellow-400/50 mobile-hide-decorations sm:block" />
      <div className="fixed bottom-40 left-40 w-1 h-1 bg-orange-400 rounded-full animate-pulse shadow-lg shadow-orange-400/50 mobile-hide-decorations sm:block" />
      
      {/* Main content with enhanced glass morphism */}
      <div className="relative z-10">
        <div className="text-center mb-4 sm:mb-6 md:mb-8 relative z-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-4 text-orange-400 animate-pulse leading-tight" style={{textShadow: '0 2px 8px #000, 0 0 2px #ff9800'}}>
            Code Arena
          </h1>
          <div className="w-20 sm:w-24 md:w-32 lg:w-40 h-1 sm:h-2 bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 mx-auto rounded-full animate-pulse shadow-lg shadow-orange-400/50" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="backdrop-blur-md bg-gray-900/40 border border-orange-500/30 rounded-lg p-3 sm:p-4 md:p-6 mb-4 sm:mb-6 shadow-2xl shadow-orange-500/20">
            <label className="block mb-2 sm:mb-3 text-sm sm:text-base md:text-lg font-semibold text-orange-300">
               🔥Choose a Javascript Challenge:
            </label>
            <select
              value={selectedId}
              onChange={(e) => {
                setSelectedId(Number(e.target.value));
                setCode("// Write your code here...");
                setOutput("");
                setMessage("");
              }}
              className="w-full bg-gray-800/80 text-white p-2 sm:p-3 rounded-lg border border-orange-600 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/50 transition-all duration-300 backdrop-blur-sm hover:scale-105 transform shadow-lg shadow-orange-500/20 text-sm sm:text-base"
            >
              {codeArenaQuestions.map((q) => (
                <option key={q.id} value={q.id}>
                  {q.id}. {q.title}
                </option>
              ))}
            </select>
          </div>

          <div className="backdrop-blur-md bg-gray-900/50 border border-orange-500/30 rounded-lg p-3 sm:p-4 md:p-6 shadow-2xl shadow-orange-500/20 relative overflow-hidden">
            {/* Animated corner accents with fire theme - Hidden on mobile for performance */}
            <div className="absolute top-0 left-0 w-4 sm:w-8 h-4 sm:h-8 border-l-2 border-t-2 border-orange-400 rounded-tl-lg animate-pulse shadow-lg shadow-orange-400/50 mobile-hide-decorations sm:block" />
            <div className="absolute top-0 right-0 w-4 sm:w-8 h-4 sm:h-8 border-r-2 border-t-2 border-red-400 rounded-tr-lg animate-pulse shadow-lg shadow-red-400/50 mobile-hide-decorations sm:block" style={{animationDelay: '0.5s'}} />
            <div className="absolute bottom-0 left-0 w-4 sm:w-8 h-4 sm:h-8 border-l-2 border-b-2 border-yellow-400 rounded-bl-lg animate-pulse shadow-lg shadow-yellow-400/50 mobile-hide-decorations sm:block" style={{animationDelay: '1s'}} />
            <div className="absolute bottom-0 right-0 w-4 sm:w-8 h-4 sm:h-8 border-r-2 border-b-2 border-orange-400 rounded-br-lg animate-pulse shadow-lg shadow-orange-400/50 mobile-hide-decorations sm:block" style={{animationDelay: '1.5s'}} />

            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 text-transparent bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-balance">
              🧠 {currentProblem.title}
            </h2>
            
            <div className="bg-gray-800/60 p-3 sm:p-4 rounded-lg mb-3 sm:mb-4 border-l-4 border-orange-400 shadow-lg shadow-orange-500/20">
              <p className="mb-2 text-gray-200 text-sm sm:text-base text-balance">{currentProblem.question}</p>
              <p className="text-xs sm:text-sm text-orange-300">💡 Hint: {currentProblem.hint}</p>
            </div>

            {message && (
              <div className={`mb-3 sm:mb-4 p-2 sm:p-3 rounded-lg border-l-4 transition-all duration-500 ${
                message.startsWith("✅") 
                  ? "bg-green-900/30 border-green-400 text-green-300 shadow-lg shadow-green-500/20" 
                  : "bg-red-900/30 border-red-400 text-red-300 shadow-lg shadow-red-500/20"
              }`}>
                <p className="font-semibold text-sm sm:text-base">{message}</p>
              </div>
            )}

            <div className="relative">
              <CodeMirror
                value={code}
                height="200px"
                extensions={[javascript()]}
                theme="dark"
                onChange={(val) => setCode(val)}
                className="rounded-lg overflow-hidden border border-orange-600 shadow-lg shadow-orange-500/20"
                basicSetup={{
                  lineNumbers: true,
                  highlightActiveLineGutter: true,
                  highlightSpecialChars: true,
                  foldGutter: true,
                  drawSelection: true,
                  dropCursor: true,
                  allowMultipleSelections: true,
                  indentOnInput: true,
                  bracketMatching: true,
                  closeBrackets: true,
                  autocompletion: true,
                  rectangularSelection: true,
                  crosshairCursor: true,
                  highlightActiveLine: true,
                  highlightSelectionMatches: true,
                  closeBracketsKeymap: true,
                  defaultKeymap: true,
                  searchKeymap: true,
                  historyKeymap: true,
                  foldKeymap: true,
                  completionKeymap: true,
                  lintKeymap: true,
                }}
              />
              
              {/* Code editor glow effect - Reduced on mobile */}
              <div className={`absolute inset-0 rounded-lg pointer-events-none transition-all duration-1000 mobile-reduce-animations ${
                glowEffect ? 'shadow-[0_0_30px_rgba(255,165,0,0.5)]' : ''
              }`} />
            </div>

            <button
              onClick={runCode}
              disabled={isRunning}
              className={`mt-3 sm:mt-4 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg text-sm sm:text-base ${
                isRunning 
                  ? 'bg-gradient-to-r from-red-500 to-orange-500 shadow-[0_0_20px_rgba(255,69,0,0.5)] animate-pulse shadow-red-500/50' 
                  : 'bg-gradient-to-r from-orange-500 to-red-500 hover:shadow-[0_0_15px_rgba(255,165,0,0.3)] shadow-orange-500/50'
              }`}
            >
              {isRunning ? '⚔️ Running...' : ' Run Code'}
            </button>

            <div className="mt-3 sm:mt-4 bg-gray-800/80 p-3 sm:p-4 rounded-lg border border-orange-600 shadow-lg shadow-orange-500/20">
              <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-2 text-green-300"> Output:</h3>
              <pre className="text-green-300 whitespace-pre-wrap font-mono text-xs sm:text-sm bg-gray-900/50 p-2 sm:p-3 rounded border-l-2 border-green-400 shadow-lg shadow-green-500/20">
                {output || "No output yet..."}
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS animations - Optimized for mobile */}
      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        @media (max-width: 768px) {
          @keyframes gridMove {
            0% { transform: translate(0, 0); }
            100% { transform: translate(25px, 25px); }
          }
        }
      `}</style>
    </div>
  );
}
