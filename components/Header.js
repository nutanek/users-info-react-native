import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

export default class Home extends React.Component {
    render() {
        return (
            <View style={styles.header}>
                <Text style={styles.title}>{this.props.title}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        paddingTop: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});