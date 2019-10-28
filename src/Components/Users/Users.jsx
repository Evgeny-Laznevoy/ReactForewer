import React from 'react'
import styles from "./Users.module.css"
import * as axios from "axios"
import userPhoto from '../../storage/images/personal-user-illustration-@2x.png'
import { NavLink } from 'react-router-dom'


let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div className={styles.numberPage}>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && styles.selectPage}
                    onClick={(e) => { props.onPageChanged(p) }}>{p}</span>
            })}
        </div>

        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.Userphoto} />
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                debugger
                                props.toggleIsFollowingProgress(true, u.id)
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                    {
                                        withCredentials: true,
                                        headers: { "API-KEY": "41b93164-ac16-42f2-ac7d-3e3369427b3c" }
                                    })
                                    .then(Response => {
                                        if (Response.data.resultCode == 0) {
                                            props.unfollow(u.id)
                                        }
                                        props.toggleIsFollowingProgress(false, u.id)
                                    })
                            }}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.toggleIsFollowingProgress(true, u.id)
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, { withCredentials: true, headers: { "API-KEY": "41b93164-ac16-42f2-ac7d-3e3369427b3c" } }).then(Response => {
                                    if (Response.data.resultCode == 0) {
                                        props.follow(u.id)
                                    }
                                    props.toggleIsFollowingProgress(false, u.id)
                                })
                            }}>Follow</button>}
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

export default Users