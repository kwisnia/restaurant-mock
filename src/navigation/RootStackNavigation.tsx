import React from "react";
import { RootStackParamList } from "../types/NavigationTypes";
import RestaurantSearchScreen from "../screens/RestaurantSearchScreen";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RestaurantMenuScreen from "../screens/RestaurantMenuScreen";
import MainStackNavigation from "./MainStackNavigation";
import OrderModal from "../screens/OrderModal";

const RootStack = createStackNavigator<RootStackParamList>();

const RootStackNavigation = () => {
  return (
    <RootStack.Navigator mode="modal">
      <RootStack.Screen
        name="MainStackScreen"
        component={MainStackNavigation}
        options={{ headerShown: false }}
      />
      <RootStack.Screen name="OrderSummary" component={OrderModal} />
    </RootStack.Navigator>
  );
};

export default RootStackNavigation;
