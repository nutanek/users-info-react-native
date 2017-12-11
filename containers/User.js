import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';

export default class User extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.info.name.last}'s info`
    })

    render() {
        const {state} = this.props.navigation
        const info = state.params.info
        return (
            <View style={styles.body}>
                <View style={styles.avatarWrapper}>
                    <Image 
                        style={styles.avatar} 
                        source={{uri: info.picture.large}} />                  
                </View>
                <View style={styles.detail}>
                    <Text>{info.name.first}</Text>   
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    body: {
        padding: 20,
        alignSelf: 'stretch',
        flex: 1,
        backgroundColor: '#FFCC00',
        alignItems: 'flex-start'
    },
    avatarWrapper: {
        backgroundColor: '#FFFFFF',
    },
    avatar: {
        borderRadius: 200,
        width: 200,
        height: 200,
    },
    detail: {
        flex: 1,
        alignItems: 'flex-start'
    }
});
