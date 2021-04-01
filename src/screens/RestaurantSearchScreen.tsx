import axios from "axios";
import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Restaurant } from "../types/APIResponseTypes";
import SearchBar from "../components/SearchBar";
import Results from "../components/Results";
import { RestaurantListNavigationProp } from "../types/NavigationTypes";
interface IProps {
  navigation: RestaurantListNavigationProp;
}

const RestaurantSearchScreen = (props: IProps) => {
  const { navigation } = props;
  const [restaurants, setRestaurants] = React.useState([] as Restaurant[]);

  async function requestRestaurants(address: string) {
    const res = await axios.get(
      `http://127.0.0.1:8000/restaurants?address=${address}`
    );
    setRestaurants(res.data);
  }

  useEffect(() => console.log(restaurants), [restaurants]);
  return (
    <View style={styles.container}>
      <SearchBar searchHandler={requestRestaurants} />
      <Results restaurants={restaurants} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});

export default RestaurantSearchScreen;
