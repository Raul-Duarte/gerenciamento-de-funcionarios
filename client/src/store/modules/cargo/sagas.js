import { takeLatest, call, all } from 'redux-saga/effects'

import api from '../../../services/api'
import history from '../../../services/history'

export function* cargoCreate({payload}) {
    try {

        const { name } = payload

        console.log(name)
 
        yield call(api.post, 'cargo',{
            name,
        })
        history.push('/')

    } catch (err) {

        console.log("erro no cadastro")

        // yield put(singFailure())
    }
}

export default all([
    takeLatest('@cargo/CREATE_CARGO', cargoCreate),
])
