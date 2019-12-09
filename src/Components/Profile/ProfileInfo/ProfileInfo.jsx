import React from 'react'
import s from './ProfileInfo.module.css'
import Preloader from '../../Common/Preloader/Preloader'
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }

    debugger
    return (
        <div>
            <div className={s.descriptionPost}>
                <img src={props.profile.photos.large} />
                <a> My Profile!!</a>
                <ProfileStatus status={"hello !!!!!!!!!!!!"}/>
            </div>
        </div>
    )
}

export default ProfileInfo