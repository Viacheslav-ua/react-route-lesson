import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css"

const Navigation = () => {
    return (
        <nav >
            <NavLink className={s.link} activeClassName={s.activeLink} exact to={"/"}>Главная</NavLink>
            <NavLink className={s.link} activeClassName={s.activeLink} to={"/authors"}>Авторы</NavLink>
            <NavLink className={s.link} activeClassName={s.activeLink} to={"/books"}>Книги</NavLink>
        </nav>
    )
}
export default Navigation;