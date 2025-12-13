import { StyleSheet, View } from "react-native";
import Form from "../components/form";
import Input from "../components/input";

export default function CreateAccount() {
  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <View style={styles.center}>
      <Form action="Sign Up" onSubmit={onSubmit}>
        <Input name="email" />
        <Input name="password" />
      </Form>
    </View>
  );
}

const styles = StyleSheet.create({
  center : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

