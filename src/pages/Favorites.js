import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = localStorage.getItem("favorites");

    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">❤️ My Favorite Recipes</h1>

      {favorites.length === 0 ? (
        <p className="text-center">
          Abhi koi favorite recipe save nahi hai.
        </p>
      ) : (
        <div className="row">
          {favorites.map((recipe) => (
            <div className="col-md-4 mb-4" key={recipe.name}>
              <div className="card h-100 shadow-sm">
                <img
                  src={recipe.image}
                  className="card-img-top recipe-img"
                  alt={recipe.name}
                />

                <div className="card-body">
                  <h5 className="card-title">{recipe.name}</h5>

                  <Link
                    to={`/recipe/${recipe.name
                      .toLowerCase()
                      .replaceAll(" ", "-")}`}
                    className="btn btn-success"
                  >
                    View Recipe
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <Link to="/" className="btn btn-outline-success mt-3">
        ← Back to Recipes
      </Link>
    </div>
  );
}

export default Favorites;