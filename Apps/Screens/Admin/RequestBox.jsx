import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Make sure to install @expo/vector-icons

const RequestBox = ({ businessName, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} className="flex flex-row">
      <Text >{businessName}</Text>
      <Text >Reported By - ....by user </Text>
      {/* <Ionicons name="chevron-forward" size={24} color="black" /> */}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "col",
    alignItems: "flex-start",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  businessName: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default RequestBox;
