import {all} from 'redux-saga/effects'

import funcionario from './funcionario/sagas'

export default function* rootSaga(){
    return yield all([
        funcionario,
    ])
}