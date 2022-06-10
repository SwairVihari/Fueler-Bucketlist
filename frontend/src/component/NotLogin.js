import React from 'react'
import Styles from './NotLogin.module.css'
import { useNavigate } from 'react-router-dom'
const NotLogin = () => {

    const navigate = useNavigate()

    const Register = () => {
        navigate('/register')
    }

    const Login = () => {
        navigate('/login')
    }
  return (
    <>
    <div className={Styles.box}>
        <p className={Styles.text}>
        It seems you have not logged in.
        </p>

        <p  className={Styles.text}>
        Please sign up or login to access resource!
        </p>

        <div className={Styles.buttonContainer}>
            <button onClick={Login} className={Styles.button}>Log In</button>
            <button onClick={Register} className={Styles.button}>Sign Up</button>
        </div>
    </div>
    </>
  )
}

export default NotLogin