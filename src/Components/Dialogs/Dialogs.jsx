import React from 'react'
import s from './Dialogs.module.css'
import { NavLink } from "react-router-dom"

const DialogItem = (props) => {
    return <div className={s.dialog}>
        <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className={s.message}>{props.message}</div>
}

let dialogs = [
    { id: 1, name: 'Dima' },
    { id: 2, name: 'Evgen' },
    { id: 3, name: 'Natali' },
    { id: 4, name: 'Fill' },
    { id: 5, name: 'Sasha' },
]


let messages = [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'How are you?' },
    { id: 3, message: 'Ho Ho Ho' },
    { id: 4, message: 'Yo' },
    { id: 5, message: 'Hello' },
]


let dialogsElements = dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id} /> )

let messagesElements = messages.map( message => <Message message={message.message} /> )

const Dialogs = (props) => {
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

