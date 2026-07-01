import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import Recipes from "./Recipes";
import Nav from "./Nav";

function App() {
  return (
    <BrowserRouter basename="/LongWindedRecipes">
    <Nav />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/profile" element={<Profile />}/>
    <Route path="/recipes" element={<Recipes />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;
