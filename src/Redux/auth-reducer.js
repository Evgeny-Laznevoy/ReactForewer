import { authAPI } from "../api/api"

const SET_USER_DATE = 'SET_USER_DATE'


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATE:
            return {
                ...state,
                ...action.data,
                isAuth: true
                }
        default:
            return state
    }
}    




export const setAuthUserData = (userId, email, login,isAuth) => ({ type: 'SET_USER_DATE', data:{userId, email, login,isAuth}})


export const getAuthUserData = () => (dispatch) => {
    authAPI.me().then(Response => { 
        if (Response.data.resultCode === 0) {
            let {id, email, login} = Response.data.data
            dispatch(setAuthUserData(id, email, login))
        }
    })  
}


export default authReducer