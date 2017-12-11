import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    ScrollView,
    TouchableHighlight
} from 'react-native';
import axios from 'axios'
import UserItem from './UserItem'

export default class UsersList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        var self = this;
        axios.get('https://api.github.com/users').then(response => {
            self.setState({
                users: response.data
            })
        }).catch(error => {
            console.log(error);
        });
    }

    render() {
        return (
            <View style={styles.body}>
                <ScrollView contentContainerStyle={styles.contentContainer} style={styles.scroll}>
                    {
                        this.state.users.map( (user, index) =>
                            <UserItem key={index} user={user} />
                        )
                    }
                </ScrollView>
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
    },
    contentContainer: {
        paddingTop: 10
    },
    scroll: {
        alignSelf: 'stretch',
        paddingLeft: 10,
        paddingRight: 10,
    }
});
