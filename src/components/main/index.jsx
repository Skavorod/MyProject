import styles from './style.module.css'
import {Switch,Route}from 'react-router'
import Home from '../home'
import Chat from '../chat'
import TestApi from '../test-api'

const Main = () => {
    return (
        <div className={styles.container}>
            <Switch>
                <Route exact path='/' component={Home}></Route>
                <Route exact path='/chat' component={Chat}></Route>
                <Route exact path='/test' component={TestApi}></Route>
            </Switch>
        </div>
    )
}

export default Main