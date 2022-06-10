import React from 'react'
import { useSelector } from 'react-redux'
import Styles from './Navbar.module.css'
import {useNavigate} from 'react-router-dom'
const Navbar = () => {
  const navigate = useNavigate();
  const {user} = useSelector(state=>state.user)

  const homehandler = () => {
    navigate("/")
  }
  return (
    <>
    <div className={Styles.Navbar}>
        <h1>
            MERN
        </h1>

        <button className={Styles.button} onClick={homehandler}>
          HOME
        </button>

    </div>
    </>
  )
}

export default Navbar