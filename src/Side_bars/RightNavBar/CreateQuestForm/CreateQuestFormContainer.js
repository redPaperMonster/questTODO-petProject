
import React from 'react';
import { connect } from 'react-redux';
import {
    addQuestActionCreator, updateQuestNameActionCreator, updateQuestDecrActionCreator, updateQuestCoinsActionCreator,
    updateQuestExpActionCreator, updateQuestStartDateActionCreator, updateQuestFinishDateActionCreator,
    updateQuestTypeChangeActionCreator
} from "../../../Data_store/questReducer";
import CreateQuestForm from './CreateQuestForm';
const questTypeSingle = 'single'
const questTypeDaily = ''

let mapStateToProps = (state) => {
    return {
        questData: state.questData,
        types: state.questData.questTypes
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateQuestName: (text) => {
            dispatch(updateQuestNameActionCreator(text));
        },
        addQuestLocal: () => {
            dispatch(addQuestActionCreator());
        },
        updateQuestDescription: (descr) => {
            dispatch(updateQuestDecrActionCreator(descr));
        },
        updateQuestCoins: (coins) => {
            dispatch(updateQuestCoinsActionCreator(coins));
        },
        updateQuestExpiriense: (exp) => {
            dispatch(updateQuestExpActionCreator(exp));
        },
        updateQuestStartDate: (startDate) => {
            dispatch(updateQuestStartDateActionCreator(startDate));
        },
        updateQuestFinishDate: (finishDate) => {
            dispatch(updateQuestFinishDateActionCreator(finishDate));
        },     
        updateQuestType: (newType) => {
            dispatch(updateQuestTypeChangeActionCreator(newType));
        }
    }
}
const CreateQuestFormContainer = connect(mapStateToProps, mapDispatchToProps)(CreateQuestForm);


export default CreateQuestFormContainer;