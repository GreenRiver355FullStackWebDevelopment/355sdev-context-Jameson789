import RestaurantsContainer from "./RestaurantsContainer";

function RestaurantSection() {
  return (
    <section>
      <RestaurantFilter />
      <RestaurantsContainer />
    </section>
  );
}

export default RestaurantSection
