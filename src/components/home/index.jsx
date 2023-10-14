import { useLocalStorage } from '../../hook/useLocalStorage';
import styles from './style.module.css'
import { useState } from 'react'

const Home = () => {
    // const [user, setUser] = useState('');
    const [user,setUser] =useLocalStorage('USER',"")
    const [inputValue, setInputValue] = useState("");

    return (
        <div className={styles.container}>
            {user && (
                <div className={styles.form}>
                    <div className={styles.form_label}>Приветствуем уважаемый </div>
                    <p>{user}</p>
                    <button className={styles.form_button} onClick={() => setUser('')}>Выйти</button>
                </div>
            )}

            {!user && (
                <form className={styles.form}>
                    <label className={styles.form_label}>Введите ваше имя:</label>
                    <input className={styles.form_input}  placeholder=' ' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                    <button className={styles.form_button} onClick={() => setUser(inputValue)}>Сохранить</button>
                </form>
            )}
        </div>
    )
}

export default Home