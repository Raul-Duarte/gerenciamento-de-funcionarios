import produce from 'immer'


const INITIAL_STATE = {
    name:'',


}

export default function cargo(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case '@cargo/CREATE_CARGO': {
                draft.name = action.payload.name;
                break;
            }

            default: {
                return state
            }
        }
    })
}
