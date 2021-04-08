import React from "react";
import {
  MainStackParamList,
  RootStackParamList,
} from "./src/types/NavigationTypes";
import RestaurantSearchScreen from "./src/screens/RestaurantSearchScreen";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RestaurantMenuScreen from "./src/screens/RestaurantMenuScreen";
import RootStackNavigation from "./src/navigation/RootStackNavigation";
import MainStackNavigation from "./src/navigation/MainStackNavigation";

export default function App() {
  return (
    <NavigationContainer>
      <RootStackNavigation />
    </NavigationContainer>
  );
}
