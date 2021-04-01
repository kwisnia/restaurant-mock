import React from "react";
import { View, Image, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Restaurant as RestaurantType } from "../types/APIResponseTypes";
import { RestaurantListNavigationProp } from "../types/NavigationTypes";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

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
        navigation.navigate("RestaurantMenu", { restaurant_id: id });
      }}
      style={styles.restaurantCard}
    >
      <Image source={{ uri: logo }} style={{ width: 70, height: "100%" }} />
      <View>
        <Text style={styles.restaurantTitle}>{name}</Text>
        <View style={{ flexDirection: "row" }}>
          <MaterialCommunityIcons name="bowl-mix" size={20} color="grey" />
          <Text>{cuisine_type}</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <MaterialIcons name="delivery-dining" size={20} color="black" />
          <Text>{delivery_fee} zł</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  restaurantCard: {
    borderWidth: 4,
    borderColor: "grey",
    flexDirection: "row",
  },
  restaurantTitle: {
    fontSize: 20,
  },
});

export default Restaurant;
