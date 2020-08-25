import SomeModal from '../components/SomeModal'
import _ from './Lang'

const ok = (message, title = null, options = {}) => {
    SomeModal.show({
        message,
        title:title || _('13'),
        options
    })
}

const warn = (message, title = null, options = {}) => {
    SomeModal.show({
        message,
        title:title || _('14'),
        options
    })
}

const err = (message, title = null, options = {}) => {
    SomeModal.show({
        message,
        title:title || _('15'),
        options
    })
}

const info = (message, title = null, options = {}) => {
    SomeModal.show({
        message,
        title:title || _('16'),
        options
    })
}

const ask = (message, title = null, options = {}) => {
    SomeModal.show({
        message,
        title:title || _('12'),
        options: {
            type:'yes_no',
            ...options
        }
    })
}

export default {
    ok,
    warn,
    err,
    info,
    ask
}