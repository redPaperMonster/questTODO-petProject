import { combineReducers, createStore } from "redux";
import  questReducer from './questReducer'
import skillsReducer from './skillsReducer'

let reducers = combineReducers({
    questData : questReducer,
    skills : skillsReducer
});
// questData > questInfo // newQuestName
let store = createStore(reducers);

window.store = store;
export default store;