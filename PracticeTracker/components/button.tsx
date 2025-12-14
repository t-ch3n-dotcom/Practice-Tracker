import { Pressable, StyleSheet, Text } from "react-native";

interface ButtonProps {
    title: string;
    onPress: () => void;
}

export default function Button({ title, onPress } : ButtonProps) {
    return (
        <Pressable style={styles.button} onPress={onPress}>
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
        boxShadow: '0px 6px 0px #bf5ddcff',
    }
});