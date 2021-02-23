import Quest_buttons from './Quest_list/Quest_button';
import css_classes from './RightNavigation.module.css';
import Button_add_quest from "./Button_add_quest"
import Quest_buttonContainer from './Quest_list/Quest_buttonContainer';

const RightNavigation = (props) => {

   
    return (
        <div className={css_classes.div_grid__rightnav} >
            <Quest_buttonContainer/>
            <Button_add_quest ></Button_add_quest>
        </div>
    )

}

export default RightNavigation;