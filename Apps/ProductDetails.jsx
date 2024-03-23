import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  TextInput,
  Button,
  ToastAndroid,
  ScrollView,
} from "react-native";
import { useAuth } from "./context";
import { db } from "./firebase";
import TabNavigation from "./Navgations/TabNavigation";
import { MaterialIcons } from "@expo/vector-icons";

const ProductDetails = ({ route }) => {
  const [editModalVisible, setEditModalVisible] = useState(false);
  const { email, userName, role } = useAuth();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const { product } = route.params;
  const [quantity, setQuantity] = useState(1);
  const { category } = product.category;

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
      ToastAndroid.show(
        "product added to cart successfully!",
        ToastAndroid.SHORT
      );
      console.log("User added to Firestore successfully!");
    } catch (error) {
      ToastAndroid.show("Error! Please try again", ToastAndroid.SHORT);
      console.error("Error adding user to Firestore: ", error);
    }

    console.log(`Added ${quantity} ${product.productName} to cart`);
  };

  const handlePlusClick = () => {
    navigation.navigate("AddProduct");
  };

  const handleDelete = (productId) => {
    // Implement delete logic here
    console.log("Delete product with ID:", productId);
  };

  const handleEdit = (product) => {
    setEditModalVisible(true);
  };

  const handleSaveEdit = async () => {
    try {
      await addDoc(collection(db, "reports"), {
        title: title,
        description: desc,
        product: product,
        email: email,
      });

      setEditModalVisible(false);
      console.log("Report Submitted");
    } catch (err) {
      console.error(err);
    }
  };

  const handleReport = () => {
    setEditModalVisible(true);
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <Image source={{ uri: product.imageURL }} style={styles.image} />
        <View style={styles.details}>
          <Text style={styles.productName}>{product.productName}</Text>
          <Text style={styles.price}>Price: ₹{product.price}</Text>
          <View style={styles.quantityContainer}>
            <Text style={styles.quantityLabel}>Quantity:</Text>
            <TouchableOpacity
              onPress={decreaseQuantity}
              style={styles.quantityButton}
            >
              <Text style={{color:'#ffffff'}}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantity}>{quantity}</Text>
            <TouchableOpacity
              onPress={increaseQuantity}
              style={styles.quantityButton}
            >
              <Text style={{color:'#ffffff'}}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="ml-40"
              onPress={() => setEditModalVisible(true)}
            >
              <MaterialIcons name="report" size={30} color="red" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
  onPress={addToCart}
  style={[styles.addButton, { backgroundColor: "#FC6736" }]}
>
  <Text style={styles.addButtonText}>Add to Cart</Text>
</TouchableOpacity>

        </View>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={editModalVisible}
        onRequestClose={() => setEditModalVisible(false)}
      >
        <View style={styles.modalView}>
          <ScrollView contentContainerStyle={styles.modalContent}>
            <Text style={styles.modalHeaderText}>Report Title</Text>
            <TextInput
              style={styles.input}
              placeholder="Title"
              onChangeText={(text) => setTitle(text)}
              value={title}
            />
            <Text style={styles.modalHeaderText}>Report Description</Text>
            <TextInput
              style={styles.input}
              placeholder="Description"
              onChangeText={(text) => setDesc(text)}
              value={desc}
            />
            <View style={styles.buttonContainer}>
              <Button title="Submit" onPress={handleSaveEdit} />
              <Button
                title="Cancel"
                onPress={() => setEditModalVisible(false)}
              />
            </View>
          </ScrollView>
        </View>
      </Modal>
      <View style={{ alignSelf: "center" }}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>
          Recommended Products
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: "15%",
    padding: 10,
    marginHorizontal: 20,
    justifyContent: "center",
    backgroundColor: "white",
    height: "50%",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#FC6736",
    marginBottom: 10,
    shadowColor: "#ccc",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  details: {
    padding: 10,
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  price: {
    fontSize: 16,
    marginBottom: 5,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  quantityLabel: {
    marginRight: 10,
  },
  quantityButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    backgroundColor: "#FC6736",
  },
  quantity: {
    marginHorizontal: 10,
  },
  addButton: {
    backgroundColor: "transparent",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#FC6736",
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  addButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
  modalView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 20,
    width: 350,
    height: 300,
    marginTop: 200,
    marginHorizontal: 20,
    maxHeight: "80%",
  },
  modalHeaderText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20,
  },
});


export default ProductDetails;
