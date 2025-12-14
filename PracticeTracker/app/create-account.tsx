import { createUserWithEmailAndPassword } from "firebase/auth";
import { StyleSheet, View } from "react-native";
import AuthForm from "../components/form";
import Input from "../components/input";
import { auth } from "../firebaseConfig";

export default function CreateAccount() {
  const onSubmit = async (data: any, methods: any) => {
    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password);
    } catch (error: any) {
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
        case "auth/weak-password":
          methods.setError("password", {
            type: "manual",
            message: "Password should be at least 8 characters long and contain an uppercase character, a lowercase character, a number, and a special character.",
          });
          break;
      }
    }
    
  };

  return (
    <View style={styles.center}>
      <AuthForm action="SIGN UP" onSubmit={onSubmit}>
        <Input name="email" />
        <Input name="password" />
      </AuthForm>
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
