import {combineReducers} from 'redux'

import funcionario from './funcionario/reducer'
import cargo from './cargo/reducer'

export default combineReducers([
    funcionario,
    cargo
])