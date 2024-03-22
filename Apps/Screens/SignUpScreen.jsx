import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FirebaseAuth } from "../firebase";
import { db } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, addDoc, collection } from "firebase/firestore";
import { Picker } from "@react-native-picker/picker";

export default function SignUpScreen() {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Buyer");

  const handleSignUp = async () => {
    // Implement sign up logic here
    await createUserWithEmailAndPassword(FirebaseAuth, email, password)
      .then((cred) => {
        console.log("Success");
      })
      .catch((err) => console.error(err));

    try {
      // Get a reference to the 'users' collection
      await addDoc(collection(db, "users"), {
        username: username,
        email: email,
        role: role,
      });

      console.log("User added to Firestore successfully!");
    } catch (error) {
      console.error("Error adding user to Firestore: ", error);
    }
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Role:", role);
    console.log("Password:", password);
  };

  return (
    <View style={{ padding: 20 }} className="mt-[240px]">
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Sign Up</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 10,
          paddingHorizontal: 10,
        }}
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
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
        onChangeText={(text) => setEmail(text)}
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
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      {/* <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 10,
          paddingHorizontal: 10,
        }}
        placeholder="Role"
        value={role}
        onChangeText={(text) => setRole(text)}
      /> */}
      <Picker
        selectedValue={role}
        onValueChange={(itemValue, itemIndex) => setRole(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Buyer" value="Buyer" />
        <Picker.Item label="Seller" value="Seller" />
        <Picker.Item label="Admin" value="Admin" />
      </Picker>
      <Button title="Sign Up" onPress={handleSignUp} />
      <Text>Already a User then</Text>
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate("Login")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  picker: {
    width: 200,
    height: 50,
  },
});
