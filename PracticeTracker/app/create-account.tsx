import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";

export default function CreateAccount() {
    const { control, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data: any) => {
        console.log(data);
    };

    const [isFocused, setIsFocused] = useState(false);

    return (
        <View>
            <Text>Sign Up</Text>
            <Controller
                control={control}   
                name="email"
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                    <TextInput 
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
                        onChangeText={onChange}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}   
                        value={value}/>
                )}/>
            {errors.email && <Text>This is required.</Text>}
            <Controller
                control={control}   
                name="password"
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                    <TextInput 
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
                        onChangeText={onChange}
                        value={value}/>
                )}/>
            {errors.password && <Text>This is required.</Text>}

            <Button title="Sign Up" onPress={handleSubmit(onSubmit)} />
        </View>
    );
}

const styles = StyleSheet.create({
    
});