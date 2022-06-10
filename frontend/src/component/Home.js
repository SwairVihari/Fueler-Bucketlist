import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Styles from './Home.module.css'
const Home = () => {

  const navigate = useNavigate()
  const {user} = useSelector(state=> state.user)

  const userHandler = () => {
      navigate("/user")
  }

  const clientHandler = () => {
    navigate("/client")
  }

  const adminHandler = () => {
    navigate("/admin")
  }

  return (
    <div className={Styles.box}>
      <h4 className={Styles.header}> { user ? `Hi, ${user.name}` : " "}</h4>

      <div className={Styles.buttonContainer}>
            <button onClick={userHandler} className={Styles.button}>User</button>
            <button onClick={clientHandler} className={Styles.button}>Client</button>
            <button onClick={adminHandler} className={Styles.button}>Admin</button>
        </div>
    </div>
  )
}

export default Home