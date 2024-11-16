import React from "react";

import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "motion/react";

const Groups = () => {
  const lightTheme = useSelector((state) => state.themeKey);
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{
          ease: "anticipate",
          duration: "0.3",
        }}
        className="list-container"
      >
        <div className={"ug-header" + (lightTheme ? "" : " dark")}>
          <img
            src="/images/liveChat.png"
            alt=""
            style={{ height: "2rem", width: "2rem" }}
          />
          <p className={"ug-title" + (lightTheme ? "" : " dark")}>
            Available Groups
          </p>
        </div>
        <div className="sb-search">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <input type="text" placeholder="Search" className="sb-searchbox" />
        </div>
        <div className="ug-list">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="list-item"
          >
            <p className="con-icon">T</p>
            <p className="con-title">Test Group</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="list-item"
          >
            <p className="con-icon">T</p>
            <p className="con-title">Test Group</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="list-item"
          >
            <p className="con-icon">T</p>
            <p className="con-title">Test Group</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="list-item"
          >
            <p className="con-icon">T</p>
            <p className="con-title">Test Group</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="list-item"
          >
            <p className="con-icon">T</p>
            <p className="con-title">Test Group</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="list-item"
          >
            <p className="con-icon">T</p>
            <p className="con-title">Test Group</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="list-item"
          >
            <p className="con-icon">T</p>
            <p className="con-title">Test Group</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="list-item"
          >
            <p className="con-icon">T</p>
            <p className="con-title">Test Group</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="list-item"
          >
            <p className="con-icon">T</p>
            <p className="con-title">Test Group</p>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Groups;
