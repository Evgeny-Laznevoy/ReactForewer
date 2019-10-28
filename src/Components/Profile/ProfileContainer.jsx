import React from 'react'
import Profile from './Profile'
import * as axios from "axios"
import { connect } from 'react-redux'
import { setUserProfile} from '../../Redux/profile-reducer'
import {withRouter} from 'react-router-dom'

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(Response => { 
        this.props.setUserProfile(Response.data)
        })
    }
    
    render() {
            return(
            <Profile { ...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

let WithUelDataContainerComponent =  withRouter(ProfileContainer)

// export default ProfileContainer

export default connect(mapStateToProps, {setUserProfile})(WithUelDataContainerComponent)