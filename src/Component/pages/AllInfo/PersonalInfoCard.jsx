const PersonalInfoCard = ({ name, surname, email, phone, city, postcode, country, primaryColor, Motivation }) => {
  const textColor = {
    purple: "text-purple-700",
    green: "text-green-700",
    blue: "text-blue-700",
    orange: "text-orange-600",
    red: "text-red-500",
    black: "text-white",
  };

  const textColorClass = textColor[primaryColor?.toLowerCase()] || "text-white";

  return (
    <div className="rounded-lg text-left space-y-1">
      <h1 className={`font-bold text-2xl ${textColorClass}`}>
        {name} {surname}
      </h1>

      <p className="text-[14px]">{city}, {postcode}, {country}</p>
      <p className="text-[14px]">Phone: {phone}</p>
      <p className="text-[14px]">Email: {email}</p>

      {Motivation && (
        <div className="mt-2">
          <p className="text-[14px] text-black leading-tight">
            {Motivation}
          </p>
        </div>
      )}
    </div>
  );
};

export default PersonalInfoCard;
