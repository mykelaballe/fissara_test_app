import React from 'react'
import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import * as Scrn from '../screens'
import {Icon} from '../components'
import {AppStyles, Colors} from '../themes'

const ICON_SIZE = 20

export default createBottomTabNavigator({
    Home: {
        screen:createStackNavigator({
            Home: Scrn.Home
        },{
            defaultNavigationOptions:AppStyles.defaultNavigationOptions
        }),
        navigationOptions: {
            tabBarLabel:'Home',
            tabBarIcon: ({focused}) => <Icon name={focused ? 'home_active' : 'home'} size={ICON_SIZE} />
        }
    },
    MyAccount: {
        screen:createStackNavigator({
            MyAccount: Scrn.MyAccount
        },{
            defaultNavigationOptions:AppStyles.defaultNavigationOptions
        }),
        navigationOptions: {
            tabBarLabel:'My Account',
            tabBarIcon: ({focused}) => <Icon name={focused ? 'user_active' : 'user'} size={ICON_SIZE} />
        }
    },
},{
    tabBarOptions: {
        inactiveTintColor:Colors.black,
        activeTintColor:Colors.brand,
        indicatorStyle: {
            backgroundColor:Colors.light
        }
    }
})