import React from "react";
import { Menu, Typography, Avatar, Button } from "antd";
import { Link } from "react-router-dom";
import icon from "../images/cryptocurrency.png";

function Navbar() {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/"> Crytoverse </Link>
        </Typography.Title>
      </div>
    </div>
  );
}

export default Navbar;
