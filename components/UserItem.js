import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight
} from 'react-native';

export default class UserItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let user = this.props.user
        const {navigate} = this.props.nav;
        return (
            <TouchableHighlight onPress={() => navigate('InfoPage', {info: user})}>
                <View style={styles.userWrapper}>
                    <Image style={styles.avatar} source={{uri: user.picture.medium}} />
                    <View style={styles.info}>
                        <Text style={styles.name}>{user.name.last} {user.name.first}</Text>
                        <Text>{user.email}</Text>
                        <Text>Nat: {user.nat}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }
}

const styles = StyleSheet.create({
    userWrapper: {
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
