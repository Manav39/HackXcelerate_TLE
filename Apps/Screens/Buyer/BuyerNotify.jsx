import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const BuyerNotify = () => {
  const navigation = useNavigation();
  // Dummy data for statistics
  const statsData = [
    { label: "Requests", value: 25 },
    { label: "Sellers", value: 10 },
    { label: "Products", value: 50 },
    { label: "Users", value: 100 },
    { label: "Revenue", value: "$5000" },
    { label: "Messages", value: 30 },
  ];

  return (
    <View style={styles.container} className="mt-10">
      <Text style={styles.heading}>Notifications</Text>
      <View style={styles.statsContainer}>
        {statsData.map((item, index) => (
          <View style={styles.statBox} key={index}>
            <Text style={styles.statLabel}>{item.label}</Text>
            <Text style={styles.statValue}>{item.value}</Text>
          </View>
        ))}
      </View>
      <View style={styles.statBox}>
        <Text style={styles.statLabel}>Have any queries</Text>
        <TouchableOpacity
          style={styles.statValue}
          onPress={() => navigation.navigate("query")}
        >
          <Text>Redirect</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f0f0f0",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  statsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  statBox: {
    width: "48%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  statLabel: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  statValue: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#007bff",
  },
});

export default BuyerNotify;
