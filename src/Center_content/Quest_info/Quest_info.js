import Quest_description from "./Comps/Quest_descr/Quest_description"
import Quest_information from "./Comps/Quest_information/Quest_information"
import Quest_items from "./Comps/Quest_items/Quest_items"
import Quest_used_skills from "./Comps/Quest_used_skills/Quest_info_used_skills";
import Quest_redact_button from "./Comps/Redact_button/Quest_redact_button"
import './Quest_info.css';

const Quest_info = (props) => {
   // alert(props.reward_coins) questName={props.questData.q_name}
   //console.log(props.questData)
    return (
        <div className="quest_wrapper">
            <div className="quest_wrapper__descr">
                <Quest_description  questName={props.questData.q_name} questDescr={props.questData.q_desc}/>
            </div>
            {/* <div className="quest_wrapper__items">
                <Quest_items></Quest_items>
            </div> */}
            <div className="quest_wrapper__quest_info">
                <Quest_information reward_coins={props.questData.q_coins} reward_exp={props.questData.q_exp} 
                start_date={props.questData.q_start_date} finish_date={props.questData.q_end_date} 
                quest_type={props.questData.q_type}  />
            </div>
            <div className="quest_wrapper__redact_button">
                <Quest_redact_button></Quest_redact_button>
            </div>
            <div  className="quest_wrapper__used_skills">
                <Quest_used_skills></Quest_used_skills>
            </div>
        </div>
    )

}

export default Quest_info;