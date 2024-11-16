import React, { useState } from 'react'
import './mystyle.css';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton } from  '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import NightlightIcon from '@mui/icons-material/Nightlight';
import LightModeIcon from '@mui/icons-material/LightMode';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SearchIcon from '@mui/icons-material/Search';
import ConversationItem from './ConversationItem';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../Features/themeSlice';


const Sidebar = () => {
  const lightTheme = useSelector((state) => state.themeKey);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [conversations , setConversations] = useState([
      {
        name : "ankush",
        lastmessage : "last message",
        timestamp : "today",
      },
      {
        name : "aman",
        lastmessage : "last message",
        timestamp : "today",
      },
      {
        name : "anikat",
        lastmessage : "last message",
        timestamp : "today",
      },

  ])
  


  return (
    <div className='sidebar'>
      <div className={"sb-header" + (lightTheme ? "" : " dark")}>
        <div>
          <IconButton>
            <AccountCircleIcon className= {"icon" + (lightTheme ? "" : " dark")}/>
          </IconButton>
        </div>
        <div className='other-icons'>
          <IconButton onClick={()=>{navigate('users')}}>
            <PersonAddIcon className= {"icon" + (lightTheme ? "" : " dark")}/>
          </IconButton>
          <IconButton onClick={()=>{navigate('groups')}}>
            <GroupAddIcon className= {"icon" + (lightTheme ? "" : " dark")}/>
          </IconButton>
          <IconButton onClick={()=>{navigate('create-groups')}}>
            <AddCircleIcon className= {"icon" + (lightTheme ? "" : " dark")}/>
          </IconButton>
          <IconButton onClick={() => {dispatch(toggleTheme())}}>
            {lightTheme &&  <NightlightIcon className= {"icon" + (lightTheme ? "" : " dark")}/>}
            {!lightTheme &&  <LightModeIcon className= {"icon" + (lightTheme ? "" : " dark")}/>}
            
          </IconButton>
        </div>
          
      </div>
      <div className={"sb-search" + (lightTheme ? "" : " dark")}>
        <IconButton>
          <SearchIcon className= {"icon" + (lightTheme ? "" : " dark")}/>
        </IconButton>
      <input type="text" placeholder='Search' className={"sb-searchbox" + (lightTheme ? "" : " dark")} />
      </div>
      <div className={"sb-conversations" + (lightTheme ? "" : " dark")}>
        {conversations.map((conversation) => {
          return <ConversationItem props = {conversation} key={conversation.name}/>
        })}
      </div>
    </div>
  )
}

export default Sidebar
