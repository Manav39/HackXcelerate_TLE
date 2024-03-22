import React, { useState } from "react";
import { View, TextInput, Button, Alert } from "react-native";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";
import { useAuth } from "../../context";

const UserQuery = () => {
  const { email } = useAuth();
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async () => {
    await addDoc(collection(db, "userquery"), {
      subject: subject,
      description: description,
      useremail: email,
    });
  };

  return (
    <View
      style={{ padding: 20 }}
      className="flex flex-col mt-auto mb-auto justify-center"
    >
      <TextInput
        placeholder="Subject"
        onChangeText={(text) => setSubject(text)}
        value={subject}
        style={{
          marginBottom: 10,
          borderBottomWidth: 1,
          borderBottomColor: "#ccc",
        }}
      />
      <TextInput
        placeholder="Description"
        onChangeText={(text) => setDescription(text)}
        value={description}
        multiline
        numberOfLines={4}
        style={{
          marginBottom: 20,
          borderBottomWidth: 1,
          borderBottomColor: "#ccc",
        }}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default UserQuery;
