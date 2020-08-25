import React from 'react'
import {StyleSheet} from 'react-native'
import {Button, Modal, Text, Row, Spacer} from './'
import SomeModal from './SomeModal'
import {_} from '../utils'

export default class Prompt extends React.Component {

	handleConfirm = () => {
		const {onConfirm} = this.props

		if(onConfirm) onConfirm()

		SomeModal.hide()
	}

	handleDismiss = () => {
		const {onConfirm, onDismiss} = this.props

		if(onConfirm) onConfirm()
		else if(onDismiss) onDismiss()

		SomeModal.hide()
	}

	render() {

		const {props} = this

		let btns = <Button t={props.OkBtnLabel || _('9')} onPress={this.handleDismiss} />

		if(props.type === 'yes_no') {
			btns = (
				<Row bw>
					<Button mode='outlined' style={style.btn} t={props.noBtnLabel || _('11')} onPress={props.onDismiss} />
					<Spacer h xs />
					<Button style={style.btn} t={props.yesBtnLabel || _('10')} onPress={this.handleConfirm} />
				</Row>
			)
		}

		let message = <Text mute md>{props.message}</Text>

		if(props.customMessage) message = props.customMessage

		let content = (
			<>
				{message}
				<Spacer md />

				{(props.noBtn === undefined || props.noBtn === false) && btns}
			</>
		)

		return (
			<Modal
				visible={props.visible}
				title={props.title}
				onDismiss={props.type === 'yes_no' ? props.onDismiss : this.handleDismiss}
				content={content}
			/>
		)
	}
}

const style = StyleSheet.create({
	btn: {
		flex:1
	}
})