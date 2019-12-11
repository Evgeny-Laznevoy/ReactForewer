import usersAPI, { profileAPI } from "../api/api"

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'


let initialState = {
    posts: [
        { id: 1, post: 'My first post' },
        { id: 2, post: 'hi!!!' }
    ],
    newPostText: 'evgen purgen',
    profile: null,
    status: ""
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let lastId = state.posts.length
            lastId++
            return {
                ...state,
                posts: [...state.posts, { id: lastId, post: state.newPostText }],
                newPostText: ''
            }
        }
        case UPDATE_NEW_POST_TEXT:
            // let stateCopy = {...state}
            // stateCopy.newPostText = action.newText
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case SET_USER_PROFILE:
            return { ...state, profile: action.profile }
        default:
            return state
    }
}


export const addPostActionCreator = () => ({ type: 'ADD-POST' })

export const updateNewPostTextActionCreator = (text) =>
    ({ type: 'UPDATE-NEW-POST-TEXT', newText: text })

export const setUserProfile = (profile) => ({ type: 'SET_USER_PROFILE', profile })
export const setStatus = (status) => ({ type: 'SET_STATUS', status })

export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then(Response => {
        dispatch(setUserProfile(Response.data))
    })
}

export const getUserStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(Response => {
        dispatch(setStatus(Response.data))
    })
}

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(Response => {
        if (Response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    })
}



export default profileReducer