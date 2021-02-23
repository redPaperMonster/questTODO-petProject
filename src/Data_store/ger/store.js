
import questReducer from '../questReducer';
let store = {
  _state: {
    questData: {
      questInfo: [
        {
          q_id: 1, q_name: "Сделать домашнюю работу по матеше", q_desc: "какая домашка ебан ты отчислился", q_coins: 15,
          q_exp: 17, q_start_date: "16.01.2021", q_end_date: "17.01.2022", q_type: "ежедненвный"
        },
        {
          q_id: 2, q_name: "Выгулять пса", q_desc: "какой пес ебан у тебя кошка", q_coins: 444444,
          q_exp: 666, q_start_date: "16.01.2021", q_end_date: "17.01.2022", q_type: "разовый"
        },
        {
          q_id: 3, q_name: "Стать гуру React", q_desc: "какой пес ебан у тебя кошка", q_coins: 444444,
          q_exp: 666, q_start_date: "16.01.2021", q_end_date: "17.01.2022", q_type: "разовый"
        }
        // { q_id: 4, q_name: "Найти работу" },
        // { q_id: 5, q_name: "???" },
        // { q_id: 6, q_name: "PROFIT" },
      ],
      newQuestName: 'a?)'
    },
    skillsData: [{ skill_id: 1, skill_name: "suka" }]
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log('there is no observer');
  },
  subscriber(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action)
  {
    this._state.questData = questReducer(this._state.questData, action)

   
       this._callSubscriber(this._state);
    
  }
}
