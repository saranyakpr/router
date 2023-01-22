export const initialState = {
    isAuthenticated: false,
    product:[],
};


export const authReducer = (state, action) =>{
    console.log("state", state, "action", action);
    switch(action.type){
        case "LOGIN":
            return {
                ...state,
                isAuthenticated:action.payload,
            }
            default:
                return state;
    }


}