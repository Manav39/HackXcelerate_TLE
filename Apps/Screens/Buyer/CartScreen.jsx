import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { getDocs, collection, query, where } from "firebase/firestore";
import { useAuth } from "../../context";
export default function CartScreen() {
  const { email } = useAuth();
  const [items, setItems] = useState([]);
  useEffect(() => {
    getItems();
  }, []);
  const getItems = async () => {
    setItems("");
    const q = query(collection(db, "carts"), where("email", "==", email));
    const snap = await getDocs(q);
    snap.forEach((doc) => {
      setItems((items) => [...items, doc.data()]);
    });
  };
  return (
    <View className="mt-20">
      <Text>Cart </Text>
      {items &&
        items.map((item, index) => (
          <TouchableOpacity
            key={index}
            // onPress={() => handleProductPress(product)}
          >
            <Image
              source={{
                uri: "https://st5.depositphotos.com/6823598/67614/v/450/depositphotos_676149906-stock-illustration-jar-preserved-vegetables-can-pickled.jpg",
              }}
              className="w-10 h-2"
            />
            <Text> {item.productName.productName}</Text>
            <Text>{item.quantity}</Text>
            <Text>{item.productName.price}</Text>
          </TouchableOpacity>
        ))}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    marginTop: "20px",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  details: {
    flex: 1,
    padding: 10,
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    color: "#888",
  },
});
