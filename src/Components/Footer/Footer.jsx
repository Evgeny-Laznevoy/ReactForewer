import React from 'react'
import s from './Footer.module.css'

const Footer = () => {
    return <div className={s.footer}>
        <div className={s.middle}>
            <a className={s.btn} href="#">
                <i class="fab fa-facebook-f"></i>
            </a>
            <a className={s.btn} href="#">
                <i class="fab fa-twitter"></i>
            </a>
            <a className={s.btn} href="#">
                <i class="fab fa-google"></i>
            </a>
            <a className={s.btn} href="#">
                <i class="fab fa-instagram"></i>
            </a>
            <a className={s.btn} href="#">
                <i class="fab fa-youtube"></i>
            </a>
        </div>
    </div>
}

export default Footer