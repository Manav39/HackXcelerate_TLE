import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ToastAndroid } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useAuth } from "../../context";
import { collection, query, where, getDocs, deleteDoc, addDoc } from 'firebase/firestore';
import { db } from "../../firebase";

export default function VerifyDetail() {
  const { params } = useRoute();
  const { setWaitingForConfirmation, setIsApproved } = useAuth();

  const handleAccept = async() => {
    // Handle accept logic
    setWaitingForConfirmation(false);
    setIsApproved(true);
    console.log("Accepted:", params.item.userName);

    try{
      const productsCollection = collection(db, 'verify');
      const q = query(productsCollection, where("email", '==', params.item.email));
      const snapshot = await getDocs(q);

      if (snapshot.empty) {
        console.log("No matching documents found.");
        return; 
      }
      snapshot.forEach(async (doc) => {
        await deleteDoc(doc.ref);
      });
      ToastAndroid.show("User accepted successfully", ToastAndroid.SHORT)

      // addind seller to users
      await addDoc(collection(db, "users"), {
        username: params.item.userName,
        businessName: params.item.businessName,
        email: params.item.email,
        imageUrl: params.item.imageUrl,
        phoneNumber:  params.item.phoneNumber,
        latitude:  params.item.latitude,
        longitude:  params.item.longitude,
      });
      ToastAndroid.show(
        "Seller added successfully!",
        ToastAndroid.SHORT
      );
      console.log("Seller added to users successfully!");
      console.log("Matching documents deleted successfully!");
    }catch(err) {
      console.log(err);
    }

  };

  const handleReject = () => {
    // Handle reject logic
    console.log("Rejected:", params.item.userName);
  };

  return (
    <View style={styles.container}>
      <View style={styles.userCard}>
        <View style={styles.userInfo}>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.info}>{params.item.userName}</Text>

          <Text style={styles.label}>Email:</Text>
          <Text style={styles.info}>{params.item.email}</Text>

          <Text style={styles.label}>Phone Number:</Text>
          <Text style={styles.info}>{params.item.phoneNumber}</Text>

          <Text style={styles.label}>Business Name:</Text>
          <Text style={styles.info}>{params.item.businessName}</Text>

          <Text style={{ fontSize: 15, fontWeight: 'bold', marginTop: 10 }}>Verification Document:</Text>
          <Image
            source={{ uri: params.item.imageUrl }}
            style={styles.userImage}
          />
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.acceptButton]} onPress={handleAccept}>
          <Text style={styles.buttonText}>Accept</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.rejectButton]} onPress={handleReject}>
          <Text style={styles.buttonText}>Reject</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  userCard: {
    flexDirection: "row",
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    padding: 15,
    width: "100%",
    elevation: 3,
  },
  userImage: {
    width: 200,
    height: 200,
  },
  userInfo: {
    flex: 1,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  info: {
    fontSize: 16,
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: "100%",
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: "40%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  acceptButton: {
    backgroundColor: "#4CAF50",
  },
  rejectButton: {
    backgroundColor: "#F44336",
  },
});
