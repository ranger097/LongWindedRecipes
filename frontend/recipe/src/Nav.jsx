import { Link } from "react-router-dom";

function Nav() {
return (
<nav>
  <div className="navDiv">
  <Link to="/">
  <svg xmlns="http://www.w3.org/2000/svg"
  aria-hidden="true" role="img" 
  style={{ color: "rgb(28, 32, 51)" }} 
  width="30" height="30" viewBox="0 0 24 24">
  <path fill="none" stroke="currentColor" 
  strokeLinecap="round" 
  strokeLinejoin="round" strokeWidth="2" 
  d="M20 19v-8.5a1 1 0 0 0-.4-.8l-7-5.25a1 1 0 0 0-1.2 0l-7 5.25a1 1 0 0 0-.4.8V19a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1"></path>
  </svg>
  </Link>
  <Link to="/profile">Profile</Link>
  <Link to="/recipes"><img src="img/recipe.png" alt="recipe" className="recipeIcon"/></Link>
  </div>
</nav>
 );
}

export default Nav;
