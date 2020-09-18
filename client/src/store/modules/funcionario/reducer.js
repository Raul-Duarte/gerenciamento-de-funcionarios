import produce from 'immer'


const INITIAL_STATE = {
    name:'',
    email:'',


}

export default function funcionario(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case '@funcionario/CREATE_FUNCIONARIO': {
                draft.name = action.payload.name;
                draft.email = action.payload.email;
                break;
            }
            case '@funcionario/SUCCESS_FUNCIONARIO': {
                draft.name = action.payload.name;
                draft.email = action.payload.email;
                break;
            }

            default: {
                return state
            }
        }
    })
}
