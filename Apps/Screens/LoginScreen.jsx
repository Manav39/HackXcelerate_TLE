import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { db } from "../firebase";
import { getDocs, collection, query, where } from "firebase/firestore";
import { useAuth } from "../context";

export default function LoginScreen() {
  const { setRole, setUserName, setEmail } = useAuth();
  const navigation = useNavigation();
  const [password, setPassword] = useState("");
  const [email, setEmailUser] = useState("");
  const [role, setRoleUser] = useState("");

  const handleLogin = async () => {
    try {
      const q = query(collection(db, "users"), where("email", "==", email));
      const snapshot = await getDocs(q);
      if (snapshot.empty) {
        console.log("Failed to log in");
      } else {
        snapshot.forEach((doc) => {
          setEmail(doc.data().email);
          setUserName(doc.data().username);
          setRole(doc.data().role);
          console.log(doc.data().role);
          if (doc.data().role === "Buyer") {
            navigation.navigate("Buyer");
          } else if (doc.data().role === "Admin") {
            navigation.navigate("Admin");
          } else {
            navigation.navigate("Seller");
          }
          setRoleUser(doc.data().role);
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={{ padding: 20 }} className="flex mt-[240px]">
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Login</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 10,
          paddingHorizontal: 10,
        }}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmailUser(text)}
      />
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 10,
          paddingHorizontal: 10,
        }}
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}
