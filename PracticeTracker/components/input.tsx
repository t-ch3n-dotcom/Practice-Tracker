import { useState } from "react";
import { Controller, useFormContext, useFormState } from "react-hook-form";
import { StyleSheet, Text, TextInput } from "react-native";

interface InputProps {
  name: string;
}

export default function Input({ name }: InputProps) {
  const {
    control,
  } = useFormContext();

  const { errors, submitCount } = useFormState({ control, name });
  const [isFocused, setIsFocused] = useState(false);

  return (
    <>
      <Controller
        control={control}
        name={name}
        defaultValue="" 
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder={name}
            style={[styles.input, isFocused && styles.inputFocused]}
            onChangeText={onChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            value={value}
          />
        )}
      />
      {submitCount > 0 && errors?.[name] && <Text>This is required.</Text>}
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 45,
    width: 250,
    margin: 6,
    borderWidth: 1,
    padding: 5,
    borderColor: "gray",
    borderRadius: 5,
  },
  inputFocused: {
    height: 45,
    width: 250,
    margin: 6,
    borderWidth: 3,
    padding: 5,
    borderColor: "#b842e0ff",
    borderRadius: 5,
  },
});
