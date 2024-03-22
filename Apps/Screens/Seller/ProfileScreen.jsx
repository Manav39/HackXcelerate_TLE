import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import { getDocs, collection, query, where } from "firebase/firestore";
import { useAuth } from "../../context";

export default function ProfileScreen() {
  const [username, setUsername] = useState("");
  const [businessName, setBusinessName] = useState("");
  

  return (
    <View style={{ padding: 20 }} className="mt-[100px]">
      <Text style={{ fontSize: 20, marginBottom: 10 }}>User Name</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 10,
          paddingHorizontal: 10,
          borderRadius: 10,
        }}
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />

      <Text style={{ fontSize: 20, marginBottom: 10 }}>Business Name</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 10,
          paddingHorizontal: 10,
          borderRadius: 10,
        }}
        placeholder="Business Name"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
    </View>
  );
}
