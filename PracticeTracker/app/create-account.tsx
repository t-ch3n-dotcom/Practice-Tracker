import GoogleButton from "@/components/googleButton";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { StyleSheet, View } from "react-native";
import Divider from "../components/divider";
import AuthForm from "../components/form";
import Input from "../components/input";
import { auth } from "../firebaseConfig";

export default function CreateAccount() {
  const passwordRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[^A-Za-z0-9]).{8,}/;

  const onSubmit = async (data: any, methods: any) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      console.log("Account created:" + userCredential.user.email);
    } catch (error: any) {
      if (!passwordRegex.test(data.password)) {
        methods.setError("password", {
          type: "manual",
          message:
            "Password should be at least 8 characters long and contain an uppercase character, a lowercase character, a number, and a special character.",
        });
      }
      switch (error.code) {
        case "auth/email-already-in-use":
          methods.setError("email", {
            type: "manual",
            message: "This email is already in use.",
          });
          break;
        case "auth/invalid-email":
          methods.setError("email", {
            type: "manual",
            message: "This email is invalid.",
          });
          break;
      }
    }
  };

  return (
    <View style={styles.center}>
      <AuthForm action="SIGN UP" onSubmit={onSubmit}>
        <Input name="email" secure={false} />
        <Input name="password" secure={true} />
      </AuthForm>
      <Divider></Divider>
      <GoogleButton></GoogleButton>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
