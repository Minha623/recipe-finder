
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RecipeDetails from './pages/RecipeDetails'
import Favorites from './pages/Favorites'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    <Routes>
      <Route path="/recipe/:recipeName" element = {<RecipeDetails/>}>
      </Route>
            <Route path="/favorites" element={<Favorites />} />

    </Routes>
    </>
  );
}

export default App;
