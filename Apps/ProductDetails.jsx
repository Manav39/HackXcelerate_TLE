import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Button,
  ToastAndroid
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
      ToastAndroid.show('product added to cart successfully!', ToastAndroid.SHORT);
      console.log("User added to Firestore successfully!");
    } catch (error) {
      ToastAndroid.show('Error! Please try again', ToastAndroid.SHORT);
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
        <TouchableOpacity onPress={decreaseQuantity} style={styles.quantityButton}>
          <Text>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantity}>{quantity}</Text>
        <TouchableOpacity onPress={increaseQuantity} style={styles.quantityButton}>
          <Text>+</Text>
        </TouchableOpacity>
      </View>
      <Button
        title="Add to Cart"
        onPress={addToCart}
        buttonStyle={styles.addButton} 
      />
    </View>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: "50%",
    marginHorizontal: 20,
    justifyContent: "center",
    backgroundColor: 'white', 
    height: "50%",
    borderRadius: 10, 
    borderWidth: 1, 
    borderColor: '#FC6736', 
    marginBottom: 10, 
    shadowColor: '#ccc', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2, 
  },
  image: {
    width: '100%', 
    height: 200, 
  },
  details: {
    padding: 10, 
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    marginBottom: 5,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  quantityLabel: {
    marginRight: 10,
  },
  quantityButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    backgroundColor: '#FC6736', 
  },
  quantity: {
    marginHorizontal: 10,
  },
  addButton: {
    backgroundColor: '#FC6736', 
    borderRadius: 5, 
  },
});

export default ProductDetails;
