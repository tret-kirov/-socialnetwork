import React from "react";
import s from './Header.module.css';
import {NavLink} from "react-router-dom"

const Header = (props) => {
    return <header className={s.header}>
        < img src='http://s017.radikal.ru/i424/1210/b3/590a2c8bc20a.jpg '/>
        <div className={s.loginBlock}>
            {props.isAuth ? props.login
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>

    </header>
}

export default Header;