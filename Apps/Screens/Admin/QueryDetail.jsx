
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";

export default function QueryDetail() {
  const { params } = useRoute();
  const [response, setResponse] = useState('');

  const handleSend = () => {
    // Handle sending the response, you can implement this logic
    console.log('Sending response:', response);
    // Reset the response input
    setResponse('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.subject}>Subject - {params.item.subject}</Text>
      <Text style={styles.description}>Description - {params.item.description}</Text>
      <Text style={styles.user}>
        Queried by: {params.item.useremail}
      </Text>
      <TextInput
        style={styles.responseInput}
        placeholder="Write your response here..."
        multiline
        numberOfLines={4}
        value={response}
        onChangeText={setResponse}
      />
      <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
        <Text style={styles.sendButtonText}>Send</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  subject: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  user: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  responseInput: {
    marginTop:10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    fontSize: 16,
    minHeight: 100, // Minimum height for the input
  },
  sendButton: {
    backgroundColor: '#FC6736',
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
