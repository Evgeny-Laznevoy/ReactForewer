import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {
    return <div className='Profile'>
        <div>
            <ProfileInfo />
            <MyPosts posts={props.posts} dispatch={props.dispatch} />
        </div>
    </div>
}

export default Profile