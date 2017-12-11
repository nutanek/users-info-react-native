import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

export default class Header extends React.Component {
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
        paddingBottom: 10
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});