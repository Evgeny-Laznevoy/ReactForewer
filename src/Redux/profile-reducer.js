const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'


let initialState = {
    posts: [
        { id: 1, post: 'My first post' },
        { id: 2, post: 'hi!!!' }
    ],
    newPostText: 'evgen purgen'
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
                posts: [...state.posts, {id:lastId, post: state.newPostText}],
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
        default:
            return state
    }
}


export const addPostActionCreator = () => ({ type: 'ADD-POST' })

export const updateNewPostTextActionCreator = (text) =>
    ({ type: 'UPDATE-NEW-POST-TEXT', newText: text })


export default profileReducer