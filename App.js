import SplashScreen from "./Apps/Screens/SplashScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./Apps/Screens/LoginScreen";
import SignUpScreen from "./Apps/Screens/SignUpScreen";
import BuyerScreen from "./Apps/Screens/BuyerScreen";
import AdminScreen from "./Apps/Screens/AdminScreen";
import SellerScreen from "./Apps/Screens/SellerScreen";
import { AuthProvider } from "./Apps/context";
import ProductDetails from "./Apps/ProductDetails";
const stack = createNativeStackNavigator();

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <stack.Navigator
          initialRouteName="Splash"
          screenOptions={{ headerShown: false }}
        >
          <stack.Screen name="Splash" component={SplashScreen} />
          <stack.Screen name="Login" component={LoginScreen} />
          <stack.Screen name="SignUp" component={SignUpScreen} />
          <stack.Screen name="Buyer" component={BuyerScreen} />
          <stack.Screen name="Admin" component={AdminScreen} />
          <stack.Screen name="Seller" component={SellerScreen} />
        </stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
