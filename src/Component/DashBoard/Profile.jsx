import {
  FaEye,
  FaDownload,
  FaLink,
  FaStar,
} from "react-icons/fa";
import {
  ComposedChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  Bar,
  Line,
  Legend,
} from "recharts";
import UseProfileStats from "../Provider/useProfileStats";
import { useResumeProgress } from "../Provider/ResumeProgressContext";
 // ঠিক path দিও

const dummyGraphData = [
  { name: "Week 1", score: 70 },
  { name: "Week 2", score: 75 },
  { name: "Week 3", score: 85 },
  { name: "Week 4", score: 92 },
];

const Profile = () => {
  const { stats, isLoading } = UseProfileStats();
  const { progress } = useResumeProgress();

  if (isLoading) {
    return <div className="text-center text-white py-10">Loading...</div>;
  }

  return (
    <div className="p-6 md:p-10 text-white space-y-10 bg-gradient-to-b from-black via-[#0a0a0a] rounded-3xl shadow-[0_0_0px_rgba(255,106,0,0.2)] max-w-7xl mx-auto">
      {/* Highlights */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <HighlightCard icon={<FaDownload />} label="Downloads" value={stats.downloads || 0} />
        <HighlightCard icon={<FaEye />} label="Profile Views" value={stats.views || 0} />
        <HighlightCard icon={<FaLink />} label="Search Links" value={stats.searchLinks || 0} />
        <HighlightCard icon={<FaStar />} label="Achievement Score" value={`${stats.achievementScore || 0}%`} />
      </div>

      {/* Resume Completion + Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="bg-[#0a0400] rounded-2xl p-6 text-center shadow-inner">
          <h4 className="text-sm font-semibold mb-2">Resume Completion</h4>
           <div className="relative w-32 h-32 mx-auto">
        <svg className="w-full h-full transform -rotate-90">
          <circle cx="64" cy="64" r="56" stroke="#333" strokeWidth="12" fill="none" />
          <circle
            cx="64"
            cy="64"
            r="56"
            stroke="#FFA500"
            strokeWidth="12"
            fill="none"
            strokeDasharray="352"
            strokeDashoffset={`${352 - (progress / 100) * 352}`}
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-3xl font-bold">
          {Math.round(progress)}%
        </span>
      </div>
         <p className="mt-3 text-sm text-orange-400">Your resume is {Math.round(progress)}% complete</p>
        </div>

        {/* Chart */}
        <div className="bg-[#0a0400] flex-1 rounded-2xl p-6 shadow-inner lg:col-span-2">
          <h4 className="text-sm font-semibold mb-4">Achievement Score Over Time</h4>
          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart data={dummyGraphData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="orangeGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#FFA500" stopOpacity={0.8} />
                  <stop offset="100%" stopColor="#FF4500" stopOpacity={0.2} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#444" />
              <XAxis dataKey="name" stroke="#ccc" />
              <YAxis stroke="#ccc" />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="score" stroke="#FFA500" fill="url(#orangeGradient)" />
              <Bar dataKey="score" barSize={20} fill="url(#orangeGradient)" radius={[6, 6, 0, 0]} />
              <Line type="monotone" dataKey="score" stroke="#FF8C00" strokeWidth={2} />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

const HighlightCard = ({ icon, label, value }) => (
  <div className="bg-gradient-to-r from-[#d64500] via-[#541b00] to-[#1a1a1a] p-4 rounded-lg shadow-md text-white flex items-center space-x-4">
    <div className="text-3xl">{icon}</div>
    <div>
      <p className="text-sm opacity-80">{label}</p>
      <p className="text-xl font-semibold">{value}</p>
    </div>
  </div>
);

export default Profile;
