import { takeLatest, call, all } from 'redux-saga/effects'

import api from '../../../services/api'
import history from '../../../services/history'

export function* funcionarioCreate({payload}) {
    try {

        const { name, surname, date, salary,cargo_id } = payload
 
        yield call(api.post, 'cargo/'+cargo_id+'/funcionario',{
            name,
            surname,
            date,
            salary,
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
