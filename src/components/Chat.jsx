import { Avatar } from '@material-ui/core'
import React from 'react'
import { NavLink } from 'react-router-dom'
import './chat.css'

const Chat = ({name, message, img, id}) => {
    return (
        <div>
        <NavLink exact to={`/chatscreen/${id}`}>

            <div className="chat">
                <Avatar src={img} />
                <div className="chat__details">
                    <h2>{name}</h2>
                    <p>{message}</p>
                </div>
                <div className="chat__timestamp">
                    <p>3:45 PM</p>
                </div>
            </div>
        </NavLink>
        </div>
    )
}

export default Chat
