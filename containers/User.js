import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import InfoItem from './../components/InfoItem'

export default class User extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.info.name.last}'s info`
    })

    render() {
        const {state} = this.props.navigation
        const info = state.params.info
        let userInfo = {
            Name: [info.name.last, info.name.first].join(" "),
            Email: info.email
        }
        return (
            <View style={styles.body}>
                <ScrollView contentContainerStyle={styles.contentContainer} style={styles.scroll}>
                    <View style={styles.avatarWrapper}>
                        <Image 
                            style={styles.avatar} 
                            source={{uri: info.picture.large}} />                  
                    </View>
                    <View style={styles.detail}>
                        {
                            Object.keys(userInfo).map((key, value) => 
                                <InfoItem />
                            )
                        }  
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#FFCC00',
        alignItems: 'flex-start'
    },
    avatarWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#FFFFFF',
    },
    avatar: {
        borderRadius: 200,
        width: 200,
        height: 200,
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
