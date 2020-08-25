import React from 'react'
import {View, StyleSheet} from 'react-native'
import {connect} from 'react-redux'
import Actions from '../actions'
import {Screen, Footer, Text, Avatar, Button, Spacer} from '../components'
import {Metrics} from '../themes'
import {_, Say} from '../utils'

class Scrn extends React.Component {

    static navigationOptions = {
        headerLeft:<View />,
        title:_('18')
    }

    handleLogout = () => {
        Say.ask(
            'Are you sure?',
            'Logout',
            {
                onConfirm:() => this.props.logout()
            }
        )
    }

    render() {

        const {user} = this.props

        return (
            <>
                <Screen>
                    <View style={style.topContainer}>
                        <Avatar source={user.avatar} size={Metrics.image.lg} />

                        <Spacer />

                        <Text b lg center mute>{user.fname} {user.lname}</Text>
                        <Text mute>{user.phone} / {user.email}</Text>
                    </View>
                </Screen>

                <Footer>
                    <Button mode='outlined' t='Logout' onPress={this.handleLogout} />
                </Footer>
            </>
        )
    }
}

const style = StyleSheet.create({
    topContainer: {
        alignItems:'center',
        paddingHorizontal:Metrics.rg
    },
    item: {
        padding:Metrics.md,
    }
})

const mapStateToProps = state => ({
    user: state.user.data
})

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(Actions.Creators.logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(Scrn)