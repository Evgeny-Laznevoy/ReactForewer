import React from 'react'
import s from './Post.module.css'

const Post = (props) => {
    return <div>
    <div className={`${s.posts} + ' ' + ${s.item}`}>
        <img src="https://content-static.upwork.com/blog/uploads/sites/3/2018/08/30134609/LogoMakr.png" alt=""/>
        {props.text}
    </div>
</div>
}

export default Post