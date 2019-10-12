import React from 'react'
import {updateNewPostTextActionCreator, addPostActionCreator} from "../../../Redux/profile-reducer"
import MyPosts from './MyPosts'
import {connect} from 'react-redux'

// const MyPostsContainer = (props) => {

//     let state = props.store.getState()

//     let addPost = () => {
//         props.store.dispatch(addPostActionCreator())
//     }

//     let onPostChange = (text) => {
//         props.store.dispatch(updateNewPostTextActionCreator(text))
//     }

//     return (<MyPosts updateNewPostText={onPostChange} addPost={addPost} post={state.profilePage.posts} />)
    
// }

let mapStateToProps = (state) => {
    return {
        post: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextActionCreator(text))
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }

    }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer