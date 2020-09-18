import { takeLatest, call, put, all } from 'redux-saga/effects'

import api from '../../../services/api'

import { funcionarioInSuccess } from './actions'

function* funcionarioCreate({payload}) {
    try {
        const { name, email } = payload

        const funcionarios = yield call(api.post, 'funcionario',{
            name,
            email,
        })

        // const { name, email } = funcionarios.data

        console.log(funcionarios)

        yield put(funcionarioInSuccess(name,email))


    } catch (err) {

        console.log("erro no funcionario")

        // yield put(singFailure())
    }
}

export default all([
    takeLatest('@funcionario/CREATE_FUNCIONARIO', funcionarioCreate),
])
