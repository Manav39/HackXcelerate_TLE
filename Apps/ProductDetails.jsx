import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Button,
} from "react-native";
import { useAuth } from "./context";
import { db } from "./firebase";
import TabNavigation from "./Navgations/TabNavigation";

const ProductDetails = ({ route }) => {
  const { email, userName, role } = useAuth();
  const { product } = route.params;
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const addToCart = async () => {
    // Add logic to add the product to the cart
    try {
      // Get a reference to the 'users' collection
      await addDoc(collection(db, "carts"), {
        username: userName,
        email: email,
        role: role,
        productName: product,
        quantity: quantity,
      });

      console.log("User added to Firestore successfully!");
    } catch (error) {
      console.error("Error adding user to Firestore: ", error);
    }

    console.log(`Added ${quantity} ${product.productName} to cart`);
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.imageURL }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.productName}>{product.productName}</Text>
        <Text style={styles.price}>Price: ${product.price}</Text>
        <View style={styles.quantityContainer}>
          <Text style={styles.quantityLabel}>Quantity:</Text>
          <TouchableOpacity
            onPress={decreaseQuantity}
            style={styles.quantityButton}
          >
            <Text>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantity}>{quantity}</Text>
          <TouchableOpacity
            onPress={increaseQuantity}
            style={styles.quantityButton}
          >
            <Text>+</Text>
          </TouchableOpacity>
        </View>
        <Button title="Add to Cart" onPress={addToCart} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 8,
    marginBottom: 20,
  },
  details: {
    alignItems: "center",
  },
  productName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    marginBottom: 5,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  quantityLabel: {
    fontSize: 18,
    marginRight: 10,
  },
  quantityButton: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 5,
  },
  quantity: {
    fontSize: 18,
    marginHorizontal: 10,
  },
});

export default ProductDetails;
