import React from 'react'
import {Image} from 'react-native'
import {Res} from '../themes'

const DEFAULT_SIZE = 30

export default props => (
	<Image
		source={Res.icon[props.name]}
		resizeMode='contain'
		style={{
			width:props.size || DEFAULT_SIZE,
			height:props.size || DEFAULT_SIZE,
			...props.style
		}}
	/>
)