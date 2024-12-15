import React, { useContext, useEffect, useRef, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import MessageSelf from "./MessageSelf";
import MessageOthers from "./MessageOthers";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";
import axios from "axios";
import { myContext } from "./MainContainer";

function ChatArea() {
  const lightTheme = useSelector((state) => state.themeKey);
  const [messageContent, setMessageContent] = useState("");
  const messagesEndRef = useRef(null);
  const dyParams = useParams();
  const [chat_id, chat_user] = dyParams._id
    ? dyParams._id.split("&")
    : [null, null]; // Safely handle undefined _id

  const userData = JSON.parse(localStorage.getItem("userData"));
  const [allMessages, setAllMessages] = useState([]);
  const { refresh, setRefresh } = useContext(myContext);
  const [loaded, setLoaded] = useState(false);

  if (!chat_id || !chat_user) {
    console.error("Error: Chat ID or user is missing!");
    return <div>Error: Chat ID or user is missing!</div>;
  }

  const sendMessage = () => {
    if (!messageContent.trim()) return;

    const config = {
      headers: {
        Authorization: `Bearer ${userData?.data?.token}`,
      },
    };

    axios
      .post(
        "http://localhost:5000/message/",
        {
          content: messageContent,
          chatId: chat_id,
        },
        config
      )
      .then((response) => {
        setMessageContent(""); // Clear the message input
        setRefresh(!refresh); // Trigger a refresh
      })
      .catch((err) => {
        console.error("Error sending message:", err);
      });
  };

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${userData.data.token}`,
      },
    };
    axios
      .get(`http://localhost:5000/message/${chat_id}`, config)
      .then(({ data }) => {
        setAllMessages(data);
        setLoaded(true);
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      })
      .catch((err) => console.error("Error fetching messages:", err));
  }, [refresh, chat_id, userData.data.token]);

  if (!loaded) {
    return (
      <div
        style={{
          border: "20px",
          padding: "10px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <Skeleton
          variant="rectangular"
          sx={{ width: "100%", borderRadius: "10px" }}
          height={60}
        />
        <Skeleton
          variant="rectangular"
          sx={{
            width: "100%",
            borderRadius: "10px",
            flexGrow: "1",
          }}
        />
        <Skeleton
          variant="rectangular"
          sx={{ width: "100%", borderRadius: "10px" }}
          height={60}
        />
      </div>
    );
  } else {
    return (
      <div className={"chatArea-container" + (lightTheme ? "" : " dark")}>
        <div className={"chatArea-header" + (lightTheme ? "" : " dark")}>
          <p className={"con-icon" + (lightTheme ? "" : " dark")}>
            {chat_user[0]}
          </p>
          <div className={"header-text" + (lightTheme ? "" : " dark")}>
            <p className={"con-title" + (lightTheme ? "" : " dark")}>
              {chat_user}
            </p>
          </div>
          <IconButton className={"icon" + (lightTheme ? "" : " dark")}>
            <DeleteIcon />
          </IconButton>
        </div>
        <div className={"messages-container" + (lightTheme ? "" : " dark")}>
          {allMessages
            .slice(0)
            .reverse()
            .map((message, index) => {
              const sender = message.sender;
              const self_id = userData.data._id;
              if (sender._id === self_id) {
                return <MessageSelf props={message} key={index} />;
              } else {
                return <MessageOthers props={message} key={index} />;
              }
            })}
        </div>
        <div ref={messagesEndRef} className="BOTTOM" />
        <div className={"text-input-area" + (lightTheme ? "" : " dark")}>
          <input
            placeholder="Type a Message"
            className={"search-box" + (lightTheme ? "" : " dark")}
            value={messageContent}
            onChange={(e) => {
              setMessageContent(e.target.value);
            }}
            onKeyDown={(event) => {
              if (event.code === "Enter") {
                sendMessage();
              }
            }}
          />
          <IconButton
            className={"icon" + (lightTheme ? "" : " dark")}
            onClick={sendMessage}
          >
            <SendIcon />
          </IconButton>
        </div>
      </div>
    );
  }
}

export default ChatArea;
