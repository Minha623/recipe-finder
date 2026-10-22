import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import pizza from "../images/pizza.webp";
import burger from "../images/burger.webp";
import pasta from "../images/pasta.webp";
import fries from "../images/fries.webp";
import sandwich from "../images/sandwich.webp";
import cake from "../images/cake.webp";
import biryani from "../images/biryani.webp";
import chickenburger from "../images/chickenburger.webp";
import Whitesauce from "../images/whitesauce.webp";
import "../App.css";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("favorites");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);
  const recipes = [
    {
      name: "Cheese Pizza",
      description: "Delicious cheesy pizza",
      cookingTime: "30 minutes",
      image: pizza,
    },
    {
      name: "Creamy Pasta",
      description: "Creamy pasta with tasty sauce",
      cookingTime: "25 minutes",
      image: pasta,
    },
    {
      name: "Beef Burger",
      description: "Juicy burger with fresh vegetables",
      cookingTime: "20 minutes",
      image: burger,
    },
    {
      name: "Chicken Biryani",
      description: "Spicy rice cooked with tender chicken",
      cookingTime: "45 minutes",
      image: biryani,
    },
    {
      name: "Chocolate Cake",
      description: "Soft and delicious chocolate cake",
      cookingTime: "50 minutes",
      image: cake,
    },
    {
      name: "Chicken Sandwich",
      description: "Fresh sandwich filled with chicken",
      cookingTime: "15 minutes",
      image: sandwich,
    },
    {
      name: "French Fries",
      description: "Crispy golden potato fries",
      cookingTime: "10 minutes",
      image: fries,
    },
    {
      name: "White Sauce Pasta",
      description: "Pasta with rich and creamy white sauce",
      cookingTime: "30 minutes",
      image: Whitesauce,
    },
    {
      name: "Chicken Burger",
      description: "Crispy chicken burger with fresh toppings",
      cookingTime: "35 minutes",
      image: chickenburger,
    },
  ];
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container">
          <a className="navbar-brand fw-bold" href="/">
            🍲 Recipe Finder
          </a>
          <span className="text-white">Discover Delicious Recipe</span>
          <Link to="/favorites" className="btn btn-outline-danger">
            ❤️ My Favorites
          </Link>
        </div>
      </nav>
      <div className="container text-center my-5">
        <h1 className="fw-bold">Find your Favourite Recipe</h1>
        <p className="text-secondary mt-3">
          Search for delicious recipes and learn how to cook them.
        </p>
        <div className="row justify-content-center mt-4">
          <div className="col-md-7">
            <div className="input-group">
              <input
                className="form-control"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                type="text"
                placeholder="Search recipes ....."
              />
              <button className="btn btn-success" type="button">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container mb-5">
        <h2 className="fw-bold mb-4">Popular Recipes</h2>
        <div className="row">
          {filteredRecipes.map((recipe, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card h-100 shadow-sm">
                <img
                  className="card-img-top recipe-img"
                  src={recipe.image}
                  alt={recipe.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{recipe.name}</h5>
                  <button
                    className="btn btn-outline-danger btn-sm mb-2"
                    onClick={() => {
                      const isFavorite = favorites.some(
                        (fav) => fav.name === recipe.name,
                      );

                      if (isFavorite) {
                        setFavorites(
                          favorites.filter((fav) => fav.name !== recipe.name),
                        );
                      } else {
                        setFavorites([...favorites, recipe]);
                      }
                    }}
                  >
                    {favorites.some((fav) => fav.name === recipe.name)
                      ? "❤️ Remove Favorite"
                      : "🤍 Add to Favorites"}
                  </button>
                  <p className="card-text">{recipe.description}</p>
                  <p className="card-text">
                    Cooking Time: {recipe.cookingTime}
                  </p>
                  <Link
                    to={`/recipe/${recipe.name.toLowerCase().replaceAll(" ", "-")}`}
                    className="btn btn-success mt-2"
                  >
                    View Recipe
                  </Link>
                </div>
              </div>
            </div>
          ))}
          {filteredRecipes.length === 0 && (
            <p className="text-center">No recipe Found</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
