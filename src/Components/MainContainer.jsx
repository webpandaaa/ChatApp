import React, { useState } from 'react';
import './mystyle.css';
import Sidebar from './Sidebar';
import Chatarea from './Chatarea';
import Welcome from './Welcome';
import CreateGroup from './CreateGroup';
import User_Groups from './User_Groups';



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
      {/* <Chatarea props={header}/> */}
      {/* <Welcome/> */}
      {/* <CreateGroup/> */}
      <User_Groups/>
    </div>
  )
}

export default MainContainer
