import { useState } from "react";
import axios from "axios";

const AIAssistant = () => {
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!prompt.trim()) return;
    const userMessage = { role: "user", content: prompt };
    setMessages((prev) => [...prev, userMessage]);
    setPrompt("");
    setLoading(true);

    try {
      const res = await axios.post(
        "https://resume-builder-server-nu.vercel.app/api/ai",
        { message: prompt }
      );

      const aiMessage = { role: "ai", content: res.data.reply };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: "ai", content: "⚠️ AI response failed!" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <div className="relative w-full min-h-[500px] rounded-2xl overflow-hidden shadow-2xl flex flex-col bg-gradient-to-br from-gray-900 to-gray-900">
     

      {/* Chat Content */}
      <div className="relative z-10 p-6 h-full flex flex-col">
        {/* Messages */}
        <div className="flex-1 mb-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-inner overflow-y-auto max-h-[400px]">
          <div className="p-4 space-y-4 scrollbar-thin scrollbar-thumb-white/30 scrollbar-track-transparent">
            {messages.length === 0 && (
              <div className="text-center text-white/50 mt-16">
                <p>💬 Start a conversation with your AI Resume Assistant!</p>
              </div>
            )}

            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                } animate-fade-in`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div
                  className={`max-w-xs p-4 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] ${
                    msg.role === "user"
                      ? "bg-gradient-to-r from-orange-500 to-orange-400 text-white shadow-orange-500/30"
                      : "bg-white/95 text-gray-800 backdrop-blur-sm shadow-gray-400/20"
                  }`}
                >
                  <div className="text-sm font-medium whitespace-pre-line leading-relaxed">
                    {msg.content}
                  </div>
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start animate-fade-in">
                <div className="bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-lg flex items-center space-x-3">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-200"></div>
                  </div>
                  <span className="text-sm text-gray-600 font-medium">
                    AI is thinking...
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Input */}
        <div className="mt-auto">
          <div className="flex gap-3 items-end">
            <div className="flex-1 relative">
              <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about resume improvement or career suggestions..."
                className="w-full bg-white/20 backdrop-blur-md border border-white/30 text-white placeholder-white/70 p-4 pr-12 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:bg-white/25 transition-all duration-300 text-sm font-medium shadow-lg"
                disabled={loading}
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/50">
                ⏎
              </div>
            </div>

            <button
              onClick={sendMessage}
              disabled={loading || !prompt.trim()}
              className="group relative bg-gradient-to-r from-orange-400 to-yellow-400 text-white p-4 rounded-2xl hover:from-emerald-500 hover:to-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
            >
              <div className="flex items-center justify-center w-6 h-6">
                {loading ? (
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <svg
                    className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                  </svg>
                )}
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.3s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default AIAssistant;
