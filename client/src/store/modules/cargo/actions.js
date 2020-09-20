export function createCargo (name) {
    return{
        type:'@cargo/CREATE_CARGO',
        payload:{name},
    }
}

export function getAllCargo () {
    return{
        type:'@cargo/GET_ALL_CARGO',
    }
}

export function AllCargo (id, name) {
    return{
        type:'@cargo/ALL_CARGO',
        payload:{id,name},
    }
}