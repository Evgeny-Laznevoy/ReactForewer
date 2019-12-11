import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import { getUserProfile, getUserStatus, updateStatus } from '../../Redux/profile-reducer'
import { withRouter} from 'react-router-dom'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from '../../../../../../../AppData/Local/Microsoft/TypeScript/3.6/node_modules/redux'

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }

    render() {
        debugger
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />
        )
    }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer)


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile, 
    status: state.profilePage.status
})

// compose(
//     connect(mapStateToProps, {getUserProfile}),
//     withRouter,
//     withAuthRedirect
// )(ProfileContainer)

let WithUelDataContainerComponent = withRouter(AuthRedirectComponent)

// export default ProfileContainer

//export default connect(mapStateToProps, {getUserProfile})(WithUelDataContainerComponent)

export default compose(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateStatus}),
    withRouter,
    //withAuthRedirect
)(ProfileContainer)