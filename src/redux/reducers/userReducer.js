import { ActionTypes } from "../actions/user.type";

const initialUserState = [
    {
        id: 1,
        name: 'Kazi Mamun',
        position : 'Sr. SAE',
        salary : 55000
    },
    {
        id: 2,
        name: 'Rafiq',
        position : 'SAE',
        salary : 35000
    },
    {
        id: 3,
        name: 'Arif',
        position : 'SAE',
        salary : 30000
    }
];

export const usersReducer = (state = initialUserState, {type, payload}) => {
    switch(type){
        case ActionTypes.GET_USER_DATA :
            return {...state, user: payload}
        case ActionTypes.EDIT_USER_DATA :
            return {...state, user: payload}
        case ActionTypes.DELETE_USER_DATA :
            return {
                ...state, 
                user: state.filter((user, index) => index !== payload)
            }
        default :
            return state
    }
}