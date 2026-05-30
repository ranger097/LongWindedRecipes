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

     <h2>{recipe.title}</h2>
     <span>{recipe.description}</span><br/>
     <span>Ingredients:</span>
     <ul>
     {recipe.ingredients.map((ingredient, index) => (
      <li key={index}>{ingredient}</li>
     ))}
     </ul>
     
     <span>Instructions</span>
     <ul>
    {recipe.steps.map((step,index) => (
      <li key={index}>{step}</li>
    ))}
     </ul>

     <span>Servings:   {recipe.servings}</span><br/>
     <span>Category:   {recipe.category}</span><br/>
     <span>Cooktime:   {recipe.cookTime}</span><br/>
     <span>Preptime:   {recipe.prepTime}</span><br/>
     <span>Totaltime:  {recipe.totalTime}</span><br/>
     <span>Difficulty: {recipe.difficulty}</span><br/>
     <span>Story:      {recipe.story}</span>

   </div>
   );
  })}

</div>

);
}

export default Recipes;
