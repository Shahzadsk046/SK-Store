import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings, ExitToApp } from "@material-ui/icons";
import { Link, Navigate } from "react-router-dom";
import { logout } from "../../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";

export default function Topbar() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user)
  console.log(user)


  const handleClick = (e) => {
    e.preventDefault();
    logout(dispatch,user);
    <Navigate to="/login" replace />
  };

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <Link to="/" className="logo">SK Store</Link>
        </div>
        <div className="topRight">
          {/* <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div> */}
          <button className="logoutButton" onClick={handleClick}>
            Logout &nbsp;<ExitToApp />
          </button>
          <img src={user.currentUser.img ? user.currentUser.img : "https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"} alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
