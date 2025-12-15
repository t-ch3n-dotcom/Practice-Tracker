import { View } from "react-native";
import Form from "../components/form";
import Input from "../components/input";

export default function SignIn() {
  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <View>
      <Form action="Log In" onSubmit={onSubmit}>
        <Input name="email" secure={false}/>
        <Input name="password" secure={true}/>
      </Form>
    </View>
  );
}
