/* eslint-disable no-eval */
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

const scenes = [
  {
    id: 1,
    character: "Bugsy the Debugger ",
    dialogue: "The world of Devoria is broken by logic bugs.",
    choices: [
      { text: "I'm ready to fix them!", nextScene: 2 },
      { text: "Aiyyo... I don't know JS", action: "codeArena" },
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
  const navigate = useNavigate();

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
            setTimeout(() => setShowLevelUp(false), 3000);
          }

          setMessage("✅ Correct! +" + earnedXp + " XP");
          
          // Auto-advance to next scene after 2 seconds
          setTimeout(() => {
            if (currentScene.nextScene) {
              setCurrentSceneId(currentScene.nextScene);
              setCode("// Write your code here...");
              setOutput("");
              setMessage("");
            }
          }, 2000);
        } else {
          console.log('❌ WRONG ANSWER!');
          setMessage("❌ Try again! Check your output.");
        }
      }
    } catch (err) {
      console.log('❌ CODE ERROR:', err.message);
      setOutput("❌ Error: " + err.message);
      setMessage("⚠️ Code Error! Try again.");
    }
    
    setTimeout(() => setIsAnimating(false), 1000);
  };

  const handleChoice = (choice) => {
    if (choice.action === "codeArena") {
      navigate("/arena");
    } else if (choice.nextScene) {
      setCurrentSceneId(choice.nextScene);
    }
  };

  const restartGame = () => {
    setXp(0);
    setLevel(1);
    setCurrentSceneId(1);
    setCode("// Write your code here...");
    setOutput("");
    setMessage("");
    localStorage.clear();
  };

  return (
    <div className="min-h-screen bg-black text-white px-4 py-8 relative overflow-hidden pt-28 pb-8 safe-area-top safe-area-bottom">
      {/* Dark gaming grid background */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          animation: 'gridSlide 30s linear infinite'
        }}></div>
      </div>

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 opacity-90"></div>

      {/* Animated dark circuit lines */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 left-1/4 w-px h-32 bg-gradient-to-b from-cyan-400 to-transparent animate-pulse"></div>
        <div className="absolute top-0 right-1/3 w-px h-24 bg-gradient-to-b from-purple-400 to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-0 left-1/3 w-px h-28 bg-gradient-to-t from-green-400 to-transparent animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-0 right-1/4 w-px h-20 bg-gradient-to-t from-pink-400 to-transparent animate-pulse" style={{animationDelay: '3s'}}></div>
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

      {/* Gaming HUD Elements - Top Left */}
      <div className="absolute top-4 left-4 z-20 safe-area-top">
        <div className="bg-gray-900/90 backdrop-blur-sm rounded-lg px-3 py-2 border border-cyan-400/40 shadow-lg shadow-black/50">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-sm shadow-green-400/50"></div>
            <span className="text-xs text-green-400 font-mono">ONLINE</span>
          </div>
        </div>
      </div>

      {/* Gaming HUD Elements - Top Right */}
      <div className="absolute top-4 right-4 z-20 safe-area-top">
        <div className="bg-gray-900/90 backdrop-blur-sm rounded-lg px-3 py-2 border border-purple-400/40 shadow-lg shadow-black/50">
          <span className="text-xs text-purple-400 font-mono">MISSION {currentSceneId}/11</span>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto pb-24">
        {/* Enhanced Header with Gaming Style */}
        <div className="text-center mb-8 mt-20 pt-12 sm:mt-24 sm:pt-16">
          <div className="relative inline-block">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-green-400 bg-clip-text text-transparent animate-pulse" style={{zIndex: 2, position: 'relative'}}>
               STORY MODE
            </h1>
            {/* Gaming title glow effect */}
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-green-400/20 blur-xl rounded-full -z-10 animate-pulse"></div>
            {/* Corner accents */}
            <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-cyan-400 animate-pulse"></div>
            <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-purple-400 animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-green-400 animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-pink-400 animate-pulse" style={{animationDelay: '1.5s'}}></div>
          </div>
          
          {/* Enhanced XP and Level Display */}
          <div className="flex justify-center items-center space-x-4 sm:space-x-8 mb-4">
            <div className="relative group">
              <div className="bg-gray-900/90 backdrop-blur-sm rounded-lg px-3 sm:px-4 py-2 border border-green-400/40 shadow-lg shadow-black/50 transform group-hover:scale-105 transition-transform duration-300">
                <span className="text-sm sm:text-base text-green-400 font-mono">⭐ XP: {xp}</span>
              </div>
              {/* XP bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700 rounded-b-lg overflow-hidden">
                <div className="h-full bg-gradient-to-r from-green-400 to-cyan-400 animate-pulse" style={{width: `${(xp % 10) * 10}%`}}></div>
              </div>
            </div>
            
            <div className="relative group">
              <div className="bg-gray-900/90 backdrop-blur-sm rounded-lg px-3 sm:px-4 py-2 border border-purple-400/40 shadow-lg shadow-black/50 transform group-hover:scale-105 transition-transform duration-300">
                <span className="text-sm sm:text-base text-purple-400 font-mono">🏆 LEVEL: {level}</span>
              </div>
              {/* Level indicator */}
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-purple-400 rounded-full animate-ping"></div>
            </div>
          </div>
        </div>

        {/* Enhanced Level Up Animation */}
        {showLevelUp && (
          <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
            <div className="relative">
              <div className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 text-black px-8 py-6 rounded-xl shadow-2xl animate-bounce text-center border-4 border-yellow-300">
                <h2 className="text-3xl font-bold mb-2">🎉 LEVEL UP!</h2>
                <p className="text-xl">You are now Level {level}!</p>
                <div className="mt-2 text-sm">+10 XP BONUS!</div>
              </div>
              {/* Level up particles */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-yellow-400 rounded-full animate-ping"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 2}s`,
                      animationDuration: `${1 + Math.random()}s`
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Enhanced Story Scene with Gaming UI */}
        <div className="backdrop-blur-md bg-gray-900/80 border border-cyan-400/30 rounded-xl p-6 mb-6 shadow-2xl shadow-black/50 relative overflow-hidden">
          {/* Scene header with gaming style */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-green-400 animate-pulse"></div>
          
          {/* Scene number indicator */}
          <div className="absolute top-4 right-4 bg-cyan-900/50 rounded-full w-8 h-8 flex items-center justify-center border border-cyan-400/50">
            <span className="text-xs text-cyan-400 font-mono font-bold">{currentSceneId}</span>
          </div>

          <div className="flex items-start space-x-4 mb-4 mt-2">
            <div className="relative">
              <div className="text-4xl animate-bounce">🐞</div>
              {/* Character glow */}
              <div className="absolute inset-0 text-4xl animate-ping opacity-30">🐞</div>
            </div>
            <div className="flex-1">
              <h2 className="text-xl sm:text-2xl font-bold mb-2 text-cyan-300 font-mono">
                {currentScene.character}
              </h2>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                {currentScene.dialogue}
              </p>
            </div>
          </div>

          {/* Enhanced Choices with Gaming Style */}
          {currentScene.choices && (
            <div className="space-y-3">
              {currentScene.choices.map((choice, index) => (
                <button
                  key={index}
                  onClick={() => handleChoice(choice)}
                  className="group relative w-full min-h-[48px] text-left p-4 bg-gray-800/60 hover:bg-gray-700/60 border border-cyan-400/30 rounded-lg transition-all duration-300 hover:scale-105 transform shadow-lg hover:shadow-cyan-500/20 overflow-hidden text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/10 to-cyan-400/0 transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                  <span className="relative z-10">{choice.text}</span>
                  <div className="absolute top-2 right-2 text-xs text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">▶</div>
                </button>
              ))}
            </div>
          )}

          {/* Enhanced Code Challenge with Gaming UI */}
          {currentScene.codeChallenge && (
            <div className="mt-6">
              {/* Challenge header */}
              <div className="bg-gray-800/60 p-4 rounded-lg mb-4 border-l-4 border-cyan-400 shadow-lg shadow-cyan-500/20 relative">
                <div className="absolute top-2 right-2 text-xs text-cyan-400 font-mono">CHALLENGE #{currentSceneId}</div>
                <p className="mb-2 text-gray-200 font-mono">{currentScene.codeChallenge.question}</p>
                <p className="text-sm text-cyan-300">💡 Hint: {currentScene.codeChallenge.hint}</p>
                {/* XP reward indicator */}
                <div className="absolute bottom-2 right-2 text-xs text-green-400 font-mono">+{currentScene.codeChallenge.xpReward} XP</div>
              </div>

              {/* Enhanced Message Display */}
              {message && (
                <div className={`mb-4 p-3 rounded-lg border-l-4 transition-all duration-500 relative overflow-hidden ${
                  message.startsWith("✅") 
                    ? "bg-green-900/30 border-green-400 text-green-300 shadow-lg shadow-green-500/20" 
                    : "bg-red-900/30 border-red-400 text-red-300 shadow-lg shadow-red-500/20"
                }`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 translate-x-full animate-pulse"></div>
                  <p className="font-semibold relative z-10">{message}</p>
                </div>
              )}

              {/* Enhanced Code Editor */}
              <div className="relative mb-4 overflow-x-auto rounded-lg">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 animate-pulse"></div>
                <CodeMirror
                  value={code}
                  height="200px"
                  extensions={[javascript()]}
                  theme="dark"
                  onChange={(val) => setCode(val)}
                  className="rounded-lg overflow-hidden border border-cyan-600 shadow-lg shadow-cyan-500/20"
                />
                {/* Code editor corner accents */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyan-400 rounded-tl-lg"></div>
                <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-blue-400 rounded-tr-lg"></div>
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-green-400 rounded-bl-lg"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-purple-400 rounded-br-lg"></div>
              </div>

              {/* Enhanced Run Button */}
              <button
                onClick={runCode}
                disabled={isAnimating}
                className={`group relative w-full min-h-[48px] px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg overflow-hidden text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 ${
                  isAnimating 
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 shadow-[0_0_20px_rgba(34,211,238,0.5)] animate-pulse shadow-cyan-500/50' 
                    : 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] shadow-cyan-500/50'
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/20 to-cyan-400/0 transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                <span className="relative z-10">{isAnimating ? '⚔️ Running...' : '▶ Run Code'}</span>
                <div className="absolute top-2 right-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              {/* Enhanced Output Display */}
              <div className="mt-4 bg-gray-800/80 p-4 rounded-lg border border-cyan-600 shadow-lg shadow-cyan-500/20 relative overflow-x-auto">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 to-cyan-400"></div>
                <h3 className="text-lg font-semibold mb-2 text-green-300 font-mono">OUTPUT:</h3>
                <pre className="text-green-300 whitespace-pre-wrap font-mono text-sm bg-gray-900/50 p-3 rounded border-l-2 border-green-400 shadow-lg shadow-green-500/20">
                  {output || "No output yet..."}
                </pre>
                {/* Output corner accents */}
                <div className="absolute top-2 right-2 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          )}
        </div>

        {/* Enhanced Navigation Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Link
            to="/"
            className="group relative px-6 py-3 min-h-[48px] text-base sm:text-lg bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 text-white rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg text-center overflow-hidden border border-gray-600 hover:border-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/10 to-cyan-400/0 transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
            <span className="relative z-10 font-semibold"> Back to Home</span>
            <div className="absolute top-2 right-2 text-xs text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>

          <button
            onClick={restartGame}
            className="group relative px-6 py-3 min-h-[48px] text-base sm:text-lg bg-gradient-to-r from-red-800 to-red-700 hover:from-red-700 hover:to-red-600 text-white rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg overflow-hidden border border-red-600 hover:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-400"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-400/0 via-red-400/10 to-red-400/0 transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
            <span className="relative z-10 font-semibold">Restart Game</span>
            <div className="absolute top-2 right-2 text-xs text-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>

      {/* Dark bottom glow */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-gray-900/30 to-transparent"></div>
      
      {/* CSS Animations */}
      <style>{`
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