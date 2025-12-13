import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import { auth } from "../firebaseConfig";

const isLoggedIn = auth.currentUser != null;

export default function RootLayout() {
  return (
    <>
      <StatusBar/>
      <Stack>
        <Stack.Protected guard={isLoggedIn}>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack.Protected>
        <Stack.Protected guard={!isLoggedIn}>
          <Stack.Screen name="create-account" options={{headerShown: false}} />
          <Stack.Screen name="sign-in" options={{headerShown: false}} />
        </Stack.Protected>
      </Stack>
    </>
    
  );
}