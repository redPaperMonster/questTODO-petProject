import Hero_info from './Hero_info/Hero_info';
import css_classes from './LeftNavigation.module.css';
import Menu_list from './Menu_list/Menu_list';


const LeftNavigation = () => {
    return (
        <div className={`${css_classes.div_grid__leftnav} ${css_classes.left_nav}`} >
            <Hero_info hero_name="Черт вонючий" hero_lvl="1" hero_rank="Нубик" hero_current_exp="0"
                hero_required_exp="100"></Hero_info>
            <Menu_list></Menu_list>
        </div>
    )

}

export default LeftNavigation;