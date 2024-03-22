import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import QueryBox from './QueryBox' // Import the RequestBox component
import { query } from 'firebase/firestore'

const Queries = () => {
  // Dummy data for requests (business names)
  const queries = [
    { id: 1, QueryName: 'QueryName 1' },
    { id: 2, QueryName: 'QueryName 2' },
    { id: 3, QueryName: 'QueryName 3' },
    { id: 4, QueryName: 'QueryName 4' },
    { id: 5, QueryName: 'QueryName 5' },
    { id: 6, QueryName: 'QueryName 6' },
  ]

  const handleQueryPress = (QueryName) => {
    // Handle press for a request (e.g., navigate to details screen)
    console.log('Pressed on query:', QueryName)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Queries</Text>
      <ScrollView style={styles.scrollContainer}>
        {queries.map((query) => (
          <QueryBox
            key={query.id}
            QueryName={query.QueryName}
            onPress={() => handleQueryPress(query.QueryName)}
          />
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  scrollContainer: {
    flex: 1,
  },
})

export default Queries
