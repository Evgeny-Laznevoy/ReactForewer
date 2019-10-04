import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogsItem/DialogsItem'
import Message from './Message/Message'


// let dialogs = [
//     { id: 1, name: 'Dima' },
//     { id: 2, name: 'Evgen' },
//     { id: 3, name: 'Natali' },
//     { id: 4, name: 'Fill' },
//     { id: 5, name: 'Sasha' },
// ]


// let messages = [
//     { id: 1, message: 'Hi' },
//     { id: 2, message: 'How are you?' },
//     { id: 3, message: 'Ho Ho Ho' },
//     { id: 4, message: 'Yo' },
//     { id: 5, message: 'Hello' },
// ]



const Dialogs = (props) => {

let dialogsElements = props.messagePages.dialogs.map( d => <DialogItem name={d.name} id={d.id}/> )

let messagesElements = props.messagePages.messages.map( m => <Message message={m.message} id={m.id} /> )

debugger;

    return (
        <div className={s.dialogs}>
            <div className={s.gialogs_item}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs

