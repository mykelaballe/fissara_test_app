import React from 'react'
import {StatusBar} from 'react-native'
import {connect} from 'react-redux'
import Actions from './src/actions'
import Navigation from './src/navigation'
import {Colors} from './src/themes'
import SomeModal from './src/components/SomeModal'
import {Consts, Storage} from './src/utils'
import NetInfo from '@react-native-community/netinfo'
import SplashScreen from 'react-native-splash-screen'
import {Provider} from 'react-native-paper'

class App extends React.Component {

  state = {
    loading: true
  }

  componentDidMount() {

    const {networkSuccess, networkFailure} = this.props

    this.networkSubscribe = NetInfo.addEventListener(state => {
      if(state.isConnected) networkSuccess()
      else networkFailure()
    })

    NetInfo.fetch().then(state => {
      if(state.isConnected) networkSuccess()
      else networkFailure()
    })

    this.createLocalDBs().then(this.checkUser)

    SplashScreen.hide()
  }

  componentWillUnmount = () => this.networkSubscribe()

  checkUser = async () => {
    const {setUser, login} = this.props

    let userData = await Storage.doLoad(Consts.db.user)

    if(userData) {
      setUser(userData)
      login()
    }

    this.setState({loading:false})
  }

  createLocalDBs = async () => {
    try {
      await Storage.doLoad(Consts.db.app)
    }
    catch(err) {
      if(err.name === 'NotFoundError') await Storage.doSave(Consts.db.app)
    }

    try {
      await Storage.doLoad(Consts.db.user)
    }
    catch(err) {
      if(err.name === 'NotFoundError') await Storage.doSave(Consts.db.user, null)
    }
  }

  render() {

    const {loading} = this.state

    return (
      <Provider>
        {!loading &&
        <>
          <StatusBar backgroundColor={Colors.brand} />
          <Navigation />
          <SomeModal />
        </>
        }
      </Provider>
    )
  }
}

const mapStateToProps = state => ({
  isConnected: state.network.isConnected,
  isLoggedIn: state.auth.isLoggedIn,
  user: state.user.data
})

const mapDispatchToProps = dispatch => ({
  login: () => dispatch(Actions.Creators.login()),
  logout: () => dispatch(Actions.Creators.logout()),
  setUser: user => dispatch(Actions.Creators.setUser(user)),
  networkSuccess: () => dispatch(Actions.Creators.networkSuccess()),
  networkFailure: () => dispatch(Actions.Creators.networkFailure())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)