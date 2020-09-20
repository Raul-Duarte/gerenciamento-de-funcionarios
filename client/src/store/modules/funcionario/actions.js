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

// export function getFuncionario () {
//     return{
//         type:'@funcionario/GET_FUNCIONARIO',
//         payload:{}
//     }
// }
// export function funcionarioInSuccess ({name,email}) {
//     return{
//         type:'@funcionario/SUCCESS_FUNCIONARIO',
//         payload:{name,email}
//     }
// }
