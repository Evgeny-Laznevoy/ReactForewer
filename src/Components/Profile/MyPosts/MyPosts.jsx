import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
    return <div>
        <div>
            My posts
        </div>
        <div className={s.item}>
            <textarea name="NewPost" id="" cols="30" rows="3">New Post</textarea>
            <input type="button" onClick="" value="Add post"/>
            <button>Remove</button>
        </div>
        <div className={`${s.posts} + ' ' + ${s.item}`}>
            <Post text= 'My first post' />
        </div>
        <div className={s.item}>
            <Post text= 'hi!!!' />
        </div>
    </div>
}

export default MyPosts

// button.onClick = function() {

// }