import { Button, TextField } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div className='login-container'>
      <div className='image-container'>
            <img src="/public/images/liveChat.png" alt="" className='welcome-logo' />
      </div>
      <div className='login-box'>
        <p className='login-text'>Login to Your Account</p>
        <TextField id="standard-basic" label="Username" variant="standard" />
        <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
        />
        <Button variant="outlined">Login</Button>
      </div>
    </div>
  )
}

export default Login
