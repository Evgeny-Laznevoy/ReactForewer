import React from 'react'
import styles from "./Users.module.css"
import * as axios from "axios"
import userPhoto from '../../storage/images/personal-user-illustration-@2x.png'



class Users extends React.Component {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(Response => {
            this.props.setUsers(Response.data.items)
        })
    }

    render() {
        return <div>
            {/* <button onClick={this.getUsers}>Get Users</button> */}
            {
                this.props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.Userphoto} />
                        </div>
                        <div>
                            {u.followed ? <button onClick={() => { this.props.unfollow(u.id) }}>Unfollow</button> : <button onClick={() => { this.props.follow(u.id) }}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    }
}


export default Users