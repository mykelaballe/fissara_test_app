import React from 'react'
import {View, TouchableOpacity} from 'react-native'
import {Outline, Text, Row} from './'
import {Colors, Metrics} from '../themes'

const DISABLED_COLOR = '#bbb'

export default props => (
	<Outline style={{...props.style}} {...props}>
		<Text mute size={(!props.value || props.value === '') ? Metrics.font.md : 11}>{props.label}</Text>
		{(props.value !== '' && props.value) && <Text md>{props.value}</Text>}
	</Outline>
)