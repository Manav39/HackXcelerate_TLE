import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SellerHome from "../Screens/Seller/SellerHome";
import SellerNotify from "../Screens/Seller/SellerNotify";

const stack = createNativeStackNavigator();

export default function SellerHomeStackNavigation() {
  return (
    <stack.Navigator screenOptions={{ headerShown: false }}>
      <stack.Screen name="homes" component={SellerHome} />
      <stack.Screen name="notifyseller" component={SellerNotify} />
    </stack.Navigator>
  );
}
