import React, {useContext} from 'react'
import App from '../components/App'

import {GlobalContext} from "../contexts/providers/GlobalProvider";

import {CountUp} from "../contexts/actions/GlobalAction";

export default () => {

    // const {state, dispatch} = useContext(GlobalContext);

    const {dispatch} = useContext(GlobalContext);

    return (
        <App>
            <p>About Page</p>
            <button onClick={_ => {
                CountUp({dispatch})
            }}>button</button>
                </App>
                )
            }