import React, {useEffect} from 'react'
import {login} from "../../redux/action/auth.action"
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'

const LoginScreen = () => {
    const dispatch = useDispatch();

    const accessToken = useSelector(state => state.auth.accessToken);

    const history = useHistory();

    const handleLogin = () => {
         dispatch(login());
    }
    
    useEffect(() => {
        
       if(accessToken) {
           history.push('/');
       }
    }, [accessToken, history])
    return (
         <div className='login'>
            <div className='login_container'>
                <h2>Youtube Clone</h2>
               
                <button onClick={handleLogin}>Login With google</button>
                <p>This Project is made using YOUTUBE DATA API</p>
            </div>
        </div>
    )
}

export default LoginScreen
