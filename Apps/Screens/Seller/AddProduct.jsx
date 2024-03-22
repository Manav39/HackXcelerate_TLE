import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { doc, addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";
import { useAuth } from "../../context";
const AddProduct = () => {
  const { email, role, userName } = useAuth();
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  const handleAddProduct = async () => {
    try {
      await addDoc(collection(db, "products"), {
        productName: productName,
        quantity: quantity,
        imageURL: imageURL,
        category: category,
        email: email,
        userName: userName,
        price: price,
      });

      console.log("User added to Firestore successfully!");
    } catch (error) {
      console.error("Error adding user to Firestore: ", error);
    }
    console.log("Product Name:", productName);
    console.log("Quantity:", quantity);
    console.log("Image URL:", imageURL);
    console.log("Category:", category);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add Product</Text>
      <TextInput
        style={styles.input}
        placeholder="Product Name"
        value={productName}
        onChangeText={setProductName}
      />
      <TextInput
        style={styles.input}
        placeholder="Quantity"
        value={quantity}
        onChangeText={setQuantity}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Image URL"
        value={imageURL}
        onChangeText={setImageURL}
      />
      <TextInput
        style={styles.input}
        placeholder="Category"
        value={category}
        onChangeText={setCategory}
      />
      <TextInput
        style={styles.input}
        placeholder="Price"
        value={price}
        onChangeText={setPrice}
      />
      <Button title="Add Product" onPress={handleAddProduct} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default AddProduct;
