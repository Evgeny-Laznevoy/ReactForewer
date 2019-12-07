import {connect} from 'react-redux'
import {updateNewMessageBodyCreator, sendMessageCreator} from "../../Redux/dialogs-reducer"
import Dialogs from './Dialogs'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from '../../../../../../../AppData/Local/Microsoft/TypeScript/3.6/node_modules/redux'

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

compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)

let AuthRedirectComponent = withAuthRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)

