import { FaEye, FaDownload, FaLink, FaStar } from 'react-icons/fa';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Week 1', score: 70 },
  { name: 'Week 2', score: 75 },
  { name: 'Week 3', score: 85 },
  { name: 'Week 4', score: 92 },
];

const Profile = () => {
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
        <div className="bg-gradient-to-br from-[#2c0f00] to-[#0a0400] rounded-2xl p-6 text-center shadow-inner">
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

        <div className="bg-gradient-to-br from-[#2c0f00] to-[#0a0400] rounded-2xl p-6 text-center shadow-inner">
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

        <div className="bg-gradient-to-br from-[#2c0f00] to-[#0a0400] btn-outline p-6 rounded-2xl shadow-lg text-white">
          <h4 className="text-lg font-semibold mb-4">AI Coach Suggestions</h4>
          <div className="space-y-4">
            <SuggestionCard text="Refine your skill highlights" />
            <SuggestionCard text="Add latest project screenshots" />
            <SuggestionCard text="Optimize keywords for ATS" />
          </div>
        </div>
      </div>

      {/* Achievement Score Chart + User Reviews */}
      <div className="flex flex-col md:flex-row gap-8">
        <div className="bg-gradient-to-br from-[#2c0f00] to-[#0a0400] flex-1 rounded-2xl p-6 shadow-inner">
          <h4 className="text-sm font-semibold mb-4">Achievement Score Over Time</h4>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#FFA500" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#FFA500" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" stroke="#ccc" />
              <YAxis stroke="#ccc" />
              <CartesianGrid strokeDasharray="3 3" stroke="#444" />
              <Tooltip />
              <Area type="monotone" dataKey="score" stroke="#FFA500" fillOpacity={1} fill="url(#colorScore)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-gradient-to-br from-[#2c0f00] to-[#0a0400] flex-1 rounded-2xl p-6 shadow-inner">
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
    <div className="w-12 h-12 rounded-full bg-gray-800 flex-shrink-0" />
    <div>
      <p className="text-sm font-semibold text-orange-400">{name}</p>
      <p className="text-sm text-gray-300 leading-relaxed">{text}</p>
    </div>
  </div>
);

export default Profile;
