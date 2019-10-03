import React from 'react'
import s from './Navbar.module.css'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
    return <nav className= {s.nav}>
        <div className={s.item}>
            <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/dialogs" activeClassName={s.active}>Message</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/news">News</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/music">Music</NavLink>
        </div>
    </nav>
}

export default Navbar