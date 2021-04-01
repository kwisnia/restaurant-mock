import { View, Text } from "react-native";
import { Restaurant as RestaurantType } from "../types/APIResponseTypes";
import { FontAwesome5 } from "@expo/vector-icons";
import Restaurant from "./Restaurant";
import React from "react";
import { RestaurantListNavigationProp } from "../types/NavigationTypes";

interface IProps {
  restaurants: RestaurantType[];
  navigation: RestaurantListNavigationProp;
}

const Results = (props: IProps) => {
  function getRandomIntInclusive(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const nothingFoundTexts = [
    "Niczego tu nie znajdę",
    "Nie ma czego plądrować",
    "Nic tu nie ma",
  ];
  const { restaurants, navigation } = props;
  return (
    <View>
      {!restaurants.length ? (
        <View>
          <FontAwesome5
            name="sad-cry"
            size={46}
            color="black"
            style={{ margin: "auto" }}
          />
          <Text style={{ margin: "auto" }}>
            {nothingFoundTexts[getRandomIntInclusive(0, 2)]}
          </Text>
        </View>
      ) : (
        restaurants.map((restaurant) => {
          return (
            <Restaurant
              key={restaurant.id}
              restaurant={restaurant}
              navigation={navigation}
            />
          );
        })
      )}
    </View>
  );
};

export default Results;
