import React, { useState } from 'react';
import './mystyle.css';
import Sidebar from './Sidebar';
import Chatarea from './Chatarea';



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
      <Chatarea props={header}/>
    </div>
  )
}

export default MainContainer
