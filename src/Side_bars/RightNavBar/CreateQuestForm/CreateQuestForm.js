
import React from 'react';
import CustomInput from './../../../Common_components/CustomInput';

const CreateQuestForm = (props) => {

    let addQuest = (e) => {    
        e.preventDefault();
        props.modalClose();     
        props.addQuestLocal();     
    }

    let updateQuestType = (e) => {
        props.updateQuestType(e.target.value)
    }
    return (
        <form onSubmit={addQuest}>
            <div><label>
                Название квеста:
            <CustomInput onChange={(e)=>props.updateQuestName(e.target.value)} value={props.questData.newQuestName} type="text" width="200px" />
            </label>
            </div>
            <div><label>
                Описание квеста:
          </label>

            </div>
            <textarea onChange={(e)=>props.updateQuestDescription(e.target.value)} 
            value={props.questData.newQuestDescr}></textarea>
            <div>
                <label>
                    Награда:
                        <CustomInput onChange={(e)=>props.updateQuestCoins(e.target.value)} 
                        value={props.questData.newQuestCoins} type="text" width="20px" />       coins
                        <CustomInput onChange={(e)=>props.updateQuestExpiriense(e.target.value)} 
                        value={props.questData.newQuestExp} type="text" width="20px" />      exp
         </label>
            </div>
            <div>
                <label>Дата и время начала квеста:
                    <CustomInput type="datetime-local" width="180px" onChange={(e)=>props.updateQuestStartDate(e.target.value)}
                    value={props.questData.newQuestStartDate}></CustomInput>
                </label>
            </div>
            <div>
                <label>Дата и время окончания квеста:
                    <CustomInput type="datetime-local" width="180px" onChange={(e)=>props.updateQuestFinishDate(e.target.value)}
                     value={props.questData.newQuestFinishDate} />
                </label>
            </div>
            <div> <label>Тип квеста:
          <select value={props.questData.newQuestType} onChange={updateQuestType}>
                    <option value={props.types.UPDATE_QUEST_SINGLE_TYPE}>Одноразовый</option>
                    <option value={props.types.UPDATE_QUEST_DAILY_TYPE}>Ежедневный</option>
                </select></label>
            </div>

            <div>
                <label>Сложность квеста:</label>
            </div>
            <input type="range"></input>
            
            <input type="submit" value="Отправить" />
        </form>
    );
}



export default CreateQuestForm;