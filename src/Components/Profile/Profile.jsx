import React from 'react'
import MyPosts from './MyPosts/MyPosts'

const Profile = () => {
    return <div className='Profile'>
        <div>
            <a> My Profile</a>
            <MyPosts/>
        </div>
    </div>
}

export default Profile