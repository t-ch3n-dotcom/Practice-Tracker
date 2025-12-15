import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { Pressable, Text } from "react-native";
import { auth } from "../firebaseConfig";


export default function GoogleButton() {
    return (<Pressable onPress={() => (signInWithRedirect(auth, new GoogleAuthProvider()))}>
        <Text>Google</Text></Pressable>);
}