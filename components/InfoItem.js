import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class InfoItem extends React.Component {
    render() {
        return (
            <View style={styles.wrapper}>
                <Text style={styles.title}>{this.props.title}:</Text> 
                <Text style={styles.text}>{this.props.value}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 10,
        marginBottom: 10
    },
    title: {
        color: '#821e14',
        fontSize: 18,
        fontWeight: 'bold'
    },
    text: {
        fontSize: 16,
    }
});
