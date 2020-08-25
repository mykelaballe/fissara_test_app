import Consts from '../utils/Consts'
import Fetch from '../utils/Fetch'
import Storage from '../utils/Storage'

export default {
    login: async ({username, password}) => {
        let res = {
            error:false,
        }

        if(username != 'fissara' || password != '1234') {
            res.error = true
            res.message = 'Invalid username or password'
        }
        else {
            res.data = {
                id:1,
                fname:'Fissara',
                lname:'Admin',
                phone:'09112233445566',
                email:'fissara_test@gmail.com',
                avatar:'https://user-images.githubusercontent.com/22584900/91210879-73815380-e740-11ea-8684-95decc1204d1.png'
            }
        }

        if(!res.error) {
            await Storage.doSave(Consts.db.user, res.data)
        }

        return res
    },

    getEmployees: async () => await Fetch.get('users')
}