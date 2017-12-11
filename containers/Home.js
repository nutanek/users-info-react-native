import React from 'react'
import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from 'react-native';
import Header from './../components/Header'
import UsersList from './../components/UsersList'

export default class Home extends React.Component {
    render() {
        return (
            <View style={styles.body}>
                <Header title="Users List" />
                <UsersList />
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
