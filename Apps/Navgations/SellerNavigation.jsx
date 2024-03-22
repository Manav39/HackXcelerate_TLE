import React from "react";
import HomeScreen from "../Screens/Buyer/HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CartScreen from "../Screens/Buyer/CartScreen";
import ProfileScreen from "../Screens/Buyer/ProfileScreen";
import ExploreScreen from "../Screens/Buyer/ExploreScreen";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Text } from "react-native";
import AddProduct from "../Screens/Seller/AddProduct";
const Tab = createBottomTabNavigator();

export default function SellerNavigation() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color, fontSize: 12, marginBottom: 3 }}>
              Home
            </Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="explore"
        component={ExploreScreen}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color, fontSize: 12, marginBottom: 3 }}>
              Explore
            </Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="addprod"
        component={AddProduct}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color, fontSize: 12, marginBottom: 3 }}>
              Add Product
            </Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="add-circle-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color, fontSize: 12, marginBottom: 3 }}>
              Profile
            </Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-sharp" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
