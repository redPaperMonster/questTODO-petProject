import { NavLink } from 'react-router-dom';
import css_classes from './../RightNavigation.module.css';



const Quest_buttons = (props) => {
    let changeQuest = () =>
    {
        props.changeCurrentQuest(props.quest_id)
    }
    return (
        <div>
            <NavLink onClick={changeQuest} to={"/quest/" + props.quest_id} className={css_classes.quest_button}>{props.quest_name}</NavLink>
        </div>
    )
}

export default Quest_buttons;