import React, { useEffect, useState } from "react";

export default function Profile() {
  const [xp, setXp] = useState(0);
  const [level, setLevel] = useState(1);
const [username, setUsername] = useState(() => localStorage.getItem("username") || "");

  useEffect(() => {
    const storedXp = Number(localStorage.getItem("xp")) || 0;
    const calculatedLevel = Math.floor(storedXp / 10) + 1;

    setXp(storedXp);
    setLevel(calculatedLevel);
  }, []);

  const getAvatar = () => {
    if (level >= 10) return "🧙 Master Coder";
    if (level >= 7) return "🛡️ Code Knight";
    if (level >= 4) return "🧠 Bug Hunter";
    return "👶 Newbie";
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-6">👤 Player Profile</h1>

      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
<label className="text-xl font-semibold mb-2 block">
  Username:
  <input
  type="text"
  value={username}
  onChange={(e) => {
    setUsername(e.target.value);
    localStorage.setItem("username", e.target.value);
  }}
  placeholder="Enter your lovely name..."
  className="bg-gray-700 text-blue-300 p-2 rounded w-full mt-1"
/>

</label>
        <p className="text-lg mb-2">Level: <span className="text-green-400">{level}</span></p>
        <p className="text-lg mb-2">XP: <span className="text-yellow-300">{xp}</span></p>
        <p className="text-lg mb-4">Challenges Solved: <span className="text-pink-400">{Math.floor(xp / 10)}</span></p>

        <div className="text-4xl text-center mb-2">{getAvatar().split(" ")[0]}</div>
        <p className="text-center text-gray-300 italic">{getAvatar().split(" ").slice(1).join(" ")}</p>
      </div>

      <button
        onClick={() => (window.location.href = "/")}
        className="mt-6 bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded"
      >
        🏠 Back to Home
      </button>
    </div>
  );
}
