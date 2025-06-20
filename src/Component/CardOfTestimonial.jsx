import TestimonialCard from "./TestimonialCard ";
import { useEffect, useState } from "react";



const CardOfTestimonial = () => {
    const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("./people.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);
    return (
        <div className="min-h-[400px] bg-black py-10 px-4">
      <h2 className="text-4xl font-bold text-center text-white mb-8">
        What Our Users Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {cards.map((card) => (
          <TestimonialCard card={card} key={card.id} />
        ))}
      </div>
    </div>
    );
};

export default CardOfTestimonial;