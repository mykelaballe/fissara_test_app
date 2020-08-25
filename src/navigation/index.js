import React from 'react'
import {createAppContainer} from 'react-navigation'
import {connect} from 'react-redux'
import AuthStack from './AuthStack'
import MainStack from './MainStack'

const AuthAppContainer = createAppContainer(AuthStack)
const MainAppContainer = createAppContainer(MainStack)

class Navigation extends React.Component {

    render() {

        const {isLoggedIn, user} = this.props

        if(isLoggedIn && user) return <MainAppContainer />
        return <AuthAppContainer />
    }
}

const mapStateToProps = state => ({
    isLoggedIn: state.auth.isLoggedIn,
    user: state.user.data
})

export default connect(mapStateToProps)(Navigation)