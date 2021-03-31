import axios from "axios";
import { useState, useEffect } from "react";
import { View } from "react-native";
import { Restaurant } from "../APIResponseTypes";
import SearchBar from "../components/SearchBar";

const RestaurantSearch = () => {
  const [restaurants, setRestaurants] = useState([] as Restaurant[]);

  async function requestRestaurants(address: string) {
    const restaurants = await axios.get(
      `127.0.0.1:8000/restaurants?address=${address}`
    );
    setRestaurants(restaurants.data);
  }
  return (
    <View>
      <SearchBar searchHandler={requestRestaurants} />
      <Results restaurants={restaurants}/>
    </View>
  );
};

export default RestaurantSearch;
