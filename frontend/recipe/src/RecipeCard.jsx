import { useEffect, useState } from "react";

function RecipeCard() {
const [cards, setCards] = useState([]);

useEffect(() => {
fetch("http://localhost:8080/recipes")
.then(res => res.json())
.then(data => setCards(data));
},[]);

return (
<div>
  {cards.map((card) => {
    return (
      <h2>{card.title}</h2>


    );
  })}

  </div>
  );
}



export default RecipeCard;
