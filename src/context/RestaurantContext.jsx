import { createContext, useContext } from "react";

export const RestaurantContext = createContext();

export const useRestaurants = () => useContext(RestaurantContext);
