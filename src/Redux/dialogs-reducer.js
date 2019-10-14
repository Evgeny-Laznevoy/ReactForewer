const SEND_MESSAGE = 'SEND_MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'

let initialState = {
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
    newMessageBody: ''
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            }
        case SEND_MESSAGE:
            let body = state.newMessageBody
            let lastId = state.messages.length
            lastId++
            debugger
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, { id: lastId, message: body }]
            };
        default:
            return state
    }
}


export const sendMessageCreator = () => ({ type: 'SEND_MESSAGE' })

export const updateNewMessageBodyCreator = (body) =>
    ({ type: 'UPDATE_NEW_MESSAGE_BODY', body: body })


export default dialogsReducer