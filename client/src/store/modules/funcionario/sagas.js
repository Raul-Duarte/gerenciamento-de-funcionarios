import { takeLatest, call, all } from 'redux-saga/effects'

import api from '../../../services/api'
import history from '../../../services/history'

export function* funcionarioCreate({payload}) {
    try {

        const { name, email } = payload
 
        yield call(api.post, 'funcionario',{
            name,
            email,
        })
        history.push('/')

    } catch (err) {

        console.log("erro no funcionario")

        // yield put(singFailure())
    }
}

export default all([
    takeLatest('@funcionario/CREATE_FUNCIONARIO', funcionarioCreate),
])
