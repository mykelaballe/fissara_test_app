import React from 'react'
import {StyleSheet, Image, Dimensions, View} from 'react-native'

const {height} = Dimensions.get('window')

export default () => {	
	return (
		<View style={style.banner}>
			<Image source={require('../res/logo_white.png')} resizeMode='contain' style={style.logo} />
		</View>
	)
}

const style = StyleSheet.create({
	banner: {
		marginTop:80
	},
	logo: {
		width:undefined,
		height:height * .15
	}
})