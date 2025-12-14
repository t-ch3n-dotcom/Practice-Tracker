import { Dimensions, StyleSheet, Text, View } from "react-native";

const screenWidth = Dimensions.get('window').width;

export default function Divider() {
    return (
        <View style={styles.view}>
            <View style={styles.dividers}></View>
            <Text style={styles.text}>OR</Text>
            <View style={styles.dividers}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    text : {
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 16,
        color: 'darkgray',
    },
    view : {
        marginTop: 25,
        marginBottom: 25,
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: screenWidth * 0.6,
    },
    dividers : {
        height: 2,
        width: (screenWidth * 0.2),
        backgroundColor: 'lightgray',
    }
});