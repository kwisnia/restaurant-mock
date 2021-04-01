import axios from "axios";
import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { Dish as DishType } from "../types/APIResponseTypes";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import DishInfo from "./DishInfo";

interface IProps {
  restaurant_id: number;
}

const DishList = ({ restaurant_id }: IProps) => {
  const [dishes, setDishes] = React.useState([] as DishType[]);
  const [loading, setLoading] = React.useState(true);
  async function requestDishes() {
    const res = await axios.get(
      `http://localhost:8000/restaurants/${restaurant_id}/dishes`
    );
    setLoading(false);
    setDishes(res.data);
  }
  React.useEffect(() => void requestDishes(), []);
  if (loading) {
    return <ActivityIndicator />;
  }
  return (
    <ScrollView>
      {!dishes.length ? (
        <Text style={{ margin: "auto" }}>Restauracja nie ma dań???</Text>
      ) : (
        dishes.map((dish) => {
          return (
            <View style={styles.dishBar}>
              <DishInfo
                key={dish.id}
                name={dish.name}
                cost={dish.cost}
                type={dish.dish_type}
                style={styles.dishInfo}
              />
              <TouchableOpacity style={styles.addDishToOrder}>
                <AntDesign name="pluscircle" size={40} color="black" />
              </TouchableOpacity>
            </View>
          );
        })
      )}
    </ScrollView>
  );
};

export default DishList;

const styles = StyleSheet.create({
  dishBar: {
    flexDirection: "row",
    alignItems: "center",
    margin: "auto",
    width: "40%",
  },
  dishInfo: {
    flex: 7,
    paddingRight: 20,
  },
  addDishToOrder: {
    flex: 3,
    paddingLeft: 20,
  },
});
