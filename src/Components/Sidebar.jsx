import React, { useContext, useEffect, useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { IconButton } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import NightlightIcon from "@mui/icons-material/Nightlight";
import LightModeIcon from "@mui/icons-material/LightMode";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../Features/themeSlice";
import axios from "axios";
import { myContext } from "./MainContainer";

function Sidebar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const lightTheme = useSelector((state) => state.themeKey);
  const { refresh, setRefresh } = useContext(myContext);
  const [conversations, setConversations] = useState([]);
  const userData = JSON.parse(localStorage.getItem("userData"));

  if (!userData) {
    navigate("/");
    return null;
  }

  const loggedInUser = userData.data;

  useEffect(() => {
    const fetchConversations = async () => {
      try {
        const config = {
          headers: { Authorization: `Bearer ${loggedInUser.token}` },
        };
        const response = await axios.get("http://localhost:5000/chat/", config);
        setConversations(response.data);
      } catch (error) {
        console.error("Error fetching conversations: ", error);
      }
    };

    fetchConversations();
  }, [refresh]);

  const getChatName = (conversation) => {
    if (!conversation || !conversation.users) return "Unknown";
    const otherUser = conversation.users.find(user => user._id !== loggedInUser._id);
    return otherUser ? otherUser.name : "Unknown";
  };

  return (
    <div className="sidebar-container">
      <div className={`sb-header${lightTheme ? "" : " dark + line"}`}>  
        <div className="other-icons">
          <IconButton onClick={() => navigate("/app/welcome")}>
            <AccountCircleIcon className={`icon${lightTheme ? "" : " dark"}`} />
            {/* <h6>{loggedInUser.name || "User"}</h6> */}
          </IconButton>
          <IconButton onClick={() => navigate("users")}>
            <PersonAddIcon className={`icon${lightTheme ? "" : " dark"}`} />
          </IconButton>
          <IconButton onClick={() => navigate("groups")}>
            <GroupAddIcon className={`icon${lightTheme ? "" : " dark"}`} />
          </IconButton>
          <IconButton onClick={() => navigate("create-groups")}>
            <AddCircleIcon className={`icon${lightTheme ? "" : " dark"}`} />
          </IconButton>
          <IconButton onClick={() => dispatch(toggleTheme())}>
            {lightTheme ? <NightlightIcon className="icon" /> : <LightModeIcon className="icon" />}
          </IconButton>
          <IconButton onClick={() => {
            localStorage.removeItem("userData");
            navigate("/");
          }}>
            <ExitToAppIcon className={`icon${lightTheme ? "" : " dark"}`} />
          </IconButton>
        </div>
      </div>

      <div className={`sb-search${lightTheme ? "" : " dark"}`}>
        <IconButton className={`icon${lightTheme ? "" : " dark"}`}>
          <SearchIcon />
        </IconButton>
        <input placeholder="Search" className={`search-box${lightTheme ? "" : " dark"}`} />
      </div>

      <div className={`sb-conversations${lightTheme ? "" : " dark"}`}>
        {conversations.map((conversation, index) => {
          const chatName = getChatName(conversation);
          return (
            <div
              key={conversation._id}
              id="forHover"
              className="conversation-container"
              onClick={() => navigate(`chat/${conversation._id}&${chatName}`)}
            >
              <p className={`con-icon${lightTheme ? "" : " dark"}`}>{chatName[0]}</p>
              <p className={`con-title${lightTheme ? "" : " dark"}`}>{chatName}</p>
              <p className={`con-lastMessage${lightTheme ? "" : " dark"}`}>
                {conversation.latestMessage?.content || "No previous messages, click to start chatting"}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
