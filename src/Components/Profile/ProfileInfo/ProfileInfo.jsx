import React from 'react'
import s from './ProfileInfo.module.css'
import Preloader from '../../Common/Preloader/Preloader'

const ProfileInfo = (props) => {
    
    if(!props.profile) {
        return <Preloader/>
    }
    
    debugger
    return <div>
        <div className={s.descriptionPost}>
            <a> My Profile!!</a>
            <img src={props.profile.photos.large}/>
        </div>
    </div>
}

export default ProfileInfo