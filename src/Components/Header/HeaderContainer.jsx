import React from 'react'
import s from'./Header.module.css'
import {NavLink} from 'react-router-dom'
import Header from './Header'
import * as Axios from 'axios'
import { connect } from 'react-redux'
import { setAuthUserData } from '../../Redux/auth-reducer'


class HeaderContainer extends React.Component {

    componentDidMount() {
        Axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true} ).then(Response => { 
            if (Response.data.resultCode === 0) {
                let {id, email, login} = Response.data.data
                this.props.setAuthUserData(id, email, login)
            }
        })
    }

    render(){
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)