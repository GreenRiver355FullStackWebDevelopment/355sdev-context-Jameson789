import { useState } from "react";

import { useRestaurants } from "../context/RestaurantContext";

function AddRestaurant() {
  const {updateRestaurants} = useRestaurants();
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    cuisine: "",
    rating: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    updateRestaurants(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Address:</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Phone:</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Cuisine:</label>
        <input
          type="text"
          name="cuisine"
          value={formData.cuisine}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Rating:</label>
        <input
          type="number"
          name="rating"
          min="1"
          max="5"
          value={formData.rating}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default AddRestaurant;
