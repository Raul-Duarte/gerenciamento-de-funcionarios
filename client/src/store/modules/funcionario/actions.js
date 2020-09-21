export function createFuncionario (name, surname, date,salary,cargo_id ) {
    return{
        type:'@funcionario/CREATE_FUNCIONARIO',
        payload:{
            name, 
            surname,
            date,
            salary,
            cargo_id
        },
    }
}

export function deleteFuncionario () {
    return{
        type:'@funcionario/DELETE_FUNCIONARIO',
    }
}
