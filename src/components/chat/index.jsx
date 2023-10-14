import ChatBlock from './Chat-block'
import Comment from './Comment';
import styles from './style.module.css'
import { useState } from 'react'
import { useLocalStorage } from "../../hook/useLocalStorage"


const Chat = () => {

    const [chatData, setChatData] = useLocalStorage('CHAT', []);
    const [inputValue, setInputValue] = useState('');
    const [showDialogReg, setShowDialogReg] = useState(false)

    const [user] = useLocalStorage('USER')

    console.log(chatData);

    const sendMessage = () => {
        if (user) {
            setChatData([...chatData, `${user}: ${inputValue}`]);
            setInputValue('');
        }else{
            setShowDialogReg(true)
            setInputValue('');
        }

    }

    return (
        <div className={styles.container}>
            <ChatBlock chatData={chatData}></ChatBlock>
            <Comment
                inputValue={inputValue}
                setInputValue={setInputValue}
                setChatData={setChatData}
                sendMessage={sendMessage}
                showDialogReg={showDialogReg}

            >
            </Comment>
        </div>
    )
}

export default Chat