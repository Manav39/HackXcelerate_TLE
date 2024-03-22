import React, { useState, useEffect } from "react";
import { View, Text, TextInput, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import { useAuth } from "../../context";
import * as Location from 'expo-location';
import { FirebaseAuth } from "../../firebase";
import { addDoc, collection } from "firebase/firestore";
import { db, storage } from "../../firebase";
import * as ImagePicker from 'expo-image-picker';

import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default function ProfileScreen() {
  const { userName, email } = useAuth();
  const [businessName, setBusinessName] = useState("");
  const [address, setAddress] = useState("");
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");

  const [location, setLocation] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const [phoneNumber, setPhoneNumber] = useState('');
  const { waitingForConfirmation, setWaitingForConfirmation } = useAuth();

  useEffect(() => {
    const requestLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      try {
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
        setLatitude(location.coords.latitude);
        setLongitude(location.coords.longitude);
      } catch (error) {
        console.error('Error getting location:', error);
      }
    };

    requestLocation();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const waitForConfirmation = async () => {
    try {
      const resp = await fetch(image);
      const blob = await resp.blob();
      const storageRef = ref(storage, "SellerImages/" + ".jpg")
      const bytes = await uploadBytes(storageRef, blob);
      const downloadUrl = await getDownloadURL(storageRef);
      const u = downloadUrl;
      setUrl(u);

      await addDoc(collection(db, "verify"), {
        userName: userName,
        businessName: businessName,
        email: email,
        imageUrl: u,
        phoneNumber: phoneNumber,
        latitude: latitude,
        longitude: longitude,
      });

      console.log("seller Application added to Firestore successfully!");
    } catch (error) {
      console.error("Error adding seller application to Firestore: ", error);
    }
  };

  return (
    <ScrollView style={{ padding: 20, backgroundColor: '#ffffff' }} className="mt-[100px]">
      {waitingForConfirmation && (
        <View style={styles.card}>
          <Text style={styles.text}>Waiting for confirmation by Admin</Text>
          <Entypo name="hour-glass" size={35} style={{ alignSelf: "center", marginVertical: 20 }} />
        </View>
      )}

      {!waitingForConfirmation && (
        <>
          <Text style={{ fontSize: 20, marginBottom: 1 }}>User Name</Text>
          {userName && (
            <TextInput
              style={{
                height: 40,
                borderColor: "#FC6736",
                borderWidth: 1,
                marginBottom: 10,
                paddingHorizontal: 10,
                borderRadius: 10,
                fontWeight: "bold",
              }}
              placeholder="Username"
              value={`${userName}`}
              editable={false}
            />
          )}

          <Text style={{ fontSize: 20, marginBottom: 10 }}>Profile Image</Text>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: "#FC6736", borderRadius: 8 }]}
            onPress={pickImage}
          >
            <Text style={{ color: "#ffffff", textAlign: "center" }}>Pick an image from camera roll</Text>
          </TouchableOpacity>
          {image && (
            <Image source={{ uri: image }} style={{ width: 200, height: 200, borderRadius: 10, marginVertical: 5 }} />
          )}

          <Text style={{ fontSize: 20, marginBottom: 10, marginTop: 7 }}>Email</Text>
          <TextInput
            style={{
              height: 40,
              borderColor: "#FC6736",
              borderWidth: 1,
              marginBottom: 10,
              paddingHorizontal: 10,
              borderRadius: 10,
              fontWeight: "bold",
            }}
            placeholder="Email"
            value={`${email}`}
            editable={false}
          />

          <Text style={{ fontSize: 20, marginBottom: 10 }}>Business Name</Text>
          <TextInput
            style={{
              height: 40,
              borderColor: "#FC6736",
              borderWidth: 1,
              marginBottom: 10,
              paddingHorizontal: 10,
              borderRadius: 10,
            }}
            placeholder="Business Name"
            value={businessName}
            onChangeText={(text) => setBusinessName(text)}
          />

          <Text style={{ fontSize: 20, marginBottom: 10 }}>Phone Number</Text>
          <TextInput
            style={{
              height: 40,
              borderColor: "#FC6736",
              borderWidth: 1,
              marginBottom: 10,
              paddingHorizontal: 10,
              borderRadius: 10,
            }}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            placeholder="Phone Number"
            keyboardType="phone-pad"
          />

          <Text style={{ fontSize: 20, marginBottom: 10 }}>Address</Text>
          <TextInput
            style={{
              height: 40,
              borderColor: "#FC6736",
              borderWidth: 1,
              marginBottom: 10,
              paddingHorizontal: 10,
              borderRadius: 10,
            }}
            value={address}
            onChangeText={setAddress}
            placeholder="Business Address"
          />

          <View style={{ marginVertical: 20 }}>
            <TouchableOpacity
              onPress={waitForConfirmation}
              style={[styles.button, { backgroundColor: "#FC6736", borderRadius: 8 }]}
            >
              <Text style={{ color: "#ffffff", textAlign: "center" }}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  text: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#FC6736",
    paddingVertical: 15,
    paddingHorizontal: 35,
    borderRadius: 10,
    marginBottom: 10,
  },
});

