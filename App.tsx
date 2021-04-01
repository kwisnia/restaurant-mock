import React from "react";
import { RootStackParamList } from "./src/types/NavigationTypes";
import RestaurantSearchScreen from "./src/screens/RestaurantSearchScreen";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RestaurantDetailsScreen from "./src/screens/RestaurantDetailsScreen";

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="RestaurantList">
        <Stack.Screen
          name="RestaurantList"
          component={RestaurantSearchScreen}
        />
        <Stack.Screen
          name="RestaurantDetails"
          component={RestaurantDetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
