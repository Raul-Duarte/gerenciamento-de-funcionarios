import { takeLatest, call, all, put } from 'redux-saga/effects'

import api from '../../../services/api'
import history from '../../../services/history'
import {AllCargo} from '../cargo/actions'
export function* cargoCreate({ payload }) {
    try {

        const { name } = payload

        console.log(name)

        yield call(api.post, 'cargo', {
            name,
        })
        history.push('/')

    } catch (err) {

        console.log("erro no cadastro")

        // yield put(singFailure())
    }
}

export function* cargoGetAll() {
    try {

     const {id, name} =  yield call(api.get, 'cargo')
        console.log("Onome do cargo é: "+name)
     yield put(AllCargo(id,name))

        history.push('/')

    } catch (err) {

        console.log("erro no cadastro")

        // yield put(singFailure())
    }
}

export default all([
    takeLatest('@cargo/CREATE_CARGO', cargoCreate),
    takeLatest('@cargo/GET_ALL_CARGO', cargoGetAll),
])
