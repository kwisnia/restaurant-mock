import React from "react";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { RestaurantMenuNavigationProp } from "../types/NavigationTypes";
import { Dish } from "../types/APIResponseTypes";

interface IProps {
  orderSum: number;
  orderedItems: Dish[];
  restaurantId: number;
}

const OrderInfo = ({ orderSum, orderedItems, restaurantId }: IProps) => {
  const navigation = useNavigation<RestaurantMenuNavigationProp>();
  return (
    <View
      style={{ flex: 1, flexDirection: "row", position: "absolute", bottom: 0 }}
    >
      <Text>Kwota twojego zamówienia: {orderSum} zł</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("OrderSummary", {
            restaurant_id: restaurantId,
            ordered_dishes: orderedItems,
          });
        }}
      >
        <FontAwesome name="angle-double-up" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default OrderInfo;
