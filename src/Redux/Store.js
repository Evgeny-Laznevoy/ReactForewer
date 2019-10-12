import dialogsReducer from './dialogs-reducer'
import mainReducer from './main-reducer'
import profileReducer from './profile-reducer'

let store = {
    _State: {
        messagesPage: {
            dialogs: [
                { id: 1, name: 'Dima' },
                { id: 2, name: 'Evgen' },
                { id: 3, name: 'Natali' },
                { id: 4, name: 'Fill' },
                { id: 5, name: 'Sasha' }
            ],
            messages: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'How are you?' },
                { id: 3, message: 'Ho Ho Ho' },
                { id: 4, message: 'Yo' },
                { id: 5, message: 'Hello' }
            ],
            newMessageBody: ' '

        },
        profilePage: {
            posts: [
                { id: 1, post: 'My first post' },
                { id: 2, post: 'hi!!!' }
            ],
            newPostText: 'evgen purgen'
        },
        mainPage: {

        }
    },

    _callSubscriber() {
        console.log('state is changed!') //metod
    },

    getState() {
        return this._State
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },

    // lastId(param){
    //     return param.length
    // },

    dispatch(action) {
        this._State.messagesPage = dialogsReducer(this._State.messagesPage, action)
        this._State.profilePage = profileReducer(this._State.profilePage, action)
        this._State.mainPage = mainReducer(this._State.mainPage, action)
        this._callSubscriber(this._State)
    }
}

export default store

window.store = store


