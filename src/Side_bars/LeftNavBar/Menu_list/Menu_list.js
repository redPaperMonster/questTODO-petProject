import { NavLink } from "react-router-dom"
import css_classes from "./../LeftNavigation.module.css"

const Menu_list = () => {
    return (
        <div>
            <ul className={css_classes.menu__list}>
                <li><NavLink to="/profile" activeClassName={css_classes.active_button}>Профиль</NavLink></li>
                <li><NavLink to="/shop" activeClassName={css_classes.active_button}>Магазин</NavLink></li>
                <li><NavLink to="/timer" activeClassName={css_classes.active_button}>Таймер</NavLink></li>
                <li><NavLink to="/about" activeClassName={css_classes.active_button}>О приложении</NavLink></li>
            </ul>
            
        </div>
    )
}

export default Menu_list;