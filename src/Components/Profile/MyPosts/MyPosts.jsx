import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'
import {updateNewPostTextActionCreator, addPostActionCreator} from "../../../Redux/State"

const MyPosts = (props) => {

    let posts = props.posts.posts.map( p => <Post text={p.post} />)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.dispatch(updateNewPostTextActionCreator(text))
    }

    return <div>
        <div>
            My posts
        </div>
        <div className={s.item}>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement}></textarea>
            </div>
            {/* <input type="button" onClick="" value="Add post" /> */}
            <button onClick={addPost}>Add post</button>
        </div>
        <div className={`${s.posts} + ' ' + ${s.item}`}>
            {posts}
        </div>
    </div>
}

export default MyPosts