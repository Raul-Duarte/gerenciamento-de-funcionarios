import {all} from 'redux-saga/effects'

import funcionario from './funcionario/sagas'
import cargo from './cargo/sagas'

export default function* rootSaga(){
    return yield all([
        funcionario,
        cargo,
    ])
}