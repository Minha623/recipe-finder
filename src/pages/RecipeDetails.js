import { useParams, Link } from "react-router-dom";
import pizza from "../images/pizza.webp";
import pasta from "../images/pasta.webp";
import burger from "../images/burger.webp";
import biryani from "../images/biryani.webp";
import cake from "../images/cake.webp";
import sandwich from "../images/sandwich.webp";
import fries from "../images/fries.webp";
import chickenburger from "../images/chickenburger.webp";
import Whitesauce from "../images/whitesauce.webp";
import '../App.css'

function RecipeDetails() {
  const { recipeName } = useParams();

  const recipes = {
    "cheese-pizza": {
      name: "cheese pizza",
      image: pizza,
      cookingTime: "30 minutes",
      ingredients: [
        "Pizza dough",
        "Tomato sauce",
        "Mozzarella cheese",
        "Oregano",
      ],
      instructions: [
        "Pizza dough ko gol shape mein tayyar karo.",
        "Dough par tomato sauce lagao.",
        "Mozzarella cheese aur oregano add karo.",
        "Oven mein bake karo jab tak cheese melt ho jaye.",
      ],
    },

    "creamy-pasta": {
      name: "Creamy Pasta",
      image: pasta,
      cookingTime: "25 minutes",
      ingredients: ["Pasta", "Cream", "Garlic", "Butter", "Salt and pepper"],
      instructions: [
        "Pasta ko pani mein boil karo.",
        "Pan mein butter aur garlic cook karo.",
        "Cream add karke sauce tayyar karo.",
        "Pasta ko sauce ke saath mix karo aur serve karo.",
      ],
    },

    "beef-burger": {
      name: "Beef Burger",
      image: burger,
      cookingTime: "20 minutes",
      ingredients: ["Burger bun", "Beef patty", "Cheese", "Lettuce", "Tomato"],
      instructions: [
        "Beef patty ko achhi tarah cook karo.",
        "Burger bun ko halka toast karo.",
        "Bun par patty, cheese aur vegetables rakho.",
        "Burger ko serve karo.",
      ],
    },

    "chicken-biryani": {
      name: "Chicken Biryani",
      image: biryani,
      cookingTime: "45 minutes",
      ingredients: [
        "Basmati rice",
        "Chicken",
        "Onion",
        "Yogurt",
        "Biryani spices",
      ],
      instructions: [
        "Rice ko dho kar boil karo.",
        "Onion fry karo aur chicken aur spices add karo.",
        "Yogurt add karke chicken ko achhi tarah cook karo.",
        "Rice aur chicken ki layers bana kar dum par rakho.",
      ],
    },

    "chocolate-cake": {
      name: "Chocolate Cake",
      image: cake,
      cookingTime: "50 minutes",
      ingredients: ["Flour", "Cocoa powder", "Sugar", "Eggs", "Butter", "Milk"],
      instructions: [
        "Flour, cocoa powder aur sugar mix karo.",
        "Eggs, butter aur milk add karke batter banao.",
        "Batter ko cake pan mein daalo.",
        "Preheated oven mein bake karo jab tak cake ready ho jaye.",
      ],
    },

    "chicken-sandwich": {
      name: "Chicken Sandwich",
      image: sandwich,
      cookingTime: "15 minutes",
      ingredients: [
        "Bread slices",
        "Cooked chicken",
        "Mayonnaise",
        "Lettuce",
        "Tomato",
      ],
      instructions: [
        "Chicken ko shred karke mayonnaise ke saath mix karo.",
        "Bread par chicken mixture lagao.",
        "Lettuce aur tomato add karo.",
        "Doosri bread slice rakho aur sandwich serve karo.",
      ],
    },

    "french-fries": {
      name: "French Fries",
      image: fries,
      cookingTime: "10 minutes",
      ingredients: ["Potatoes", "Oil", "Salt", "Black pepper"],
      instructions: [
        "Potatoes ko peel karke strips mein cut karo.",
        "Strips ko dho kar achhi tarah dry karo.",
        "Hot oil mein golden aur crispy hone tak fry karo.",
        "Salt aur pepper add karke serve karo.",
      ],
    },

    "white-sauce-pasta": {
      name: "White Sauce Pasta",
      image: Whitesauce,
      cookingTime: "30 minutes",
      ingredients: [
        "Pasta",
        "Butter",
        "Flour",
        "Milk",
        "Cheese",
        "Salt and pepper",
      ],
      instructions: [
        "Pasta ko boil karo.",
        "Butter melt karke flour mix karo.",
        "Dheere dheere milk add karke sauce thick karo.",
        "Cheese aur pasta add karke achhi tarah mix karo.",
      ],
    },

    "chicken-burger": {
      name: "Chicken Burger",
      image: chickenburger,
      cookingTime: "35 minutes",
      ingredients: [
        "Burger bun",
        "Chicken patty",
        "Lettuce",
        "Tomato",
        "Mayonnaise",
      ],
      instructions: [
        "Chicken patty ko achhi tarah cook karo.",
        "Burger bun ko halka toast karo.",
        "Bun par mayonnaise, chicken patty aur vegetables rakho.",
        "Burger ko serve karo.",
      ],
    },
  };

  const recipe = recipes[recipeName];
  if (!recipe) {
    return (
      <div className="container text-center my-5">
        <h2>Recipe Not Found</h2>
        <Link to="/" className="btn btn-success mt-5">
          Back To Recipes
        </Link>
      </div>
    );
  }
  return (
    <div className="container-my-5 recipe-details">
      <Link to="/" className="btn btn-outline-success mb-4">
        ← Back to Recipes
      </Link>
      <h1 className="fw-bold">{recipe.name}</h1>
      <img
        src={recipe.image}
        alt={recipe.name}
        className="img-fluid rounded shadow-sm my-3"
        style={{
          maxHeight: "500px",
          width: "100%",
          objectFit: "cover",
        }}
      />
      <p className="text-secondary">Cooking Time: {recipe.cookingTime}</p>
      <div className="card shadow-sm mt-4">
        <div className="card-body">
          <h3>Ingredients</h3>
          <ul>
            {recipe.ingredients.map((ingredients, index) => (
              <li key={index}>{ingredients}</li>
            ))}
          </ul>
          <h3 className="mt-4">Instructions</h3>
          <ol>
            {recipe.instructions.map((step, index) => (
              <li className="mb-2" key={index}>
                {step}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetails;
