import Types from './Types'

 /*----------------------------------------------------------------------
 AUTHENTICATION
 ----------------------------------------------------------------------*/

 const login = () => ({ type: Types.LOGIN })
 const logout = () => ({ type: Types.LOGOUT })

 /*----------------------------------------------------------------------
 USER
 ----------------------------------------------------------------------*/

 const setUser = user => ({ type: Types.SET_USER, user })
 const clearUser = () => ({ type: Types.CLEAR_USER })

 /*----------------------------------------------------------------------
 NETWORK
 ----------------------------------------------------------------------*/

 const networkSuccess = () => ({ type: Types.NETWORK_SUCCESS })
 const networkFailure = () => ({ type: Types.NETWORK_FAILURE })

export default {
  login,
  logout,

  setUser,
  clearUser,

  networkSuccess,
  networkFailure,
}