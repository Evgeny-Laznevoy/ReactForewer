import { createStore, combineReducers } from 'redux';
import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import mainReducer from './main-reducer';
import usersReducer from './users-reduce';

let reducers = combineReducers({
    messagesPage: dialogsReducer,
    profilePage: profileReducer,
    mainPage: mainReducer,
    usersPage: usersReducer
}) 

let store = createStore(reducers)

window.store = store

export default store