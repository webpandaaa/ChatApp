import React from 'react'
import { useNavigate } from 'react-router-dom'

const ConversationItem = ({props}) => {
  console.log('propsData' , props);
  const navigate = useNavigate();
  return (
    <div className='conversation-cnt' onClick={()=> {navigate('chat')}} >
      <p className='con-icon'>{props.sender.name[0]}</p>
      <p className='con-title'>{props.sender.name}</p>
      <p className='con-lastmessage'>{props.lastmessage}</p>
      <p className='con-timeStamp'>{props.timestamp}</p>
    </div>
  )
}

export default ConversationItem
