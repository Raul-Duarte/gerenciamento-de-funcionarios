export function createCargo (name) {
    return{
        type:'@cargo/CREATE_CARGO',
        payload:{name},
    }
}