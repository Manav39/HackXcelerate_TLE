import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { db } from "../firebase";
import { getDocs, collection, query, where } from "firebase/firestore";
import { useAuth } from "../context";
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  Image,
  ToastAndroid,
} from "react-native";

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
        ToastAndroid.show("Error! Please try again later", ToastAndroid.SHORT);
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
          ToastAndroid.show("Logged in successfully!", ToastAndroid.SHORT);
          setRoleUser(doc.data().role);
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={{ marginLeft: 50 }}>
          <Image
            source={require("../../assets/images/login.png")}
            style={styles.image}
          />
        </View>
        <Text style={styles.heading}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={(text) => setEmailUser(text)}
        />
        <TextInput
          style={styles.input}
          secureTextEntry
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <Button color="#FC6736" title="Login" onPress={handleLogin} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  content: {
    width: "80%", // Adjust as needed
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 8,
    marginBottom: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  picker: {
    height: 50,
    marginBottom: 10,
  },
  footerText: {
    textAlign: "center",
    marginTop: 20,
  },
  link: {
    color: "blue",
    textDecorationLine: "underline",
  },
});
