import React from 'react'
import './App.css'
import MainContainer from './Components/MainContainer'
import Login from './Components/Login'
import { Routes , Route } from 'react-router-dom'
import Welcome from './Components/Welcome'
import Chatarea from './Components/Chatarea'
import CreateGroup from './Components/CreateGroup'
import Groups from './Components/Groups'
import Users from './Components/Users'
import "react-toastify/dist/ReactToastify.css";


const App = () => {
  return (
    <div className='app'>
      {/* <MainContainer/> */}
      {/* <Login/> */}

      <Routes>
        <Route path="/" element={<Login />} />
          <Route path='app' element={<MainContainer/>}>
              <Route path='welcome' element={<Welcome/>}/>
              <Route path="chat/:_id" element={<Chatarea />} />
              <Route path='users' element={<Users />}/>
              <Route path='groups' element={<Groups />}/>
              <Route path='create-groups' element={<CreateGroup />}/>

          </Route>
      </Routes>
    </div>
  )
}

export default App
