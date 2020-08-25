import React from 'react'
import {createStackNavigator} from 'react-navigation-stack'
import HomeStack from './HomeStack'
import {AppStyles} from '../themes'
import * as Scrn from '../screens'

export default createStackNavigator({
    Home: {
        screen: HomeStack,
        navigationOptions: {
            header:null
        }
    },
    EmployeeProfile: Scrn.EmployeeProfile
},{
    defaultNavigationOptions: AppStyles.defaultNavigationOptions
})