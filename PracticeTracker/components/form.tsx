import { FormProvider, useForm } from "react-hook-form";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import Button from "./button";

interface FormProps {
  action: string;
  onSubmit: (data: any, methods: any) => void;
  children: React.ReactNode;
}

const screenWidth = Dimensions.get("window").width;

export default function AuthForm({ action, onSubmit, children }: FormProps) {
  const methods = useForm({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });

  const {
    formState: { errors, submitCount},
  } = methods;


  return (
    <FormProvider {...methods}>
      <View style={styles.form}>
        {children}
        {submitCount > 0 && Object.entries(errors).some(
          ([key, error]: any) => error?.type === "required"
        ) && <Text style={styles.error}>At least one field is missing.</Text>}
        <Button
          title={action}
          onPress={methods.handleSubmit((data) => onSubmit(data, methods))}
        />
      </View>
    </FormProvider>
  );
}

const styles = StyleSheet.create({
  form: {
    width: screenWidth * 0.7,
    justifyContent: "center",
    alignItems: "center",
  },
  error: {
    alignSelf: "flex-start",
  },
});
