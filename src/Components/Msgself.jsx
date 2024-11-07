import React from 'react'

const Msgself = () => {
    var props2 = {name : "You" , message : "This is the sample message"}

  return (
    <div className='self-msg-cnt'>
      <div className='msgbox'>
        <p>{props2.message}</p>
        <p className='self-timeStamp'>12:00</p>
      </div>
    </div>
  )
}

export default Msgself
