
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RecipeDetails from './pages/RecipeDetails'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    <Routes>
      <Route path="/recipe/:recipeName" element = {<RecipeDetails/>}>

      </Route>
    </Routes>
    </>
  );
}

export default App;
