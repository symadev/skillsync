

const CardDetails = ({ card }) => {
  const { logo, title, description } = card;

  return (
    <div className="shadow-lg rounded-2xl p-6 m-4 text-center bg-black hover:shadow-2xl transition duration-300">
      <img
        src={logo}
        alt={title}
        className="w-16 h-16 mx-auto mb-4 object-contain"
      />
      <h2 className="text-lg font-bold text-white mb-2">{title}</h2>
      <p className="text-sm text-white">{description}</p>
    </div>
  );
};

export default CardDetails;
