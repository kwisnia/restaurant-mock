import React from "react";
import { MainStackParamList } from "../types/NavigationTypes";
import RestaurantSearchScreen from "../screens/RestaurantSearchScreen";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import RestaurantMenuScreen from "../screens/RestaurantMenuScreen";
const MainStack = createStackNavigator<MainStackParamList>();

const MainStackNavigation = () => {
  return (
    <MainStack.Navigator initialRouteName="RestaurantList">
      <MainStack.Screen
        name="RestaurantList"
        component={RestaurantSearchScreen}
      />
      <MainStack.Screen
        name="RestaurantMenu"
        component={RestaurantMenuScreen}
        options={{
          headerStyle: {
            backgroundColor: "orange",
          },
          headerTintColor: "white",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </MainStack.Navigator>
  );
};

export default MainStackNavigation;
