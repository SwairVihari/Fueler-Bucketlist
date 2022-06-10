import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Styles from './Home.module.css'
const Home = () => {

  const navigate = useNavigate()
  
  const viewHandler = () => {
    navigate("/bucketlists")
  }

  const createHandler =() =>{
    navigate("/createbucketlist")
  }



  return (
    <div className={Styles.box}>
      <div className={Styles.buttonContainer}>
            <button onClick={viewHandler} className={Styles.button}>View BucketLists</button>
            <button onClick={createHandler} className={Styles.button}>Create Your BucketList</button>
        </div>
    </div>
  )
}

export default Home