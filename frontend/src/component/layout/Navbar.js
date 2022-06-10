import React from 'react'
import { useSelector } from 'react-redux'
import Styles from './Navbar.module.css'
const Navbar = () => {

  const {user} = useSelector(state=>state.user)
  return (
    <>
    <div className={Styles.Navbar}>
        <h1>
            MERN
        </h1>

        <h5 className={Styles.userRole}>
            {user ? `Role: ${user.role}` : " "}
        </h5>

    </div>
    </>
  )
}

export default Navbar