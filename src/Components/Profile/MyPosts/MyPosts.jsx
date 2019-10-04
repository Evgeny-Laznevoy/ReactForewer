import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

// let PostsData = [
//     { id: 1, post: 'My first post' },
//     { id: 2, post: 'hi!!!' },
// ]



const MyPosts = (props) => {

    let posts = props.posts.posts.map( p => <Post text={p.post} />)

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
            {posts}
        </div>
    </div>
}

export default MyPosts