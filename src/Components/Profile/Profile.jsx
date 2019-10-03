import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = () => {
    return <div className='Profile'>
        <div>
            <ProfileInfo />
            <MyPosts />
        </div>
    </div>
}

export default Profile