import styles from './style.module.css'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div className={styles.container}>
            <nav className={styles.navbar}>
                <Link to='/' className={styles.textNav}>Главная страница</Link>
                <Link to='/chat' className={styles.textNav}>Чат</Link>
                <Link to='/test' className={styles.textNav}>Баскетбольные команды</Link>
            </nav>
        </div>
    )
}

export default Header