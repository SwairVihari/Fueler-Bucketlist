import React,{useState, useEffect} from 'react'
import axios from 'axios';
import { useDispatch,useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import Styles from './Login.module.css'
import { clearErrors, login } from '../actions/userAction';

const Login = () => {
    const {isAuthenticated, user, error} = useSelector(state => state.user)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginHandler = async(e) => {
      try{
      e.preventDefault();
      dispatch(login(email,password))
      }
      catch(error){
        alert(error.message)
    } 
  }

  useEffect(() => {
    if(error){
      console.log(error)
      alert(error)
      dispatch(clearErrors())
    }

    if(isAuthenticated){
      navigate("/home")
    }
  }, [isAuthenticated,error,dispatch]);

  return (
    <>
    <div className={Styles.box}>
        <h4 className={Styles.header}>Login Form</h4>

        <form>
        <input className={Styles.input} name='email' onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email'/>
        <input className={Styles.input} name='password' onChange={(e)=>{setPassword(e.target.value)}} type='password' placeholder='Password'/>

        <button type='submit' onClick={loginHandler} className={Styles.button}>
            Submit
        </button>
        </form>
    </div>
    </>
  )
}

export default Login