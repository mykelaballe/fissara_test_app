import {createStackNavigator} from 'react-navigation-stack'
import * as Scrn from '../screens'
import {AppStyles} from '../themes'

export default createStackNavigator({
    Login: {
        screen:Scrn.Login,
        navigationOptions:{
            header:null
        }
    }
},{
    defaultNavigationOptions:AppStyles.defaultNavigationOptions
})