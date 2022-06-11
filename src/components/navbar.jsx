import React from "react";
import { button, Menu, Typography, Avatar, Button } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";
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
      <Menu theme="dark">
        <Menu.item icon={<HomeOutlined />}>
          <Link to="/"> Home </Link>
        </Menu.item>
        <Menu.item icon={<FundOutlined />}>
          <Link to="/"> Cryptocurrencies </Link>
        </Menu.item>
      </Menu>
    </div>
  );
}

export default Navbar;
