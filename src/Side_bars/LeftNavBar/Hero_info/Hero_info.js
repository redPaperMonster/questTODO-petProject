import BorderLine from "../../../Common_components/Border_line"
import css_classes from "./../LeftNavigation.module.css"

const Hero_info = (props) => {
    return (
        <div className={css_classes.div_grid__hero_info}>
        <ul className={css_classes.menu__list}>
        <li><h4 >{props.hero_name}</h4></li>
        <li><h4>Уровень: {props.hero_lvl}</h4></li>
        <li><h4 >Ранг: {props.hero_rank}</h4></li>
        <li> <h4 >Новый уровень:</h4></li>
        <li><h4 >{props.hero_current_exp}/{props.hero_required_exp}</h4></li>
            </ul>
            <BorderLine color = "white" width = "200px"></BorderLine>
        </div>

    )
}


export default Hero_info;