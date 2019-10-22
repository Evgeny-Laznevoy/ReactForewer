const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'


let initialState = {
    posts: [
        { id: 1, post: 'My first post' },
        { id: 2, post: 'hi!!!' }
    ],
    newPostText: 'evgen purgen',
    profile: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let lastId = state.posts.length
            lastId++

            // let newPost = {
            //     id: lastId++,
            //     post: state.newPostText
            // }
            // let stateCopy = {...state}
            // stateCopy.posts = [...state.posts]
            // stateCopy.posts.push(newPost)
            // stateCopy.newPostText = ''
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


export default profileReducer