import React from "react";
import { View, Image, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Restaurant as RestaurantType } from "../types/APIResponseTypes";
import { RestaurantListNavigationProp } from "../types/NavigationTypes";
interface IProps {
  restaurant: RestaurantType;
  navigation: RestaurantListNavigationProp;
}
const Restaurant = (props: IProps) => {
  const { id, name, cuisine_type, delivery_fee, logo } = props.restaurant;
  const { navigation } = props;
  return (
    <TouchableOpacity
      onPress={() => {
        console.log(id);
        navigation.navigate("RestaurantDetails", { restaurant_id: id });
      }}
      style={styles.restaurantCard}
    >
      <Image source={{ uri: logo }} style={{ width: 50, height: 50 }} />
      <Text>{name}</Text>
      <Text>{cuisine_type}</Text>
      <Text>{delivery_fee}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  restaurantCard: {
    borderWidth: 4,
    borderColor: "grey",
  },
});

export default Restaurant;
