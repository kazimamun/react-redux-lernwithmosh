import {ActionTypes} from './user.type';

export const getUserData = user => {
    return {
        type : ActionTypes.GET_USER_DATA,
        payload : user
    }
};

export const editUserData = (user, id) => {
    return {
        type : ActionTypes.EDIT_USER_DATA,
        payload : user
    }
};

export const deleteUserData = (user) => {
    return {
        type : ActionTypes.DELETE_USER_DATA,
        payload : user
    }
};


