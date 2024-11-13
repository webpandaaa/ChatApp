import React from "react";

import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from  '@mui/material';

const Groups = () => {
  return (
    <div className="list-container">
      <div className="ug-header">
        <img
          src="/images/liveChat.png"
          alt=""
          style={{ height: "2rem", width: "2rem" }}
        />
        <p className="ug-title">Available Groups</p>
      </div>
      <div className="sb-search">
        <IconButton>
          <SearchIcon />
        </IconButton>
        <input type="text" placeholder="Search" className="sb-searchbox" />
      </div>
      <div className="ug-list">
        <div className="list-item">
          <p className="con-icon">T</p>
          <p className="con-title">Test Group</p>
        </div>
        <div className="list-item">
          <p className="con-icon">T</p>
          <p className="con-title">Test Group</p>
        </div>
        <div className="list-item">
          <p className="con-icon">T</p>
          <p className="con-title">Test Group</p>
        </div>
        <div className="list-item">
          <p className="con-icon">T</p>
          <p className="con-title">Test Group</p>
        </div>
        <div className="list-item">
          <p className="con-icon">T</p>
          <p className="con-title">Test Group</p>
        </div>
        <div className="list-item">
          <p className="con-icon">T</p>
          <p className="con-title">Test Group</p>
        </div>
        <div className="list-item">
          <p className="con-icon">T</p>
          <p className="con-title">Test Group</p>
        </div>
        <div className="list-item">
          <p className="con-icon">T</p>
          <p className="con-title">Test Group</p>
        </div>
      </div>
    </div>
  );
};

export default Groups;
