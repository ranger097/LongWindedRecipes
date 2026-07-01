import { useEffect, useState } from "react";

function Recipes() {
const [recipes, setRecipes] = useState([]);
  
useEffect(() => {
fetch("http://localhost:8080/recipes")
.then(res => res.json())
.then(data => setRecipes(data));
}, []);

return (
  
<div className="recipeContainer">
  {recipes.map((recipe) => {
   return (
   <div key={recipe.id} className="recipe">
     <img className="recipeImage" src={recipe.imageUrl} alt={recipe.imageDescription} />

     <h2 className="recipeTitle">{recipe.title}</h2>
     <span className="recipeDescription">{recipe.description}</span><br/>
     


    </div>
   );
  })}

</div>

);
}

export default Recipes;
