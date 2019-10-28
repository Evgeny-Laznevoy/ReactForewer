import React from 'react'
import s from'./Header.module.css'
import {NavLink} from 'react-router-dom'

const Header = (props) => {
    return <header className = {s.header}>
        <img src = 'https://cdn4.iconfinder.com/data/icons/logos-3/426/react_js-512.png'></img>
        <div className={s.loginBlock}>
            {props.isAuth ? props.login
            :<NavLink to={'/login'}><i class="fas fa-sign-in-alt"></i></NavLink> }
        </div>
    </header>
}

export default Header