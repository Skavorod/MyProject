import {Link} from 'react-router-dom'
import styles from './style.module.css'

const Comment = (props) => {
    return (
        <div className={styles.wrapper}>
            <label className={styles.wrapper_label}>Напишите сообщение</label>
            <input className={styles.wrapper_input} value={props.inputValue} onChange={(e) => props.setInputValue(e.target.value)}></input>
            <div className={styles.wrapper_buttons}>
                <button className={styles.wrap_but} onClick={props.sendMessage}>Отправить</button>
                <button className={styles.wrap_but_del} onClick={() => props.setChatData([])}>Удалить</button>
            </div>
            
            {props.showDialogReg && (
                <div className={styles.dontauth}>  
                    Вы не авторизованы, перейдите по <Link to='/'>ссылке</Link>
                </div>
            )}
        </div>
    )
}

export default Comment;