import React from 'react'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from './MyPosts/MyPostsContainer'

const Profile = (props) => {
    return <div className='Profile'>
        <div>
            <ProfileInfo />
            <MyPostsContainer store={props.posts} dispatch={props.dispatch}/>
        </div>
    </div>
}

export default Profile