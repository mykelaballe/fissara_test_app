import React from 'react'
import {Screen, Label} from '../components'

const Scrn = ({navigation}) => {

    const {name, email, address, phone} = navigation.state.params.employee

    return (
        <Screen>
            <Label label='Name' value={name} />
            <Label label='Email' value={email} />
            <Label label='Phone' value={phone} />
            <Label label='Address' value={`${address.street}, ${address.city}`} />
        </Screen>
    )
}

Scrn.navigationOptions = ({navigation}) => ({
    title:navigation.state.params.employee.name
})

export default Scrn