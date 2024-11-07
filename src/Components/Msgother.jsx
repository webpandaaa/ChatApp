import React from 'react'

const Msgother = () => {
    var props1 = {name : "Random" , message : "This is the sample message"}
  return (
    <div className='msgother-cnt'>
        <div className='conversation-cnt'>
            <p className='con-icon'>{props1.name[0]}</p>
            <div className='other-text-content'>
                <p className='con-title'>{props1.name}</p>
                <p className='con-lastmessage'>{props1.message}</p>
                <p className='con-timeStamp'>12:00</p>
            </div>
        </div>
      
    </div>
  )
}

export default Msgother
