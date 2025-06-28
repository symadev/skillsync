const PersonalInfoCard = ({ name, email, phone, city, postCode, country }) => {
  return (
    <div className="bg-white rounded-lg p-3 w-full max-w-xs mx-auto border border-gray-200 text-left">
      <div className="space-y-1">
        <h2 className="text-sm font-bold text-gray-800">{name}</h2>
        <p className="text-[10px] text-gray-600">{city}, {postCode}, {country}</p>
        <p className="text-[10px] text-gray-600">Phone: {phone}</p>
        <p className="text-[10px] text-gray-600">Email: {email}</p>
      </div>

      <div className="mt-2">
        <p className="text-[10px] text-gray-700 leading-tight">
          Motivated Sales Associate with 5 years of experience boosting sales and customer
          loyalty through individualized service. Expert at learning customer needs and
          directing them to the right products.
        </p>
      </div>
    </div>
  );
};

export default PersonalInfoCard;
