
import { connect } from 'react-redux';
import Quest_info from './Quest_info';

// const Quest_info = () => {
//     return (
//         <div className="quest_wrapper">
//             <div className="quest_wrapper__descr">
//                 <Quest_description />
//             </div>
//             <div className="quest_wrapper__items">
//                 <Quest_items></Quest_items>
//             </div>
//             <div className="quest_wrapper__quest_info">
//                 <Quest_information reward_coins="10" reward_exp="5" start_date="11.01.2021 19:44" finish_date="13.01.2021 7:00" quest_type="ежедневный"  />
//             </div>
//             <div className="quest_wrapper__redact_button">
//                 <Quest_redact_button></Quest_redact_button>
//             </div>
//             <div  className="quest_wrapper__used_skills">
//                 <Quest_used_skills></Quest_used_skills>
//             </div>
//         </div>
//     )

// }n.q_id == state.questData.currentQuestID

const takeCurrentQuest = (quest, id) => {
    let aaa = {};
    quest.map(n => {
        if (n.q_id == id) {
            aaa = n;
        }
        else{
        }
    })
    return aaa;
}
const mapStoreToProps = (state) => {
    console.log(takeCurrentQuest(state.questData.questInfo, state.questData.currentQuestID))
    return {
        questData: takeCurrentQuest(state.questData.questInfo, state.questData.currentQuestID)
    }
}

const QuestInfoContainer = connect(mapStoreToProps)(Quest_info);
export default QuestInfoContainer;