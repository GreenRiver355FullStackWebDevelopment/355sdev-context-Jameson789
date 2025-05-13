import Main from "./components/Main";
import { RestaurantContext } from "./context/RestrauntContex";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [restaurantState, setRestaurants] = useState([]);

  useEffect(() => {
    async function fetchRestaurants() {
      try {
        const response = await fetch("http://localhost:3000/restaurants");
        const data = await response.json();
        setRestaurants(data);
      } catch (error) {
        console.error("Failed to fetch restaurants:", error);
      }
    }

    fetchRestaurants();
  }, []);

  const updateRestaurants = (restaurant) => {
    setRestaurants([...restaurantState, restaurant]);
  };

  return (
    <RestaurantContext.Provider value = {{
      restraunts: restaurantState, updateRestaurants
    }}>
    <div className="App">
      <Main />
    </div>
    </RestaurantContext.Provider>
  );
}
export default App;
