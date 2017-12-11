import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Modal,
    Alert,
    TouchableHighlight
} from 'react-native';

export default class Post extends React.Component {
    constructor(props) {
        super(props)
    }

    _showMoreInfo = (username) => {
        Alert.alert('username:', username)
    }

    render() {
        let user = this.props.user
        const img = [
            'https://www.physics.rutgers.edu/grad/prizes/null.gif'
        ]
        return (
            <TouchableHighlight onPress={()=>this._showMoreInfo(user.username)}>
                <View style={styles.postWrapper}>
                    <Image style={styles.avatar} source={{uri: img[0]}} />
                    <View style={styles.info}>
                        <Text style={styles.name}>{user.login}</Text>
                        <Text>Email: {user.type}</Text>
                        <Text>Tel: {user.id}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }
}

const styles = StyleSheet.create({
    postWrapper: {
        flexDirection: 'row',
        marginBottom: 10,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 5,
        paddingRight: 5,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        backgroundColor: '#FFF',
        alignSelf: 'stretch',
    },
    avatar: {
        width: 80,
        height: 80,

    },
    info: {
        paddingLeft: 10,
        paddingRight: 10,
    },
    name: {
        fontSize: 18,
        color: '#821e14',
        fontWeight: 'bold'
    }
});
