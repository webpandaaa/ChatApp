import React from 'react';
import './mystyle.css';
import Sidebar from './Sidebar';
import WorkArea from './WorkArea';

const MainContainer = () => {
  return (
    <div className='maincnt'>
      <Sidebar/>
      <WorkArea/>
    </div>
  )
}

export default MainContainer
