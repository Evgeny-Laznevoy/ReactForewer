import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {
    
    let posts = props.post.map( p => <Post text={p.post} />)

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
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
            <button onClick={onAddPost}>Add post</button>
        </div>
        <div className={`${s.posts} + ' ' + ${s.item}`}>
            {posts}
        </div>
    </div>
}

export default MyPosts