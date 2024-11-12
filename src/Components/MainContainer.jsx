import React, { useState } from 'react';
import './mystyle.css';
import Sidebar from './Sidebar';
import Chatarea from './Chatarea';
import Welcome from './Welcome';
import CreateGroup from './CreateGroup';
import User_Groups from './Users';
import { Outlet } from 'react-router-dom';



const MainContainer = () => {

  const [header , setHeader] = useState([
    {
      name : "ankush",
      timestamp : "today",
    },

  ])

  return (
    <div className='maincnt'>
      <Sidebar/> 
      <Outlet/>
    </div>
  )
}

export default MainContainer
