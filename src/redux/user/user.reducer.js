/*
{
    type: (string),
    payload: "flexible property",
}

*/
import {UserActionTypes} from './user.types';
const INITIAL_STATE = {
    currentUser :null,
}
// state is what root reducer will send to user reducer everytime the action got triggered.
const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUszer: action.payload
            }

        default: 
            return state;
    }
}



export default userReducer;