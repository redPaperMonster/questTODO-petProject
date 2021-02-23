const ADD_QUEST = 'ADD-QUEST';
const NEW_QUEST_NAME = 'UPDATE-QUEST-NAME-TEXT';
const CHANGE_CURRENT_QUEST_ID = 'CHANGE-CURRENT-QUEST-ID'
const UPDATE_QUEST_DESCR = 'UPDATE-QUEST-DESCRIPTION'
const UPDATE_QUEST_COINS = 'UPDATE-QUEST-COINS-REWARD'
const UPDATE_QUEST_EXP = 'UPDATE-QUEST-EXPIRIENSE-REWARD'
const UPDATE_QUEST_START_DATE = 'UPDATE-QUEST-START-DATE'
const UPDATE_QUEST_FINISH_DATE = 'UPDATE-QUEST-FINISH-DATE'
const UPDATE_QUEST_CHANGE_TYPE = 'UPDATE-QUEST-CHANGE-TYPE'
const UPDATE_QUEST_CHANGE_TO_DAILY_TYPE = 'UPDATE-QUEST-CHANGE-TO-DAYLI-TYPE'

let initialState = {
  questInfo: [
    {
      q_id: 1, q_name: "Сделать домашнюю работу по матеше", q_desc: "какая домашка ебан ты отчислился", q_coins: 15,
      q_exp: 17, q_start_date: "16.01.2021", q_end_date: "17.01.2022", q_type: "ежедневный"
    },
    {
      q_id: 2, q_name: "Выгулять пса", q_desc: "какой пес ебан у тебя кошка", q_coins: 444444,
      q_exp: 666, q_start_date: "лул", q_end_date: "кек", q_type: "разовый"
    },
    {
      q_id: 3, q_name: "Стать гуру React", q_desc: "ну ты ваще черт ебать хахаха чмо", q_coins: 0,
      q_exp: 14444444445, q_start_date: "16.01.0000", q_end_date: "17.01.2000", q_type: "разовый"
    }
  ],
  questTypes: [
    {UPDATE_QUEST_SINGLE_TYPE: 'Разовый'},
    {UPDATE_QUEST_DAILY_TYPE: 'Ежедневный'}
  ]
,
  newQuestName: '',
  newQuestDescr: '',
  newQuestCoins: '',
  newQuestExp: '',
  newQuestStartDate: '',
  newQuestFinishDate: '',
  newQuestType: 'Разовый',
  currentQuestID: 1

}

const questReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_QUEST: {
      let maxID = state.questInfo.reduce((acc, curr) => acc.q_id > curr.q_id ? acc : curr).q_id;
      let newQuest = {
        q_id: maxID + 1,
        q_name: state.newQuestName, q_desc: state.newQuestDescr, q_coins: state.newQuestCoins,
        q_exp: state.newQuestExp, q_start_date: state.newQuestStartDate, q_end_date: state.newQuestFinishDate,
        q_type: state.newQuestType
      };
      return {
        ...state,
        questInfo: [...state.questInfo, newQuest],
        newQuestName: '',
        newQuestDescr: '',
        newQuestCoins: '',
        newQuestExp: '',
        newQuestStartDate: '',
        newQuestFinishDate: ''
      };
    }
    case NEW_QUEST_NAME: {
      return {
        ...state,
        newQuestName: action.newQuestName
      };
    }
    case CHANGE_CURRENT_QUEST_ID: {
      return {
        ...state,
        currentQuestID: action.newID
      }
    }
    case UPDATE_QUEST_DESCR: {
      return {
        ...state,
        newQuestDescr: action.newQuestDescr
      }
    }
    case UPDATE_QUEST_COINS: {
      return {
        ...state,
        newQuestCoins: action.newQuestCoins
      }
    }
    case UPDATE_QUEST_EXP: {
      return {
        ...state,
        newQuestExp: action.newQuestExp
      }
    }
    case UPDATE_QUEST_START_DATE: {
      return {
        ...state,
        newQuestStartDate: action.newQuestStartDate
      }
    }
    case UPDATE_QUEST_FINISH_DATE: {
      return {
        ...state,
        newQuestFinishDate: action.newQuestFinishDate
      }
    }
    // case UPDATE_QUEST_CHANGE_TO_SINGLE_TYPE: {
    //   return {
    //     ...state,
    //     newQuestType: action.newQuestType
    //   }
    // }
    case UPDATE_QUEST_CHANGE_TYPE: {
      return {
        ...state,
        newQuestType: action.newQuestType
      }
    }
    default:
      return state;

  }
}


export const addQuestActionCreator = () => ({ type: ADD_QUEST })
export const updateQuestNameActionCreator = (newName) => ({ type: NEW_QUEST_NAME, newQuestName: newName })
export const updateQuestDecrActionCreator = (newDescr) => ({ type: UPDATE_QUEST_DESCR, newQuestDescr: newDescr })
export const updateQuestCoinsActionCreator = (newCoins) => ({ type: UPDATE_QUEST_COINS, newQuestCoins: newCoins })
export const updateQuestExpActionCreator = (newExp) => ({ type: UPDATE_QUEST_EXP, newQuestExp: newExp })
export const updateQuestStartDateActionCreator = (newStartDate) => ({ type: UPDATE_QUEST_START_DATE, newQuestStartDate: newStartDate })
export const updateQuestFinishDateActionCreator = (newFinishDate) => ({ type: UPDATE_QUEST_FINISH_DATE, newQuestFinishDate: newFinishDate })
export const updateQuestTypeChangeActionCreator = (type) => ({ type: UPDATE_QUEST_CHANGE_TYPE, newQuestType: type })
  export const changeCurrentIDActionCreator = (id) => ({ type: CHANGE_CURRENT_QUEST_ID, newID: id })

export default questReducer;