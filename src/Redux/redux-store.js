import { createStore, combineReducers, applyMiddleware } from 'redux';
import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import mainReducer from './main-reducer';
import usersReducer from './users-reduce';
import authReducer from './auth-reducer';
import thunkMiddleware from "redux-thunk"

let reducers = combineReducers({
    messagesPage: dialogsReducer,
    profilePage: profileReducer,
    mainPage: mainReducer,
    usersPage: usersReducer,
    auth: authReducer
}) 

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store

export default store