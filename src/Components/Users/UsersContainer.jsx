import React from 'react'
import Users from './Users'
import { connect } from 'react-redux'
import { follow, unfollow, setUsers, setCurrentPage, toggleIsFollowingProgress, getUsers} from '../../Redux/users-reduce'
import Preloader from '../Common/Preloader/Preloader'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from '../../../../../../../AppData/Local/Microsoft/TypeScript/3.6/node_modules/redux'


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
        // this.props.toggleIsFetching(true)
        
        // usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
        //         this.props.toggleIsFetching(false)
        //         this.props.setUsers(data.items)
        //         this.props.setTotalUsersCount(data.totalCount)
        //     })

    }

    onPageChanged = (pageNumber) => {
        
        this.props.getUsers(pageNumber, this.props.pageSize)

        // this.props.setCurrentPage(pageNumber)
        // this.props.toggleIsFetching(true)

        // usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
        //     this.props.toggleIsFetching(false)
        //     this.props.setUsers(data.items)
        // })
    }

    render() {
        debugger
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow ={this.props.unfollow}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
        // toggleIsFollowingProgress: state.usersPage.toggleIsFollowingProgress
    }
}


compose(
    connect(mapStateToProps, { follow, unfollow, setUsers, 
        setCurrentPage, toggleIsFollowingProgress, getUsers
    }),
    withAuthRedirect
)(UsersContainer)


let withRedirect = withAuthRedirect(UsersContainer)

// export default connect(mapStateToProps, { follow, unfollow, setUsers, 
//     setCurrentPage, toggleIsFollowingProgress, getUsers
// })(withRedirect)

export default compose(
    connect(mapStateToProps, { follow, unfollow, setUsers, 
        setCurrentPage, toggleIsFollowingProgress, getUsers
    }),
    withAuthRedirect
)(UsersContainer)