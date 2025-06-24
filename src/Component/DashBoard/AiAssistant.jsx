import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Upload, Sparkles, TrendingUp, Award, Briefcase, Loader, Menu, X } from 'lucide-react';

const AiAssistant = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'ai',
      content: "Hi there! I'm your AI Career Assistant powered by OpenAI. I can help you improve your resume, suggest career paths, and provide personalized advice. How can I help you today?",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [streamingMessage, setStreamingMessage] = useState('');
  const messagesEndRef = useRef(null);

  const quickPrompts = [
    {
      icon: Upload,
      text: "Improve my resume",
      gradient: "from-orange-500 to-red-500",
      systemPrompt: "You are an expert resume reviewer. Analyze the user's resume and provide specific, actionable feedback on formatting, content, keywords, and overall presentation."
    },
    {
      icon: TrendingUp,
      text: "Career path suggestions",
      gradient: "from-orange-500 to-yellow-500",
      systemPrompt: "You are a career counselor with expertise in various industries. Provide personalized career path recommendations based on the user's background, skills, and interests."
    },
    {
      icon: Award,
      text: "Skill gap analysis",
      gradient: "from-orange-400 to-pink-500",
      systemPrompt: "You are a skills assessment expert. Analyze the user's current skills and identify gaps they should fill to advance in their desired career path."
    },
    {
      icon: Briefcase,
      text: "Interview preparation",
      gradient: "from-orange-600 to-orange-400",
      systemPrompt: "You are an interview coach. Help the user prepare for job interviews with practice questions, tips, and strategies tailored to their target role."
    }
  ];

  const suggestedSkills = [
    { name: "React.js", trending: true },
    { name: "Node.js", trending: false },
    { name: "MongoDB", trending: true },
    { name: "TypeScript", trending: true },
    { name: "GraphQL", trending: true },
    { name: "Docker", trending: false }
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, streamingMessage]);

  const callOpenAI = async (userMessage, systemPrompt = null) => {
    try {
      const response = await fetch('/api/openai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [
            ...(systemPrompt ? [{ role: 'system', content: systemPrompt }] : []),
            ...messages.map(msg => ({
              role: msg.type === 'user' ? 'user' : 'assistant',
              content: msg.content
            })),
            { role: 'user', content: userMessage }
          ],
          model: 'gpt-4',
          temperature: 0.7,
          max_tokens: 1000,
          stream: true
        })
      });

      if (!response.ok) throw new Error('Failed to get AI response');

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let aiResponseContent = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value);
        const lines = chunk.split('\n');

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            const data = line.slice(6);
            if (data === '[DONE]') break;
            try {
              const parsed = JSON.parse(data);
              const content = parsed.choices?.[0]?.delta?.content;
              if (content) {
                aiResponseContent += content;
                setStreamingMessage(aiResponseContent);
              }
            } catch (e) {}
          }
        }
      }

      setMessages(prev => [...prev, { id: Date.now(), type: 'ai', content: aiResponseContent, timestamp: new Date() }]);
      setStreamingMessage('');

    } catch (error) {
      console.error('OpenAI API Error:', error);
      setMessages(prev => [...prev, {
        id: Date.now(),
        type: 'ai',
        content: "I apologize, but I'm having trouble connecting right now. Please try again in a moment.",
        timestamp: new Date()
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;
    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);
    await callOpenAI(inputMessage);
  };

  const handleQuickPrompt = async (text, systemPrompt) => {
    if (isLoading) return;
    const userMessage = { id: Date.now(), type: 'user', content: text, timestamp: new Date() };
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    await callOpenAI(text, systemPrompt);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`flex items-start space-x-3 max-w-3xl ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${message.type === 'ai' ? 'bg-gradient-to-r from-orange-500 to-red-500' : 'bg-gray-700'}`}>
                {message.type === 'ai' ? <Bot className="w-5 h-5" /> : <User className="w-5 h-5" />}
              </div>
              <div className={`p-4 rounded-2xl backdrop-blur-xl border ${message.type === 'ai' ? 'bg-white/5 border-orange-500/20' : 'bg-gradient-to-r from-orange-500/20 to-red-500/20 border-orange-500/30'}`}>
                <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                <div className="text-xs text-gray-400 mt-2">{message.timestamp.toLocaleTimeString()}</div>
              </div>
            </div>
          </div>
        ))}

        {streamingMessage && (
          <div className="flex justify-start">
            <div className="flex items-start space-x-3 max-w-3xl">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-r from-orange-500 to-red-500">
                <Bot className="w-5 h-5" />
              </div>
              <div className="p-4 rounded-2xl backdrop-blur-xl border bg-white/5 border-orange-500/20">
                <p className="text-sm leading-relaxed whitespace-pre-wrap">{streamingMessage}</p>
                <div className="flex items-center space-x-2 mt-2">
                  <Loader className="w-3 h-3 animate-spin text-orange-400" />
                  <span className="text-xs text-orange-400">AI is typing...</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {messages.length === 1 && (
          <div className="px-6 pt-2 pb-4">
            <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Quick Actions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {quickPrompts.map((prompt, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickPrompt(prompt.text, prompt.systemPrompt)}
                  className={`p-6 rounded-2xl bg-gradient-to-r ${prompt.gradient} bg-opacity-10 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 hover:scale-105 group`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${prompt.gradient} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <prompt.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-semibold text-white">{prompt.text}</h4>
                      <p className="text-sm text-gray-400 mt-1">Get AI-powered insights</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="px-6 pt-2 pb-6">
          <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Recommended Skills</h3>
          <div className="flex flex-wrap gap-3">
            {suggestedSkills.map((skill, index) => (
              <button
                key={index}
                className="flex items-center space-x-2 px-4 py-2 bg-white/5 hover:bg-orange-500/20 transition-colors text-sm rounded-xl border border-orange-500/20 backdrop-blur-md shadow-md"
              >
                <span className="text-white font-medium">{skill.name}</span>
                {skill.trending && <span className="text-xs bg-orange-500/20 text-orange-400 px-2 py-0.5 rounded-md">🔥 Hot</span>}
              </button>
            ))}
          </div>
        </div>

        <div ref={messagesEndRef} />
      </div>

      <div className="p-6 border-t border-orange-500/20 bg-black/50 backdrop-blur-xl">
        <div className="flex items-center space-x-4">
          <div className="flex-1 relative">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Ask me anything about your career..."
              className="w-full px-6 py-4 bg-white/5 border border-orange-500/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50 text-white placeholder-gray-400"
            />
          </div>
          <button
            onClick={handleSendMessage}
            disabled={!inputMessage.trim() || isLoading}
            className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center hover:scale-105 transition-transform disabled:opacity-50 disabled:hover:scale-100"
          >
            {isLoading ? <Loader className="w-5 h-5 text-white animate-spin" /> : <Send className="w-5 h-5 text-white" />}
          </button>
        </div>
        <div className="flex items-center justify-center mt-4">
          <p className="text-xs text-gray-500">Powered by OpenAI GPT-4 • AI can make mistakes. Consider checking important information.</p>
        </div>
      </div>
    </div>
  );
};

export default AiAssistant;
