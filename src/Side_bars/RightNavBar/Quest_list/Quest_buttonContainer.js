import { connect } from 'react-redux';
import Quest_buttons from './Quest_button';
import { changeCurrentIDActionCreator } from './../../../Data_store/questReducer';



const mapStateToProps = (state) => {
    return {
        questData: state.questData.questInfo
    }
}
const Quest_buttonContainer = (props) => {
    let quest_list = props.questData.map(n => <Quest_buttons quest_name={n.q_name} key={n.q_id} 
    quest_id={n.q_id} changeCurrentQuest = {props.changeCurrentQuest}/>)
    return quest_list;
}
const mapDispatchToProps = (dispatch) => {
    return {
        changeCurrentQuest: (id) => {
            dispatch(changeCurrentIDActionCreator(id));
        }
    }
}
let QuestListConnect = connect(mapStateToProps, mapDispatchToProps)(Quest_buttonContainer);


export default QuestListConnect;