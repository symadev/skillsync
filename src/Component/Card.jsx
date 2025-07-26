import { useEffect, useState } from "react";
import CardDetails from "./CardDetails";


const Card = () => {
      const [cards, setCards ]= useState([]);

    useEffect(()=>{
        fetch('./card.json')
        .then(res=>res.json())
        .then(data=>setCards(data))
    
    },[]);
    return (
         <div className="min-h-[400px] bg-black p-4">
                <h2 className="text-4xl font-bold text-center text-white p-6">The best Beneficial Feature For You</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
    {
        cards.map( card=> <CardDetails card={card} key = {card.cardId}></CardDetails>)
    }
    
    
                </div>
            </div>
    );
};

export default Card;