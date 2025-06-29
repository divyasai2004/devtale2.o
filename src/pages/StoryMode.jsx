import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

const username = localStorage.getItem("username") || "Hero";

const scenes = [
  {
    id: 1,
    character: "Bugsy the Debugger 🐞",
    dialogue: "The world of Devoria is broken by logic bugs.",
    choices: [
      { text: "I'm ready to fix them!", nextScene: 2 },
      { text: "Aiyyo... I don't know JS", nextScene: 2 },
    ],
  },
  {
    id: 2,
    character: "Bugsy",
    dialogue: "Your first task: fix the loop that skips even numbers!",
    codeChallenge: {
      question: "Print only even numbers from 1 to 10.",
      hint: "Use % operator to check even numbers.",
      expectedOutput: "2\n4\n6\n8\n10",
      xpReward: 10,
    },
    nextScene: 3,
  },
  {
    id: 3,
    character: "Bugsy",
    dialogue: "Well done! Now loop in reverse: 10 to 1.",
    codeChallenge: {
      question: "Print numbers from 10 down to 1.",
      hint: "Use a for loop with i--.",
      expectedOutput: "10\n9\n8\n7\n6\n5\n4\n3\n2\n1",
      xpReward: 10,
    },
    nextScene: 4,
  },
  {
    id: 4,
    character: "Bugsy",
    dialogue: "You're leveling up fast! Now use a conditional inside a loop.",
    codeChallenge: {
      question: "Print numbers from 1 to 20, skipping multiples of 3.",
      hint: "Use `if (i % 3 !== 0)` to skip.",
      expectedOutput: "1\n2\n4\n5\n7\n8\n10\n11\n13\n14\n16\n17\n19\n20",
      xpReward: 10,
    },
    nextScene: 5,
  },
  {
    id: 5,
    character: "Bugsy",
    dialogue: "Let's test your math: sum from 1 to 5.",
    codeChallenge: {
      question: "Print the sum of numbers from 1 to 5.",
      hint: "Use a loop to add numbers.",
      expectedOutput: "15",
      xpReward: 10,
    },
    nextScene: 6,
  },
  {
    id: 6,
    character: "Bugsy",
    dialogue: "Try string logic: reverse 'hello'.",
    codeChallenge: {
      question: "Print reverse of 'hello'.",
      hint: "Use string methods.",
      expectedOutput: "olleh",
      xpReward: 10,
    },
    nextScene: 7,
  },
  {
    id: 7,
    character: "Bugsy",
    dialogue: "Print first 5 square numbers.",
    codeChallenge: {
      question: "Print: 1, 4, 9, 16, 25.",
      hint: "Use i * i in a loop.",
      expectedOutput: "1\n4\n9\n16\n25",
      xpReward: 10,
    },
    nextScene: 8,
  },
  {
    id: 8,
    character: "Bugsy",
    dialogue: "Now print odd numbers from 1 to 10.",
    codeChallenge: {
      question: "Print: 1, 3, 5, 7, 9.",
      hint: "Check i % 2 !== 0",
      expectedOutput: "1\n3\n5\n7\n9",
      xpReward: 10,
    },
    nextScene: 9,
  },
  {
    id: 9,
    character: "Bugsy",
    dialogue: "Filter numbers: print only > 5 from array [3, 6, 9, 2, 7]",
    codeChallenge: {
      question: "Expected Output: 6, 9, 7",
      hint: "Use if (num > 5)",
      expectedOutput: "6\n9\n7",
      xpReward: 10,
    },
    nextScene: 10,
  },
  {
    id: 10,
    character: "Bugsy",
    dialogue: "Final Task! Print first 5 even numbers.",
    codeChallenge: {
      question: "Print: 2, 4, 6, 8, 10.",
      hint: "Use loop with even condition.",
      expectedOutput: "2\n4\n6\n8\n10",
      xpReward: 10,
    },
    nextScene: 11,
  },
  {
    id: 11,
    character: "Bugsy",
    dialogue: "🎉 Ultimate Challenge! You're almost there!",
    codeChallenge: {
      question: "Print the sum of first 5 Fibonacci numbers (1, 1, 2, 3, 5).",
      hint: "Calculate 1 + 1 + 2 + 3 + 5",
      expectedOutput: "12",
      xpReward: 10,
    },
  },
];

export default function StoryMode() {
  const [xp, setXp] = useState(() => Number(localStorage.getItem("xp")) || 0);
  const [level, setLevel] = useState(() => Number(localStorage.getItem("level")) || 1);
  const [currentSceneId, setCurrentSceneId] = useState(() => Number(localStorage.getItem("sceneId")) || 1);
  const [code, setCode] = useState("// Write your code here...");
  const [output, setOutput] = useState("");
  const [message, setMessage] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);
  const [showLevelUp, setShowLevelUp] = useState(false);

  const currentScene = scenes.find((scene) => scene.id === currentSceneId);

  useEffect(() => {
    localStorage.setItem("xp", xp);
    localStorage.setItem("level", level);
    localStorage.setItem("sceneId", currentSceneId);
  }, [xp, level, currentSceneId]);

  const calculateLevel = (xp) => Math.floor(xp / 10) + 1;
  
  const runCode = () => {
    console.log('=== RUN CODE DEBUG ===');
    console.log('Current XP:', xp);
    console.log('Current Level:', level);
    console.log('Current Scene ID:', currentSceneId);
    console.log('Current Scene:', currentScene);
    console.log('Code Challenge:', currentScene?.codeChallenge);
    console.log('Expected Output:', currentScene?.codeChallenge?.expectedOutput);
    
    setIsAnimating(true);
    try {
      const log = [];
      const originalLog = console.log;
      console.log = (...args) => log.push(args.join(" "));

      eval(code);

      console.log = originalLog;
      const result = log.join("\n");
      setOutput(result);
      
      console.log('Code Result:', result);
      console.log('Expected Result:', currentScene.codeChallenge?.expectedOutput);

      if (currentScene.codeChallenge?.expectedOutput) {
        if (result.trim() === currentScene.codeChallenge.expectedOutput.trim()) {
          console.log('✅ CORRECT ANSWER!');
          const earnedXp = currentScene.codeChallenge.xpReward;
          const newXp = xp + earnedXp;
          const newLevel = calculateLevel(newXp);
          const levelUp = newLevel > level;

          console.log('Earned XP:', earnedXp);
          console.log('New XP:', newXp);
          console.log('New Level:', newLevel);
          console.log('Level Up:', levelUp);

          setXp(newXp);
          setLevel(newLevel);
          
          if (levelUp) {
            setShowLevelUp(true);
            setTimeout(() => setShowLevelUp(false), 2000);
          }
          
          setMessage(`✅ Success! You earned ${earnedXp} XP! Level ${newLevel} reached!`);

          // Mark this challenge as completed
          scenes[currentSceneId - 1].codeChallenge.expectedOutput = null;

          setTimeout(() => {
            if (currentScene.nextScene) {
              setCurrentSceneId(currentScene.nextScene);
              setMessage("");
              setCode("// Write your code here...");
              setOutput("");
            } else {
              setMessage("🎉 Congratulations! You've completed all levels!🎉");
            }
            setIsAnimating(false);
          }, 1500);
        } else {
          console.log('❌ WRONG ANSWER!');
          // Wrong answer - give XP penalty
          const penaltyXp = 1; // Lose 1 XP for wrong answer
          const newXp = Math.max(0, xp - penaltyXp); // Don't go below 0 XP
          const newLevel = calculateLevel(newXp);
          
          console.log('Penalty XP:', penaltyXp);
          console.log('New XP after penalty:', newXp);
          
          setXp(newXp);
          setLevel(newLevel);
          
          setMessage(`❌ Try again! Output isn't quite right. You lost ${penaltyXp} XP.`);
          setTimeout(() => setIsAnimating(false), 500);
        }
      } else {
        console.log('Challenge already completed');
        // Challenge already completed - just show the result
        setMessage("✅ Challenge completed! Try the next one.");
        setTimeout(() => setIsAnimating(false), 500);
      }
    } catch (err) {
      console.log('❌ CODE ERROR!');
      // Code error - give XP penalty
      const penaltyXp = 1; // Lose 1 XP for code error
      const newXp = Math.max(0, xp - penaltyXp); // Don't go below 0 XP
      const newLevel = calculateLevel(newXp);
      
      console.log('Penalty XP for error:', penaltyXp);
      console.log('New XP after error penalty:', newXp);
      
      setXp(newXp);
      setLevel(newLevel);
      
      setOutput("❌ Error: " + err.message);
      setMessage(`⚠️ Code Error! Try fixing it. You lost ${penaltyXp} XP.`);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const restartGame = () => {
    localStorage.clear();
    setXp(0);
    setLevel(1);
    setCurrentSceneId(1);
    setCode("// Write your code here...");
    setMessage("");
    setOutput("");
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-auto relative">
      {/* Enhanced Animated Gaming Background */}
      <div className="fixed inset-0 z-0">
        {/* Floating Code Symbols */}
        <div className="absolute inset-0 opacity-15">
          {[...Array(40)].map((_, i) => (
            <div
              key={`code-${i}`}
              className="absolute text-green-400 text-lg font-mono animate-pulse select-none"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${4 + Math.random() * 6}s`,
                transform: `rotate(${Math.random() * 360}deg)`
              }}
            >
              {['{}', '()', '[]', '++', '--', '===', '!==', '=>', '&&', '||', 'if', 'for', 'let', 'const', 'var', 'true', 'false'][Math.floor(Math.random() * 17)]}
            </div>
          ))}
        </div>

        {/* Matrix-style Digital Rain */}
        <div className="absolute inset-0 opacity-8">
          {[...Array(30)].map((_, i) => (
            <div
              key={`matrix-${i}`}
              className="absolute text-green-300 text-sm font-mono animate-bounce select-none"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${2 + Math.random() * 4}s`
              }}
            >
              {['if', 'else', '=='][Math.floor(Math.random() * 6)]}

            </div>
          ))}
        </div>
        
        {/* Animated Geometric Shapes */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={`shape-${i}`}
              className="absolute border border-blue-400/20 animate-spin"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${20 + Math.random() * 60}px`,
                height: `${20 + Math.random() * 60}px`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${8 + Math.random() * 12}s`,
                borderRadius: Math.random() > 0.5 ? '50%' : '0%'
              }}
            />
          ))}
        </div>

        

        {/* Glowing Particles */}
        {/* <div className="absolute inset-0">
          {[...Array(25)].map((_, i) => (
            <div
              key={`particle-${i}`}
              className="absolute w-2 h-2 bg-gradient-to-r from-green-400 to-blue-400 rounded-full animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div> */}
        
        {/* Enhanced Animated Grid */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/5 via-transparent to-blue-900/5">
          <div className="absolute inset-0" 
               style={{
                 backgroundImage: `
                   linear-gradient(rgba(255, 0, 60, 0.17) 1px, transparent 1px),
                   linear-gradient(90deg, rgba(0, 255, 0, 0.11) 1px, transparent 1px),
                   linear-gradient(rgba(0, 100, 255, 0.04) 1px, transparent 1px),
                   linear-gradient(90deg, rgba(0, 100, 255, 0.04) 1px, transparent 1px)
                 `,
                 backgroundSize: '50px 50px, 50px 50px, 100px 100px, 100px 100px',
                 animation: 'gridMove 20s linear infinite, gridPulse 8s ease-in-out infinite'
               }}>
          </div>
        </div>
        
        {/* Enhanced Pulsing Corner Lights */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-green-500/25 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/25 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-500/25 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-red-500/25 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
        
        {/* Multiple Scanning Lines */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-green-400/60 to-transparent"
               style={{
                 top: '25%',
                 animation: 'scanLine 6s ease-in-out infinite'
               }}>
          </div>
          <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"
               style={{
                 top: '75%',
                 animation: 'scanLine 8s ease-in-out infinite',
                 animationDelay: '2s'
               }}>
          </div>
        </div>

        {/* Radar Sweep Effect */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-green-500/20 rounded-full animate-ping" style={{animationDuration: '4s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-blue-500/20 rounded-full animate-ping" style={{animationDuration: '6s', animationDelay: '1s'}}></div>

        {/* Hexagonal Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='none' fill-rule='evenodd'%3e%3cg fill='%2300ff00' fill-opacity='0.4'%3e%3cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e")`,
            animation: 'hexMove 15s linear infinite'
          }}></div>
        </div>

        {/* Data Stream Lines */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={`stream-${i}`}
              className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"
              style={{
                top: `${10 + i * 12}%`,
                left: '0%',
                right: '0%',
                animation: `dataStream ${6 + Math.random() * 4}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Enhanced Custom CSS animations */}
      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        @keyframes gridPulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        
        @keyframes scanLine {
          0%, 100% { 
            opacity: 0; 
            transform: translateY(0); 
          }
          50% { 
            opacity: 1; 
            transform: translateY(50vh); 
          }
        }
        
        @keyframes dataStream {
          0% { 
            transform: translateX(-100%); 
            opacity: 0; 
          }
          50% { 
            opacity: 1; 
          }
          100% { 
            transform: translateX(100%); 
            opacity: 0; 
          }
        }
        
        @keyframes hexMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(60px, 60px); }
        }
        
        @keyframes glitch {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
        }
        
        @keyframes levelUp {
          0% { transform: scale(1) rotate(0deg); }
          50% { transform: scale(1.2) rotate(180deg); }
          100% { transform: scale(1) rotate(360deg); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(221, 234, 239, 0.3); }
          //  50% { box-shadow: 0 0 40px rgba(196, 18, 181, 0.98); }
        }
        
        .glitch-effect {
          animation: glitch 0.3s ease-in-out infinite;
        }
        
        .level-up-animation {
          animation: levelUp 0.8s ease-in-out;
        }
        
        .float-animation {
          animation: float 3s ease-in-out infinite;
        }
        
        .glow-effect {
          animation: glow 2s ease-in-out infinite;
        }
      `}</style>

      <div className="relative z-10 flex flex-col items-center justify-center px-6 py-10 min-h-screen">
        {/* Level Up Animation Overlay */}
        {showLevelUp && (
          <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
            <div className="bg-gradient-to-r from-green-500/90 via-blue-500/90 to-purple-500/90 rounded-3xl p-8 text-center animate-bounce">
              <div className="text-6xl mb-4">🎉</div>
              <div className="text-3xl font-bold text-white mb-2">LEVEL UP!</div>
              <div className="text-xl text-white">You reached Level {level}!</div>
            </div>
          </div>
        )}

        {/* Header Section with Gaming Effects */}
        <div className="text-center mb-8 animate-fade-in">
          <div className={`inline-block p-6 bg-gradient-to-r from-gray-900/90 to-black/90 rounded-2xl border-2 border-green-500/50 backdrop-blur-sm shadow-2xl mb-6 relative overflow-hidden float-animation ${isAnimating ? 'glitch-effect' : ''}`}>
            {/* Animated border glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-blue-500/20 to-purple-500/20 rounded-2xl blur animate-pulse"></div>
            <div className="relative z-10">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-2 drop-shadow-lg">
                {currentScene?.character}
              </h2>
              <div className="text-sm text-green-300 font-medium tracking-wider">welcomes {username}!</div>
            </div>
          </div>
          
          <div className="max-w-2xl mx-auto p-6 bg-gradient-to-br from-gray-900/80 to-black/80 rounded-xl border border-green-500/30 backdrop-blur-sm shadow-xl relative overflow-hidden glow-effect">
            <div className="absolute inset-0 bg-gradient-to-r from-green-900/10 to-blue-900/10 animate-pulse"></div>
            <p className="text-lg leading-relaxed text-gray-200 relative z-10">{currentScene?.dialogue}</p>
          </div>
        </div>

        {/* Choice Buttons with Gaming Hover Effects */}
        {currentScene?.choices && (
          <div className="flex flex-wrap gap-4 mb-8">
            {currentScene.choices.map((choice, index) => (
              <button
                key={index}
                onClick={() => setCurrentSceneId(choice.nextScene)}
                className="group relative px-8 py-4 bg-gradient-to-r from-gray-900 to-black hover:from-green-600 hover:to-green-700 rounded-xl font-semibold text-white shadow-lg transition-all duration-300 transform hover:scale-110 border-2 border-green-500/50 hover:border-green-400 overflow-hidden float-animation"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-400/0 to-green-600/0 group-hover:from-green-400/20 group-hover:to-green-600/20 transition-all duration-300"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-green-400/50 to-blue-400/50 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative">{choice.text}</span>
              </button>
            ))}
          </div>
        )}

        {/* Code Challenge Section with Enhanced Gaming UI */}
        {currentScene?.codeChallenge && (
          <div className="w-full max-w-4xl mx-auto">
            {/* Progress Bar Section with Gaming Effects */}
            <div className="bg-gradient-to-r from-gray-900/90 to-black/90 p-6 rounded-t-2xl overflow-hidden ">
              <div className="absolute inset-0 bg-gradient-to-r from-green-900/10 via-blue-900/10 to-purple-900/10 animate-pulse"></div>
              <div className="relative z-10">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-4">
                    <div className={`px-4 py-2 bg-gradient-to-r from-green-600/80 to-green-700/80 rounded-lg border-2 border-green-400/50 shadow-lg `}>
                      <span className="text-green-300 font-bold text-lg drop-shadow">Level {level}</span>
                    </div>
                    <div className="text-green-300 text-sm font-mono">XP: {xp} / 100</div>
                  </div>
                  <div className="px-4 py-2 bg-gradient-to-r from-blue-600/80 to-purple-600/80 rounded-lg border-2 border-blue-400/50 shadow-lg ">
                    <span className="text-blue-300 font-medium">Scene {currentSceneId}/11</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Challenge Content with Gaming Theme */}
            <div className="bg-gradient-to-br from-gray-900/95 to-black/95 p-6 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-900/5 via-blue-900/5 to-purple-900/5"></div>
              <div className="relative z-10">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent drop-shadow-lg ">
                    🧠 Bugsy left a clue... and a JS challenge.
                  </h3>
                  <div className="p-4 bg-gradient-to-r from-blue-900/40 to-purple-900/40 rounded-lg border-2 border-blue-500/30 mb-4 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/5 to-purple-400/5 animate-pulse"></div>
                    <p className="text-lg text-blue-200 relative z-10">{currentScene.codeChallenge.question}</p>
                  </div>
                  <div className="p-3 bg-gradient-to-r from-yellow-900/40 to-orange-900/40 rounded-lg border-2 border-yellow-500/30 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-orange-400/5 animate-pulse"></div>
                    <p className="text-sm text-yellow-200 relative z-10">💡 Hint: {currentScene.codeChallenge.hint}</p>
                  </div>
                </div>

                {/* Message Display with Enhanced Animation */}
                {message && (
                  <div className={`mb-6 p-4 rounded-lg border-2 backdrop-blur-sm relative overflow-hidden animate-bounce ${
                    message.startsWith("✅") 
                      ? "bg-gradient-to-r from-green-900/60 to-green-800/60 border-green-400/50 text-green-200" 
                      : message.startsWith("🎉")
                      ? "bg-gradient-to-r from-purple-900/60 to-pink-900/60 border-purple-400/50 text-purple-200"
                      : "bg-gradient-to-r from-red-900/60 to-red-800/60 border-red-400/50 text-red-200"
                  }`}>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent animate-pulse"></div>
                    <p className="font-medium text-center relative z-10 drop-shadow">{message}</p>
                  </div>
                )}

                {/* Code Editor with Gaming Border */}
                <div className="mb-6">
                  <div className="bg-black/80 rounded-lg border-2 border-white-500/50 overflow-hidden shadow-2xl relative glow-effect">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-500/5"></div>
                    <div className="bg-gradient-to-r from-gray-900 to-black px-4 py-2 border-b-2 border-green-500/30 relative">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                        <span className="ml-4 text-sm text-green-400 font-mono">Code Editor</span>
                      </div>
                    </div>
                    <CodeMirror
                      value={code}
                      height="200px"
                      extensions={[javascript()]}
                      theme="dark"
                      onChange={(val) => setCode(val)}
                    />
                  </div>
                </div>

                {/* Run Button with Gaming Effects */}
                <div className="flex justify-center mb-6">
                  <button
                    className={`group relative px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 rounded-xl font-bold text-white shadow-lg transition-all duration-300 transform hover:scale-110 border-2 border-green-400/50 overflow-hidden ${isAnimating ? 'animate-pulse' : ''}`}
                    onClick={runCode}
                    disabled={isAnimating}
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-blue-400 rounded-xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400/0 to-green-600/0 group-hover:from-green-400/20 group-hover:to-green-600/20 rounded-xl transition-all duration-300"></div>
                    <span className="relative"> {isAnimating ? 'Processing...' : 'Run Code'}</span>
                  </button>
                </div>

                {/* Output Display with Gaming Terminal Look */}
                <div className="bg-black/90 rounded-lg border-2 border-green-500/50 overflow-hidden shadow-inner relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-900/10 to-blue-900/10"></div>
                  <div className="bg-gradient-to-r from-gray-900 to-black px-4 py-2 border-b-2 border-green-500/30 relative">
                    <span className="text-sm text-green-400 font-mono">Output Terminal</span>
                  </div>
                  <pre className="p-4 text-green-300 whitespace-pre-wrap font-mono min-h-[100px] bg-gradient-to-br from-gray-900/20 to-black/50 relative">
                    {output || "// Output will appear here..."}
                    <span className="animate-pulse">_</span>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Continue Button with Gaming Style */}
        {currentScene?.nextScene && !currentScene?.choices && (
          <div className="mt-8">
            <button
              onClick={() => setCurrentSceneId(currentScene.nextScene)}
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 rounded-xl font-semibold text-white shadow-lg transition-all duration-300 transform hover:scale-110 border-2 border-blue-400/50 overflow-hidden"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 to-blue-600/0 group-hover:from-blue-400/20 group-hover:to-blue-600/20 rounded-xl transition-all duration-300"></div>
              <span className="relative">Continue →</span>
            </button>
          </div>
        )}

        {/* Navigation Buttons with Enhanced Gaming Effects */}
        <div className="flex flex-wrap gap-6 mt-8 justify-center">
  {/* Restart Game Button (Red) */}
  <button
    onClick={restartGame}
    className="group relative px-8 py-4 bg-gray-900 rounded-xl font-bold text-white shadow-xl transition-all duration-300 transform hover:scale-110
               border-2 border-red-600 hover:border-red-400
               active:translate-y-1 active:shadow-none
               overflow-hidden"
  >
    {/* Inner glow effect */}
    <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-500 opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
    {/* Outer pulse glow */}
    <div className="absolute -inset-1 bg-red-500 blur-md opacity-0 group-hover:opacity-75 transition-opacity duration-300 animate-pulse-red"></div>
    <span className="relative z-10 text-lg tracking-wider uppercase text-shadow-glow-red">
      Restart 
    </span>
  </button>

  {/* Go to Homepage Button (Indigo) */}
  <button
    onClick={() => window.location.href = "/"}
    className="group relative px-8 py-4 bg-gray-900 rounded-xl font-bold text-white shadow-xl transition-all duration-300 transform hover:scale-110
               border-2 border-indigo-600 hover:border-indigo-400
               active:translate-y-1 active:shadow-none
               overflow-hidden"
  >
    {/* Inner glow effect */}
    <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-500 opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
    {/* Outer pulse glow */}
    <div className="absolute -inset-1 bg-indigo-500 blur-md opacity-0 group-hover:opacity-75 transition-opacity duration-300 animate-pulse-indigo"></div>
    <span className="relative z-10 text-lg tracking-wider uppercase text-shadow-glow-indigo">
      🏠︎ 
    </span>
  </button>

  {/* View Progress Link (Purple) */}
  <Link
    to="/profile"
    className="group relative px-8 py-4 bg-gray-900 rounded-xl font-bold text-white shadow-xl transition-all duration-300 transform hover:scale-110
               border-2 border-purple-600 hover:border-purple-400
               active:translate-y-1 active:shadow-none
               overflow-hidden inline-block"
  >
    {/* Inner glow effect */}
    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
    {/* Outer pulse glow */}
    <div className="absolute -inset-1 bg-purple-500 blur-md opacity-0 group-hover:opacity-75 transition-opacity duration-300 animate-pulse-purple"></div>
    <span className="relative z-10 text-lg tracking-wider uppercase text-shadow-glow-purple">
      Progress
    </span>
  </Link>

  
</div>
      </div>
    </div>
  );
}