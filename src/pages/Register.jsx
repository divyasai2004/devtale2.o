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
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-4">📝 Register for Algoritale</h1>
      <p className="text-gray-400 mb-6">Begin your coding adventure by choosing a hero name.</p>

      <div className="bg-gray-850 p-6 rounded-lg shadow-md w-full max-w-sm">
        <input
          type="text"
          placeholder="👤 Choose a unique hero name..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={handleKeyPress}
          className="w-full p-3 mb-4 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        {error && <p className="text-red-400 text-sm mb-4">{error}</p>}

        <button
          onClick={handleRegister}
          className={`w-full p-3 rounded bg-purple-600 hover:bg-purple-500 transition-all duration-200 ${
            !username.trim() && "opacity-50 cursor-not-allowed"
          }`}
          disabled={!username.trim()}
        >
          ✅ Register
        </button>

        <p className="mt-4 text-sm text-gray-400 text-center">
          Already registered?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-blue-400 cursor-pointer hover:underline"
          >
            Login here
          </span>
        </p>
      </div>
    </div>
  );
}
