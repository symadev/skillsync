
const TestimonialCard = ({ card }) => {
  const { name, role, photo, review } = card;

  return (
    <div className="bg-gradient-to-b from-[#111] to-[#222] text-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-800">
      <div className="flex items-center gap-4 mb-4">
        <img
          src={photo}
          alt={name}
          className="w-14 h-14 rounded-full object-cover border-2 border-orange-500"
        />
        <div>
          <h3 className="text-lg font-bold text-white">{name}</h3>
          <p className="text-sm text-orange-400">{role}</p>
        </div>
      </div>
      <p className="text-gray-300 text-sm leading-relaxed italic border-l-4 border-orange-500 pl-4">
        “{review}”
      </p>
    </div>
  );
};

export default TestimonialCard;
