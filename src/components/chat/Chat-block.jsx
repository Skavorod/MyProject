import styles from './style.module.css'

const ChatBlock = (props) => {
    return (
        <div className={styles.chat}>
            <h3>Чат</h3>
            {props.chatData.map((el, i) => {
                return (
                    <div key={i}>
                        {el}
                    </div>
                )
            })}  


        </div>
    );
};

export default ChatBlock;