import Progress_bar from "../../../Common_components/Progress_bar"



const Skill = (props) => {
    return (
        <div >
            <span>Программирование</span>
            <Progress_bar percentage={props.percentage}
                skill_progress_req_to_next_lvl={props.skill_progress_req_to_next_lvl}
                current_skill_progress={props.current_skill_progress}></Progress_bar>
        </div>
    )

}

export default Skill;