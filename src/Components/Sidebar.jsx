import React, { useState } from 'react'
import './mystyle.css';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton } from  '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import LightModeIcon from '@mui/icons-material/LightMode';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SearchIcon from '@mui/icons-material/Search';
import ConversationItem from './ConversationItem';


const Sidebar = () => {
 
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
      <div className="sb-header">
        <div>
          <IconButton>
            <AccountCircleIcon/>
          </IconButton>
        </div>
        <div>
          <IconButton>
            <PersonAddIcon/>
          </IconButton>
          <IconButton>
            <GroupAddIcon/>
          </IconButton>
          <IconButton>
            <AddCircleIcon/>
          </IconButton>
          <IconButton>
            <LightModeIcon/>
          </IconButton>
        </div>
          
      </div>
      <div className="sb-search">
        <IconButton>
          <SearchIcon/>
        </IconButton>
      <input type="text" placeholder='Search' className='sb-searchbox' />
      </div>
      <div className="sb-conversations">
        {conversations.map((conversation) => {
          return <ConversationItem props = {conversation} key={conversation.name}/>
        })}
      </div>
    </div>
  )
}

export default Sidebar
