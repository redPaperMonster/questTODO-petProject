import css_classes from './Quest_info.module.css'


const Quest_information = (props) => {
    return (
        <div>
        <div><b>Награда: </b> {props.reward_coins} монет, {props.reward_exp} опыта</div>
        <div><b>Дата и время начала:</b> {props.start_date}</div>
        <div><b>Дата и время окончания:</b> {props.finish_date}</div>
        <div><b>Тип квеста:</b> {props.quest_type}</div>
        </div>
    )

}

export default Quest_information;