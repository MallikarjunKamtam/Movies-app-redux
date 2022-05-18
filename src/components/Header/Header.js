import React from "react";
import { Link } from "react-router-dom";
import { userImg } from "../../images/ImagesLinks";
import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <div className="logo">MovieLogo</div>
      </Link>
      <img className="user-image" src={userImg} alt="user" />
    </div>
  );
};

export default Header;
