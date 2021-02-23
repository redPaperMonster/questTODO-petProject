import React from 'react';
import { addQuestActionCreator,updateQuestNameActionCreator } from "./../../Data_store/questReducer";
const Shop = (props) => {

    let newQuest = React.createRef();

    let addQuestLocal = () => {
        let action = addQuestActionCreator();
        props.dispatch(action);
    }

    let nameChanged = () => {
        let text = newQuest.current.value;
        let action = updateQuestNameActionCreator(text);
        props.dispatch(action);
    }

    return (
        <div>
            <textarea ref={newQuest} value={props.data} onChange={nameChanged} />
            <div>
                <button onClick={addQuestLocal}>suka)</button>
            </div>

        </div>
    )

}

export default Shop;