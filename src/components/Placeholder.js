import React from 'react'
import {StyleSheet, View} from 'react-native'
import {Text} from './'
import {_} from '../utils'

export default () => (
    <View style={style.container}>
        <Text lg mute center>{_('7')}</Text>
    </View>
)

const style = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})