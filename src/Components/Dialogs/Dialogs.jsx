import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogsItem/DialogsItem'
import Message from './Message/Message'

const Dialogs = (props) => {

    let dialogsElements = props.messagePages.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)

    let messagesElements = props.messagePages.messages.map(m => <Message message={m.message} id={m.id} />)

    debugger;

    return (
        <div className={s.dialogs}>
            <div className={s.gialogs_item}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div className={s.textarea}>
                <textarea ></textarea>
            </div>
        </div>
    );
}

export default Dialogs

