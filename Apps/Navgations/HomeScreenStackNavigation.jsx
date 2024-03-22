import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../Screens/Buyer/HomeScreen";
import BuyerNotify from "../Screens/Buyer/BuyerNotify";
import UserQuery from "../Screens/Buyer/UserQuery";
import CategoryListItem from "../Screens/Buyer/CategoryListItem";
import ViewQueryAnswer from "../Screens/Buyer/ViewQueryAnswer";

const stack = createNativeStackNavigator();

export default function HomeScreenStackNavigation() {
  return (
    <stack.Navigator screenOptions={{ headerShown: false }}>
      <stack.Screen name="home" component={HomeScreen} />
      <stack.Screen name="notify" component={BuyerNotify} />
      <stack.Screen name="answer" component={ViewQueryAnswer} />
      <stack.Screen name="query" component={UserQuery} />
      <stack.Screen
        name="item-list"
        component={CategoryListItem}
        options={({ route }) => ({ title: route.params.category })}
      />
    </stack.Navigator>
  );
}
