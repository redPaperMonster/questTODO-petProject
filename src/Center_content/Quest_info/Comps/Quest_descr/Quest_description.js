import css_classes from "./Quest_desc.module.css";

//
const Quest_description= (props) => {
    return (
        <div className="quest_wrapper__descr">
        <h1>{props.questName}</h1>
        <p>{props.questDescr}</p>
        </div>
    )

}

export default Quest_description;