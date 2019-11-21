import {connect} from 'react-redux'
import {updateNewMessageBodyCreator, sendMessageCreator} from "../../Redux/dialogs-reducer"
import Dialogs from './Dialogs'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'

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
        dialogsPage: state
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

let AuthRedirectComponent = withAuthRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)


export default DialogsContainer

