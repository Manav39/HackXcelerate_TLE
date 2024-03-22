import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import ReportBox from "./ReportBox"; // Import the RequestBox component

const Reports = () => {
  // Dummy data for requests (business names)
  const reports = [
    { id: 1, businessName: "Business 1" },
    { id: 2, businessName: "Business 2" },
    { id: 3, businessName: "Business 3" },
    { id: 4, businessName: "Business 4" },
    { id: 5, businessName: "Business 5" },
    { id: 6, businessName: "Business 6" },
  ];

  const handleReportPress = (businessName) => {
    // Handle press for a request (e.g., navigate to details screen)
    console.log("Pressed on request:", businessName);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Reports</Text>
      <ScrollView style={styles.scrollContainer}>
        {reports.map((report) => (
          <ReportBox
            key={report.id}
            businessName={report.businessName}
            onPress={() => handleReportPress(report.businessName)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#ffffff",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  scrollContainer: {
    flex: 1,
  },
});

export default Reports;

