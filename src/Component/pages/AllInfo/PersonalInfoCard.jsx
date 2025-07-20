const PersonalInfoCard = ({ name,surname , email, phone, city, postcode, country,  primaryColor,Motivation}) => {
  return (
    <div className= {`rounded-lg text-left `}>
      <div className="space-y-1">
        <h1 className={` font-bold  text-2xl text-${primaryColor}-700`}>{name} {surname}</h1>

        <p className="text-[14px] ">{city}, {postcode}, {country}</p>
        <p className="text-[14px] ">Phone: {phone}</p>
        <p className="text-[14px] ">Email: {email}</p>
      </div>

      <div className="mt-2">
        <p className="text-[14px] text-black leading-tight">
          {Motivation}
        </p>
      </div>
    </div>
  );
};

export default PersonalInfoCard;
