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
function App() {
   const dispatch = useDispatch();

   const {loading, isAuthenticated, user } = useSelector(state => state.user)


  useEffect(() => {
    dispatch(loaduser())
  },[])

  return (
    <>
    <Navbar/>

    <Routes>
      <Route exact path='/' element={isAuthenticated ? <Home/>: <NotLogin/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/user' element={user && ["user" , "client", "admin"].includes(user.role) ? <User/> : <Login/>}/>
      <Route path='/client' element={ user && ["client", "admin"].includes(user.role) ? <Client/> : <Login/>}/>
      <Route path='/admin' element={user && [ "admin"].includes(user.role) ? <Admin/> : <Login/>}/>
    </Routes>
    </>
  );
}

export default App;
