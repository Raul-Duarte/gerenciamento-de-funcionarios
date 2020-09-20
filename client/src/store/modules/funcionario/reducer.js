import produce from 'immer'


const INITIAL_STATE = {
    name:'',
    surname:"",
	date:"",
    salary:"",
    cargo_id:""


}

export default function funcionario(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case '@funcionario/CREATE_FUNCIONARIO': {
                draft.name = action.payload.name;
                draft.surname = action.payload.surname;
                draft.date = action.payload.date;
                draft.salary = action.payload.salary;
                draft.cargo_id = action.payload.cargo_id;
                break;
            }

            default: {
                return state
            }
        }
    })
}
