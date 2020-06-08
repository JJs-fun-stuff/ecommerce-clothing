/*
{
    type: (string),
    payload: "flexible property",
}

*/
const INITIAL_STATE = {
    currentUser :null,
}
// state is what root reducer will send to user reducer everytime the action got triggered.
const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case'SET_CURRENT_USER':
            return {
                ...state,
                currentUszer: action.payload
            }

        default: 
            return state;
    }
}



export default userReducer;