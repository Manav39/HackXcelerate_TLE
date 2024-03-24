import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const SellerDashboard = () => {
  return (
    <View>
      <View style={styles.container}>
        <View>
          <Text style={styles.headingText}>Dashboard</Text>
        </View>

        <View style={styles.overallInfo}>
          <View style={styles.innerContain}>
            <View style={styles.orders}>
              <Text>10</Text>
              <Text>Orders</Text>
            </View>

            <View style={styles.gross}>
              <Text>₹10000</Text>
              <Text>gross</Text>
            </View>

            <View style={styles.pending}>
              <Text>5</Text>
              <Text>pending</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={{ backgroundColor: '#ffffff', borderRadius: 10, padding: 15, height: 600 }}>
        <Text style={{ color: 'black', fontSize: 24, paddingBottom: 5 }}>All Orders</Text>

        <View style={styles.order1}>
          <View>
            <Image style={{ height: 50, width: 50, borderRadius: 50 }} source={{
              uri: 'https://th.bing.com/th/id/OIP.8XndbfQWVrtefJw4MJyOsAAAAA?rs=1&pid=ImgDetMain'
            }}></Image>
          </View>

          <View>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Lavang</Text>
            {/* <Text style={{ fontSize: 15 }}>Good for health</Text> */}
          </View>

          <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text style={{ textAlign: 'right' }}>₹140.50/5kg</Text>
          </View>
        </View>

        <View style={styles.order1}>
          <View>
            <Image style={{ height: 50, width: 50, borderRadius: 50 }} source={{
              uri: 'https://www.justgotochef.com/uploads/1565337647-Coriander%20powderLanding.png'
            }}></Image>
          </View>

          <View>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Coriander Powder</Text>
            {/* <Text style={{ fontSize: 15 }}>Good for health</Text> */}
          </View>

          <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text style={{ textAlign: 'right' }}>₹20.0/1kg</Text>
          </View>
        </View>

        <View style={styles.order1}>
          <View>
            <Image style={{ height: 50, width: 50, borderRadius: 50 }} source={{
              uri: 'https://th.bing.com/th/id/R.9675a0e49b2c55e371b3891fcb19e785?rik=OmG3fyDiWMJlBQ&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2fe%2fe6%2fFenugreek_seeds.jpg&ehk=gEimYybmoyoAeWpqH0AthqyGM%2bcnHzNAH6k4riB5K6o%3d&risl=&pid=ImgRaw&r=0'
            }}></Image>
          </View>

          <View>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Fenugeek Seeds</Text>
            {/* <Text style={{ fontSize: 15 }}>Good for health</Text> */}
          </View>

          <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text style={{ textAlign: 'right' }}>40.50/100g</Text>
          </View>
        </View>

        <View style={styles.order1}>
          <View>
            <Image style={{ height: 50, width: 50, borderRadius: 50 }} source={{
              uri: 'https://th.bing.com/th/id/OIP.Z7EJ_faBO2h3L9mTgfkx2gHaJ4?rs=1&pid=ImgDetMain'
            }}></Image>
          </View>

          <View>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Lemon Chutney</Text>
            {/* <Text style={{ fontSize: 15 }}>Good for health</Text> */}
          </View>

          <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text style={{ textAlign: 'right' }}>₹40.50/100g</Text>
          </View>
        </View>

        <View style={styles.order1}>
          <View>
            <Image style={{ height: 50, width: 50, borderRadius: 50 }} source={{
              uri: 'https://th.bing.com/th/id/OIP.emvemHvP9Tn0mqBJT-uAAQHaE8?rs=1&pid=ImgDetMain'
            }}></Image>
          </View>

          <View>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Cumin Seeds</Text>
            {/* <Text style={{ fontSize: 15 }}>Good for health</Text> */}
          </View>

          <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text style={{ textAlign: 'right' }}>₹20/0.5kg</Text>
          </View>
        </View>

        <View style={styles.order1}>
          <View>
            <Image style={{ height: 50, width: 50, borderRadius: 50 }} source={{
              uri: 'https://www.dwarakaorganic.com/wp-content/uploads/2022/02/Bhel-Puri-2000x1333.jpg'
            }}></Image>
          </View>

          <View>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Chaat Masala</Text>
            {/* <Text style={{ fontSize: 15 }}>Good for health</Text> */}
          </View>

          <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text style={{ textAlign: 'right' }}>₹90/bottle</Text>
          </View>
        </View>
        

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 50,
    paddingHorizontal: 50,
    color: 'white',
  },
  container: {
    height: 200,
    color: 'white',
    backgroundColor: '#FC6736',
  },
  overallInfo: {
    marginTop: 5,
    backgroundColor: '#FC6736',
    padding: 25,
    flex: 1,
  },
  innerContain: {
    height: 85,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 5,
    gap: 30,
  },
  orders: {
    borderRightWidth: 1,
    borderColor: 'grey',
    paddingRight: 20,
  },
  gross: {
    textAlign: 'center',
    borderRightWidth: 1,
    borderColor: 'grey',
    paddingRight: 20,
    paddingLeft: 10,
  },
  pending: {
    paddingLeft: 10,
    textAlign: 'center',
  },
  order1: {
    alignItems: 'center',
    marginTop: 7,
    borderRadius: 30,
    padding: 5,
    flex: 1,
    flexDirection: 'row',
    gap: 20,
  },
  productName: {},
  productDescription: {},
});

export default SellerDashboard;
