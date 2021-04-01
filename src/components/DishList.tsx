import axios from "axios";
import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { Dish as DishType } from "../types/APIResponseTypes";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import DishInfo from "./DishInfo";

interface IProps {
  restaurant_id: number;
}

const DishList = ({ restaurant_id }: IProps) => {
  const [dishes, setDishes] = React.useState([] as DishType[]);
  async function requestDishes() {
    const res = await axios.get(
      `http://127.0.0.1:8000/restaurants/${restaurant_id}/dishes`
    );
    setDishes(res.data);
  }
  React.useEffect(() => void requestDishes(), []);
  return (
    <ScrollView>
      {!dishes.length ? (
        <Text style={{ margin: "auto" }}>Restauracja nie ma dań???</Text>
      ) : (
        dishes.map((dish) => {
          return (
            <View>
              <DishInfo
                key={dish.id}
                name={dish.name}
                cost={dish.cost}
                type={dish.dish_type}
              />
              <TouchableOpacity>
                <AntDesign name="pluscircle" size={24} color="black" />
              </TouchableOpacity>
            </View>
          );
        })
      )}
    </ScrollView>
  );
};

export default DishList;
