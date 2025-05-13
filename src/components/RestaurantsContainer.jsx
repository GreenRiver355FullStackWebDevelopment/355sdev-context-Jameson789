import Restaurant from "./Restaurant";
import { useRestaurants } from "../context/RestaurantContext";

function RestaurantsContainer() {
  const {restaurants} = useRestaurants();
  return (
    <div className="restaurantContainer">
      {restaurants.map((restaurant) => (
        <Restaurant key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
}

export default RestaurantsContainer;
