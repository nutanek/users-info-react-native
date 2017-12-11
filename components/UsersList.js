import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    ScrollView
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
        axios.get('https://randomuser.me/api/?results=10&nat=NL,NZ,TR,US').then(response => {
            self.setState({
                users: response.data.results
            })
        }).catch(error => {
            console.log(error);
        });
    }

    render() {
        return (
            <View style={styles.body}>
                {
                    this.state.users.length === 0 ? (
                        <Text style={styles.loading}>Loading..</Text>
                    ) : (
                        <ScrollView contentContainerStyle={styles.contentContainer} style={styles.scroll}>
                            {
                                this.state.users.map( (user, index) =>
                                    <UserItem 
                                        key={index} 
                                        user={user} 
                                        nav={this.props.nav} />
                                )
                            }
                        </ScrollView>
                    )
                }
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
    },
    loading: {
        marginTop: 20
    }
});
