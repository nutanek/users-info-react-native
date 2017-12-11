import React from 'react'
import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from 'react-native';
import Header from './../components/Header'

export default class User extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.username}'s info`
    })

    render() {
        const {state} = this.props.navigation
        return (
            <View style={styles.body}>
                <Text>{state.params.username}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    body: {
        paddingTop: 0,
        alignSelf: 'stretch',
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center'
    }
});
