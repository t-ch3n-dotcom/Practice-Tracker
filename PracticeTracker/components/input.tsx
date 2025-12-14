import { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { StyleSheet, Text, TextInput } from "react-native";

interface InputProps {
  name: string;
  secure: boolean
}

export default function Input({ name, secure }: InputProps) {
  const {
    control
  } = useFormContext();

  const [isFocused, setIsFocused] = useState(false);


  return (
    <>
      <Controller
        control={control}
        name={name}
        defaultValue=""
        rules={{ required: true }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <>
            <TextInput
              placeholder={String(name.charAt(0).toUpperCase() + name.slice(1))}
              secureTextEntry={secure}
              style={[styles.input, isFocused && styles.inputFocused]}
              onChangeText={onChange}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              value={value}
            />
            {error && error.type !== "required" && typeof error.message === "string" && (
              <Text style={styles.error}>{error.message}</Text>
            )}
          </>
        )}
      />
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 45,
    width: "100%",
    margin: 6,
    borderWidth: 3,
    padding: 10,
    borderColor: "gray",
    borderRadius: 10,
    backgroundColor: "#dcdcdcd6",
  },
  inputFocused: {
    borderColor: "#b842e0ff",
  },
  error: {
    alignSelf: "flex-start",
  },
});
