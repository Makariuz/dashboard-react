import React from "react";
import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import StoreMallDirectoryIcon from "@mui/icons-material/StoreMallDirectory";
import WalletIcon from "@mui/icons-material/Wallet";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import PsychologyIcon from "@mui/icons-material/Psychology";
import SettingsIcon from "@mui/icons-material/Settings";
import PortraitOutlinedIcon from "@mui/icons-material/PortraitOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">SAM.</span>
      </div>
      <hr />
      <div className="center">
        <ul>
        <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <li>
            <Person2OutlinedIcon className="icon"/>
            <span>Users</span>
          </li>
          <li>
            <StoreMallDirectoryIcon className="icon" />
            <span>Products</span>
          </li>
          <li>
            <WalletIcon className="icon"/>
            <span>Orders</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <QueryStatsIcon className="icon"/>
            <span>Stats</span>
          </li>
          <li>
            <NotificationsIcon className="icon"/>
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <MonitorHeartIcon className="icon"/>
            <span>System Health</span>
          </li>
          <li>
            <PsychologyIcon className="icon"/>
            <span>Logs</span>
          </li>
          <li>
            <SettingsIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <PortraitOutlinedIcon className="icon"/>
            <span>Profile</span>
          </li>
          <li>
            <LogoutOutlinedIcon className="icon"/>
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">

        <div className="colorOptions"></div>
        <div className="colorOptions"></div>


      </div>
    </div>
  );
};

export default Sidebar;