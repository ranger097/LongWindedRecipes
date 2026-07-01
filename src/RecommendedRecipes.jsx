import Recipes from './Recipes';
import { Link } from 'react-router-dom';

function RecommendedRecipes() {

  return (
    <div>
   <div className="RecommendedRecipeContainer">
    <span className="recipeRecommended">Recommended</span>
    <Link to="/recipes" className="RecommendedNavSpan"><span>See All</span></Link>
    </div>
    <Recipes />
    </div>


  );

}

export default RecommendedRecipes;
