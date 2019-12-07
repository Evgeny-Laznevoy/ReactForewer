import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import { getUserProfile } from '../../Redux/profile-reducer'
import { withRouter} from 'react-router-dom'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from '../../../../../../../AppData/Local/Microsoft/TypeScript/3.6/node_modules/redux'

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        this.props.getUserProfile(userId)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer)


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

compose(
    connect(mapStateToProps, {getUserProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)

let WithUelDataContainerComponent = withRouter(AuthRedirectComponent)

// export default ProfileContainer

//export default connect(mapStateToProps, {getUserProfile})(WithUelDataContainerComponent)

export default compose(
    connect(mapStateToProps, {getUserProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)