import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import { Avatar, IconButton } from "@material-ui/core";
import ForumIcon from "@material-ui/icons/Forum";
import logo from "./logo.png";
import "./header.css";
import { NavLink, useHistory } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

const Header = ({ imgurl, lastseen, name, backButton }) => {
  const history = useHistory();
  const back = () => {
    history.replace(backButton);
  };

  return (
    <div>
      <div className="header">
        {backButton ? (
          <IconButton onClick={back}>
            <ArrowBackIosIcon style={{ marginLeft: "5px" }} />
          </IconButton>
        ) : (
          <NavLink exact to="/account">
            <IconButton>
              <PersonIcon />
            </IconButton>
          </NavLink>
        )}

        {/* {console.log(backButton)} */}
        {backButton === "/chats" ? (
          <div className="chatName">
            <div>
              <Avatar src={imgurl}></Avatar>
            </div>

            <div className="chat__detail">
              <h2>{name}</h2>
              <p>{lastseen}</p>
            </div>
          </div>
        ) : (
          <NavLink exact to="/">
            <IconButton className="header__icon">
              <img className="header__img" src={logo} alt="logo" />
            </IconButton>
          </NavLink>
        )}

        <NavLink exact to="/chats">
          <IconButton className="header__icon">
            <ForumIcon />
          </IconButton>
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
