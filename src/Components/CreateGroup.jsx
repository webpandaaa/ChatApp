import React from 'react'

import DoneOutlineRoundedIcon from "@mui/icons-material/DoneOutlineRounded";
import { IconButton } from '@mui/material';

const CreateGroup = () => {
  return (
   
      <div className="createGroups-container">
        <input type="text" placeholder='Enter Group Name' className='sb-searchbox' />
        <IconButton>
            <DoneOutlineRoundedIcon/>
        </IconButton>
      </div>
  )
}

export default CreateGroup
