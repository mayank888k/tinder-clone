import { IconButton } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import './chatsScree.css'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import SendIcon from '@material-ui/icons/Send';
import { useParams } from 'react-router-dom';
import database from '../firebase';
import firebase from 'firebase'
import Header from './Header';

const ChatScreen = () => {

    const {peopleId} = useParams()
    const [name,setName] = useState([])
    const [imgUrl, setImg]=useState([])
    const [messages, setMessages] = useState([])
    const [input, setInput] = useState('')
    
    useEffect(()=>{

        try {
            
         database.collection('people').doc(peopleId).onSnapshot(snap =>(setName(()=>(snap.data().name))))
         database.collection('people').doc(peopleId).onSnapshot(snap =>(setImg(()=>(snap.data().url))))

         database.collection('people').doc(peopleId).collection('messages').orderBy('timestamp','asc').onSnapshot(snap => setMessages(snap.docs.map(message =>(message.data()))))

        
        } catch (error) {
            console.log(error)
        }
    },[peopleId])
    
    // console.log(messages)

    const send = (e) =>{
        e.preventDefault()
        database.collection("people").doc(peopleId).collection('messages').add({
            message:input,
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
        })
        setInput('')
    }

    // const lastseen = new Date( timestamp.toDate()).toLocaleTimeString()

    

    return (
        <div >
        <Header imgurl={imgUrl} name={name} lastseen={new Date(messages[messages.length - 1]?.timestamp?.toDate()).toLocaleTimeString()} backButton="/chats" />
            <div className="chatBody">
                {
                    messages.map(msg => (msg.name ? (
                        <div className="msgbody">
                            <h5>{msg.message}</h5>
                            <p>{new Date(msg?.timestamp?.toDate()).toLocaleTimeString()}</p>
                        </div>
                    ):(<div className="msgbody msgSend">
                            <h5>{msg.message}</h5>
                            <p>{new Date(msg?.timestamp?.toDate()).toLocaleTimeString()}</p>
                        </div>)))
                }
            </div>

            <div className="chatBottum">
            <form  className="chatItems">

                <IconButton>
                    <InsertEmoticonIcon />
                </IconButton>
                <input placeholder="Type Your Message..." type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
                <IconButton>
                    <MicIcon />
                </IconButton>
                <IconButton type='submit' onClick={send}>
                    <SendIcon />
                </IconButton>
            </form>
            </div>
        </div>
    )
}

export default ChatScreen