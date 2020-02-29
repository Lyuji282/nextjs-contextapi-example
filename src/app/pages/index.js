import React,{useContext} from 'react'
import App from '../components/App'

import {GlobalContext} from "../contexts/providers/GlobalProvider";

export default () => {

    const {state} = useContext(GlobalContext);

    return(
    <App>

        <p>Index Page</p>
        <p>{state.value}</p>

    </App>
    )
}