import React from 'react'

const ConversationItem = ({props}) => {
  return (
    <div className='conversation-cnt'>
      <p className='con-icon'>{props.name[0]}</p>
      <p className='con-title'>{props.name}</p>
      <p className='con-lastmessage'>{props.lastmessage}</p>
      <p className='con-timeStamp'>{props.timestamp}</p>
    </div>
  )
}

export default ConversationItem
