import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {

    debugger;
    let posts = props.posts.posts.map( p => <Post text={p.post} />)

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value
        props.addPost(text)
    }

    return <div>
        <div>
            My posts
        </div>
        <div className={s.item}>
            <div>
                <textarea ref={newPostElement}>New Post</textarea>
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