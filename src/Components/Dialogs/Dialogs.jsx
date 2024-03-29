import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogsItem/DialogsItem'
import Message from './Message/Message'
import {Redirect} from 'react-router-dom'

const Dialogs = (props) => {

    let state = props.dialogsPage.messagesPage                           //messagePages={props.AppState.messagesPage}

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)

    let messagesElements = state.messages.map(m => <Message message={m.message} id={m.id} />)

    let newMessageBody = state.newMessageBody

    let onSendMessageClick = () =>{
        props.sendMessage()
    }

    let onMessageChange = (e) => {
        let body = e.target.value
        props.updateNewMessageBody(body)
    }

    if (!props.isAuth) return <Redirect to={"/login"}/>

    return (
        <div className={s.dialogs}>
            <div className={s.gialogs_item}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
            </div>
            <div className={s.textarea}>
                <textarea value={ newMessageBody } onChange={ onMessageChange }></textarea>
                <button onClick={ onSendMessageClick }>Send</button>
            </div>
        </div>
    );
}

export default Dialogs

