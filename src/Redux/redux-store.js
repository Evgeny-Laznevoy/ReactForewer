import { createStore, combineReducers } from 'redux';
import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import mainReducer from './main-reducer';

let reducers = combineReducers({
    messagesPage: dialogsReducer,
    profilePage: profileReducer,
    mainPage: mainReducer
}) 

let store = createStore(reducers)

window.store = store

export default store