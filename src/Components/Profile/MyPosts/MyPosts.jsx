import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

let PostsData = [
    { id: 1, post: 'My first post' },
    { id: 2, post: 'hi!!!' },
]

let posts = PostsData.map(post => <Post text={post.post} />)

const MyPosts = () => {
    return <div>
        <div>
            My posts
        </div>
        <div className={s.item}>
            <div>
                <textarea name="NewPost" id="" cols="30" rows="3">New Post</textarea>
            </div>
            <input type="button" onClick="" value="Add post" />
            <button>Remove</button>
        </div>
        <div className={`${s.posts} + ' ' + ${s.item}`}>
            {posts[0]}
        </div>
        <div className={s.item}>
            {posts[1]}
        </div>
    </div>
}

export default MyPosts

// button.onClick = function() {

// }