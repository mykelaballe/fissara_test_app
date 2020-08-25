import {Platform} from 'react-native'
import DeviceInfo from 'react-native-device-info'

export default {
	is_android: Platform.OS === 'android',
	baseURL: 'https://jsonplaceholder.typicode.com/',
	appName: DeviceInfo.getApplicationName(),
	appVersion: DeviceInfo.getVersion(),
	db: {
		app:'AppDB',
		user:'UserDB'
	}
}