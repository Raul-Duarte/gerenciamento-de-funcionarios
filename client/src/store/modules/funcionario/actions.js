export function createFuncionario ({name, email}) {
    return{
        type:'@funcionario/CREATE_FUNCIONARIO',
        payload:{name, email}
    }
}

export function getFuncionario () {
    return{
        type:'@funcionario/GET_FUNCIONARIO',
        payload:{}
    }
}
export function funcionarioInSuccess ({name,email}) {
    return{
        type:'@funcionario/SUCCESS_FUNCIONARIO',
        payload:{name,email}
    }
}
