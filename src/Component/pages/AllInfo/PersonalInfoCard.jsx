const PersonalInfoCard = ({ name, email, phone, city, postCode, country,  primaryColor}) => {
  return (
    <div className= {`rounded-lg  w-full max-w-xs mx-auto  text-left`}>
      <div className="space-y-1">
        <h1 className={` font-bold  text-2xl text-${primaryColor}-700`}>{name}</h1>
        <p className="text-[10px] ">{city}, {postCode}, {country}</p>
        <p className="text-[10px] ">Phone: {phone}</p>
        <p className="text-[10px] ">Email: {email}</p>
      </div>

      <div className="mt-2">
        <p className="text-[10px] text-black leading-tight">
          Motivated Sales Associate with 5 years of experience boosting sales and customer
          loyalty through individualized service. Expert at learning customer needs and
          directing them to the right products.
        </p>
      </div>
    </div>
  );
};

export default PersonalInfoCard;
