import Storage from './Storage'

import en from '../lang/en.json'

let langs = {
    en
}

let lang = en

const checkLang = async () => {
    let db = await Storage.doLoad('AppDB')

    if(db.lang) lang = langs[db.lang] 
}

checkLang()

export default (textCode) => {
    let text = lang[textCode]
    
    return `${text[0].toUpperCase()}${text.substr(1)}`
}