import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const RequestBox = ({ businessName, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      className="flex flex-row"
    >
      <View style={{ flexDirection: 'row', height:100, justifyContent: 'center', alignItems: 'center' }}>
        <Image source={require("../../../assets/images/signup.png")} style={styles.image} />
        <View style={{ flexDirection: 'column' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{businessName}</Text>
          <Text style={{ fontSize: 15 }}>Requested By - ....by seller </Text>
        </View>
        <View style={{ flexDirection: 'column', marginTop:20, backgroundColor: '#007bff', height: 25, width: 25, borderRadius:20 }}>
          <Ionicons name="chevron-forward" size={24} color="white" />
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'col',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#007bff',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderWidth: 2,
    borderColor: "#007bff", 
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginBottom: 20,
  },
})

export default RequestBox
