import { FaEye, FaDownload, FaLink, FaStar } from 'react-icons/fa';

const Profile= () => {
  return (
    <div className="p-6 md:p-10 text-white space-y-10 bg-gradient-to-b from-black via-[#0a0a0a] to-[#1a1a1a] rounded-3xl shadow-[0_0_0px_rgba(255,106,0,0.2)] max-w-7xl mx-auto">
     {/* Highlights */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <HighlightCard icon={<FaDownload />} label="Downloads" value={12} />
        <HighlightCard icon={<FaEye />} label="Profile Views" value={350} />
        <HighlightCard icon={<FaLink />} label="Search Links" value={8} />
        <HighlightCard icon={<FaStar />} label="Achievement Score" value="92%" />
      </div>

      {/* Resume Score + Completion + AI Coach */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Resume Score */}
        <div className="bg-[#111] rounded-2xl p-6 text-center shadow-inner">
          <h4 className="text-sm font-semibold mb-2">Resume Completion</h4>
          <div className="relative w-32 h-32 mx-auto">
            <svg className="w-full h-full transform -rotate-90">
              <circle cx="64" cy="64" r="56" stroke="#333" strokeWidth="12" fill="none" />
              <circle cx="64" cy="64" r="56" stroke="#FFA500" strokeWidth="12" fill="none" strokeDasharray="352" strokeDashoffset="88" />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-3xl font-bold">75%</span>
          </div>
          <p className="mt-3 text-sm text-orange-400">Your resume is almost ready</p>
        </div>

        {/* Portfolio Completion */}
        <div className="bg-[#111] rounded-2xl p-6 text-center shadow-inner">
          <h4 className="text-sm font-semibold mb-2">Portfolio Completion</h4>
          <div className="relative w-32 h-32 mx-auto">
            <svg className="w-full h-full transform -rotate-90">
              <circle cx="64" cy="64" r="56" stroke="#333" strokeWidth="12" fill="none" />
              <circle cx="64" cy="64" r="56" stroke="#FF8C00" strokeWidth="12" fill="none" strokeDasharray="352" strokeDashoffset="140" />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-3xl font-bold">60%</span>
          </div>
          <p className="mt-3 text-sm text-orange-400">Keep going, you're doing great!</p>
        </div>

        {/* AI Coach Suggestions */}
        <div className="bg-gradient-to-br from-[#2c0f00] to-[#ff6a00] p-6 rounded-2xl shadow-lg text-white">
          <h4 className="text-lg font-semibold mb-4">AI Coach Suggestions</h4>
          <div className="space-y-4">
            <SuggestionCard text="Refine your skill highlights" />
            <SuggestionCard text="Add latest project screenshots" />
            <SuggestionCard text="Optimize keywords for ATS" />
          </div>
        </div>
      </div>

      {/* Achievement Score + User Reviews */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-[#111] rounded-2xl p-6 text-center shadow-inner">
          <h4 className="text-sm font-semibold mb-2">Achievement Score</h4>
          <p className="text-6xl font-extrabold text-orange-400">92%</p>
          <p className="text-sm mt-2 text-gray-400">Based on profile strength & interaction</p>
        </div>

        <div className="bg-[#111] rounded-2xl p-6 shadow-inner">
          <h4 className="text-sm font-semibold mb-4">User Reviews</h4>
          <div className="space-y-4">
            <ReviewCard name="Jane Doe" text="Amazing AI suggestions! Helped a lot." />
            <ReviewCard name="John Smith" text="Clean UI and powerful resume tools." />
          </div>
        </div>
      </div>
    </div>
  );
};

const HighlightCard = ({ icon, label, value }) => {
  return (
    <div className="bg-gradient-to-r from-[#d64500] via-[#541b00] to-[#1a1a1a] p-4 rounded-lg shadow-md text-white flex items-center space-x-4">
      <div className="text-3xl">{icon}</div>
      <div>
        <p className="text-sm opacity-80">{label}</p>
        <p className="text-xl font-semibold">{value}</p>
      </div>
    </div>
  );
};
const SuggestionCard = ({ text }) => (
  <div className="rounded-xl px-4 py-3 bg-gradient-to-r from-orange-600 to-orange-800 text-white text-sm font-medium shadow-[0_0_10px_rgba(255,115,0,0.4)]">
    {text}
  </div>
);

const ReviewCard = ({ name, text }) => (
  <div className="flex gap-4 items-start">
    <div className="w-10 h-10 bg-gray-700 rounded-full" />
    <div>
      <p className="text-sm font-semibold">{name}</p>
      <p className="text-sm text-gray-300">{text}</p>
    </div>
  </div>
);

export default Profile;
