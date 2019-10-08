const SEND_MESSAGE = 'SEND_MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'

const dialogsReducer = (state, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            return state
        case SEND_MESSAGE:
            let lastId = state.messages.length
            // let body = this._State.messagesPage.newMessageBody
            let newMessage = {
                id: lastId++,
                message: state.newMessageBody
            }
            state.messages.push(newMessage)
            state.newMessageBody = ''
        default:
            return state
    }
}


export const sendMessageCreator = () => ({ type: 'SEND_MESSAGE' })

export const updateNewMessageBodyCreator = (body) =>
    ({ type: 'UPDATE_NEW_MESSAGE_BODY', body: body })


export default dialogsReducer