import React,{useEffect} from 'react';
import {Routes, Route} from 'react-router-dom'
import './App.css';
import MetaData from './component/layout/MetaData';
import {useDispatch, useSelector} from "react-redux"
import Navbar from './component/layout/Navbar';
import Register from './component/Register';
import Login from './component/Login';
import NotLogin from './component/NotLogin';
import Home from './component/Home';
import { loaduser } from './actions/userAction';
import User from './component/UserLevel/User';
import Client from './component/UserLevel/Client';
import Admin from './component/UserLevel/Admin';
import CreateBucket from './component/CreateBucket';
import ViewBuckets from './component/ViewBuckets';
function App() {
   const dispatch = useDispatch();

  return (
    <>
    <Navbar/>

    <Routes>
      
      <Route path='/' element={<Home/>}/>
      <Route path='/createbucketlist' element={<CreateBucket/>}/>
      <Route path='/bucketlists' element={<ViewBuckets/>}/>
    </Routes>
    </>
  );
}

export default App;
