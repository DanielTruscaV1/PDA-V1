import React, {useState} from 'react';
import style from "./ChatStyle.module.css";
import warningEmptyInput from "../audioFiles/warningEmptyInput1.mp3"
import messageSent from "../audioFiles/messageSent1.mp3";

const Chat = () => {
  const [input, setInput] = useState("");

  var warningEmptyInputAudio = new Audio(warningEmptyInput);
  var messageSentAudio = new Audio(messageSent);

  const checkInput = () => {
    if(input === "")
        warningEmptyInputAudio.play();
    else
        messageSentAudio.play();
  }

  return (
    <div className={style.chatContainer}>
        <h1 className={style.chatTitle}>
            PDA-V1 Chat
        </h1>
        <input className={style.chatInput} onChange={e => setInput(e.target.value)} type="text" placeholder="Send a messge..."/>
        <button className={style.chatButton} onClick={checkInput}>
            Send
        </button>
    </div>
  )
}

export default Chat;