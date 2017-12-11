import React from 'react'
import { StackNavigator } from 'react-navigation'
// container
import Home from './../containers/Home'

export const StackNav = StackNavigator({
    HomePage: {
        screen: Home,
        navigationOptions: {
            header: null
        }
    }
})
