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
      `http://localhost:8000/restaurants?address=${address}`
    );
    setRestaurants(res.data);
  }

  React.useEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: "orange",
      },
      headerTitle: () => {
        return <SearchBar searchHandler={requestRestaurants} />;
      },
    });
  }, []);
  return (
    <View style={styles.container}>
      <Results restaurants={restaurants} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default RestaurantSearchScreen;
