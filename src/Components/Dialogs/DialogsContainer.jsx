import {connect} from 'react-redux'
import {updateNewMessageBodyCreator, sendMessageCreator} from "../../Redux/dialogs-reducer"
import Dialogs from './Dialogs'

// const DialogsContainer = (props) => {
//     let state = props.store.getState()                              //messagePages={props.AppState.messagesPage}

//     let onSendMessageClick = () =>{
//         props.store.dispatch(sendMessageCreator())
//     }

//     let onMessageChange = (body) => {
//         props.store.dispatch(updateNewMessageBodyCreator(body))
//     }

//     return <Dialogs updateNewMessageBody={onMessageChange} sendMessage={onSendMessageClick}  dialogsPage={state} />
// }

let mapStateToProps = (state) => {
    debugger
    return {
        dialogsPage: state,
        isAuth: state.auth.isAuth
        // newMessageBody: state.messagesPage.messagesPage.newMessageBody
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessage: () => {
            dispatch(sendMessageCreator())
        }

    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)


export default DialogsContainer

