import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { StackNav } from './configs/routes'

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <StackNav />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === "android" ? 25 : 0,
        flex: 1,
    },
});
