const ADD_POST = 'ADD-POST'
const SEND_MESSAGE = 'SEND_MESSAGE'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'

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

    dispatch(action) {
        if (action.type === ADD_POST) {
            let lastId = this._State.profilePage.posts.length

            let newPost = {
                id: lastId++,
                post: this._State.profilePage.newPostText
            }
            this._State.profilePage.posts.push(newPost)
            this._State.profilePage.newPostText = ''
            this._callSubscriber(this._State)
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._State.profilePage.newPostText = action.newText
            this._callSubscriber(this._State)
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._State.messagesPage.newMessageBody = action.body
            this._callSubscriber(this._State)
        }
    }
}


export const addPostActionCreator = () => ({ type: 'ADD-POST' })

export const updateNewPostTextActionCreator = (text) =>
    ({ type: 'UPDATE-NEW-POST-TEXT', newText: text })


    export default store

window.store = store


