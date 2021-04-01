import React from "react";
import { RootStackParamList } from "./src/types/NavigationTypes";
import RestaurantSearchScreen from "./src/screens/RestaurantSearchScreen";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RestaurantMenuScreen from "./src/screens/RestaurantMenuScreen";

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
          name="RestaurantMenu"
          component={RestaurantMenuScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
