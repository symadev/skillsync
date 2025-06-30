const PersonalInfoCard = ({ name,surname , email, phone, city, postcode, country,  primaryColor,Motivation}) => {
  return (
    <div className= {`rounded-lg  w-full max-w-xs mx-auto  text-left`}>
      <div className="space-y-1">
        <h1 className={` font-bold  text-2xl text-${primaryColor}-700`}>{name}</h1>
        <h1 className={` font-bold  text-2xl text-${primaryColor}-700`}>{surname}</h1>
        <p className="text-[10px] ">{city}, {postcode}, {country}</p>
        <p className="text-[10px] ">Phone: {phone}</p>
        <p className="text-[10px] ">Email: {email}</p>
      </div>

      <div className="mt-2">
        <p className="text-[10px] text-black leading-tight">
          {Motivation}
        </p>
      </div>
    </div>
  );
};

export default PersonalInfoCard;
