import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { register } from '../actions/userAction';
import Styles from './Register.module.css'

const Register = () => {

    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const registerHandler = async(e) => {
        e.preventDefault();
        const myData = {
            "name":name,
            "email":email,
            "password":password
        }

        dispatch(register(myData));
  
    }

  return (
    <>
    <div className={Styles.box}>
        <h4 className={Styles.header}>Registration Form</h4>
        <form>
        <input className={Styles.input} name='name' onChange={(e)=>{setName(e.target.value)}} placeholder='Name'/>
        <input className={Styles.input} name='email' onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email'/>
        <input className={Styles.input} name='password' onChange={(e)=>{setPassword(e.target.value)}} type='password' placeholder='Password'/>

        <button type='submit' onClick={registerHandler} className={Styles.button}>
            Submit
        </button>
        </form>
    </div>
    </>
  )
}

export default Register