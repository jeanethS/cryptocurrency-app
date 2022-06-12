import React from "react";
import { Menu, Typography, Avatar, Button } from "antd";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import icon from "../images/cryptocurrency.png";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";
function Navbar() {
  const [key, setKey] = useState("");
  const navigate = useNavigate();
  const menuItems = [
    {
      key: "home",
      icon: <HomeOutlined />,
      label: "Home",
      onClick: () => {
        navigate("/");
      },
    },
    {
      key: "cryptocurrencies",
      icon: <FundOutlined />,
      label: "Cryptocurrencies",
      onClick: () => {
        navigate("/cryptocurrencies");
      },
    },
    {
      key: "exchanges",
      icon: <MoneyCollectOutlined />,
      label: "Exchanges",
      onClick: () => {
        navigate("/exchanges");
      },
    },
    {
      key: "news",
      icon: <BulbOutlined />,
      label: "News",
      onClick: () => {
        navigate("/news");
      },
    },
  ];
  const handleClick = (e) => {
    console.log(e);
    setKey(e.key);
  };
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/"> Crytoverse </Link>
        </Typography.Title>
      </div>
      <Menu
        onClick={handleClick}
        theme="dark"
        items={menuItems}
        defaultSelectedKeys={["1"]}
        style={{ color: "white" }}
      ></Menu>
    </div>
  );
}

export default Navbar;
