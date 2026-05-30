import { Link } from "react-router-dom";

function Nav() {
return (
<nav>
  <div className="navDiv">
  <Link to="/">Home</Link>
  <Link to="/profile">Profile</Link>
  <Link to="/recipes">Recipes</Link>
  </div>
</nav>
 );
}

export default Nav;
