import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import { IconButton } from '@mui/material';
import Msgother from './Msgother';
import Msgself from './Msgself';

const Chatarea = () => {
  return (
    <div className='chatArea-cnt'>
      <div className="chatArea-header">
        <p className='con-icon'>A</p>
      <div className='header-text'>
        <p className='con-title'>Ankush</p>
        <p className='con-timeStamp'>online</p>
      </div>
        <IconButton>
          <DeleteIcon/>
        </IconButton>
      </div>
      <div className="message-container">
        <Msgother/>
        <Msgself/>
        <Msgother/>
        <Msgself/>
        <Msgother/>
        <Msgself/>
      </div>
      <div className="text-input-area">
        <input type="text" placeholder='type a messgae' className='inputarea' />
        <IconButton>
          <SendIcon/>
        </IconButton>
      </div>
    </div>
  )
}

export default Chatarea
