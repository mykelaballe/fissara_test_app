import React from 'react'
import {View, StyleSheet} from 'react-native'
import {connect} from 'react-redux'
import Actions from '../actions'
import {Button, ButtonText, Spacer, TextInput, Screen, Footer, Banner} from '../components'
import {Colors} from '../themes'
import {_} from '../utils'

class Scrn extends React.Component {

    state = {
        username:'',
        password:'',
        show_password:false
    }

    handleLogin = async () => {
        if(!this.props.attempting) this.props.attemptLogin(this.state)
    }

    handleChangeUsername = username => this.setState({username})
    handleChangePassword = password => this.setState({password})

    handleFocusPassword = () => this.refs.password.focus()

    handleTogglePassword = () => this.setState(prevState => ({show_password:!prevState.show_password}))

    render() {

        const {attempting} = this.props
        let {username, password, show_password} = this.state
        let ready = (username && password) || false

        return (
            <>  
                <Banner />

                <Spacer />
                
                <Screen>

                    <View style={style.midContainer}>
                        <TextInput
                            editable={!attempting}
                            ref='username'
                            label={_('1')}
                            value={username}
                            onChangeText={this.handleChangeUsername}
                            onSubmitEditing={this.handleFocusPassword}
                            autoCapitalize='none'
                            returnKeyType='next'
                            maxLength={30}
                        />

                        <Spacer sm />

                        <TextInput
                            editable={!attempting}
                            ref='password'
                            label={_('2')}
                            value={password}
                            onChangeText={this.handleChangePassword}
                            autoCapitalize='none'
                            secureTextEntry={show_password ? false : true}
                            rightContent={
                                <ButtonText color={Colors.gray} t={show_password ? _('5') : _('4')} onPress={this.handleTogglePassword} />
                            }
                        />
                    </View>

                    <Spacer md />
                </Screen>

                <Footer>
                    <Button disabled={!ready} t={_('3')} onPress={this.handleLogin} loading={attempting} />
                </Footer>
            </>
        )
    }
}

const style = StyleSheet.create({
    midContainer: {
        flex:1,
        justifyContent:'space-around'
    }
})

const mapStateToProps = state => ({
    attempting: state.auth.attemptingAuth
})

const mapDispatchToProps = dispatch => ({
    attemptLogin:payload => dispatch(Actions.Creators.attemptLogin(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Scrn)