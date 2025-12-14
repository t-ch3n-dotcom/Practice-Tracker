import { useState } from "react";
import { Pressable, StyleSheet, Text } from "react-native";

interface ButtonProps {
    title: string;
    onPress: () => void;
}

export default function Button({ title, onPress } : ButtonProps) {
    const [ isPressed, setIsPressed ] = useState(false);

    return (
        <Pressable style={[styles.button, isPressed && styles.buttonPressed]} onPress={onPress} onPressIn={() => {setIsPressed(true)}} onPressOut={() => {setIsPressed(false)}}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    text : {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
    },
    button : {
        backgroundColor: '#b842e0ff',
        padding: 10,
        margin: 10,
        width: 220,
        borderRadius: 20,
        borderColor: '#bf5ddcff',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0px 6px 0px #c650eaff',
    },
    buttonPressed : {
        top: 6,
        backgroundColor: '#d58ceeff',
        boxShadow: '0px 0px 0px #c650eaff',
    }
});