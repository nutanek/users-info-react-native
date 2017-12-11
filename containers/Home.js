import React from 'react'
import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from 'react-native';

export default class Home extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>sssssssssss</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ebebeb'
    },
    buttonText: {
        color: "#FFFFFF"
    }
})
