import React from "react";
import "../css/Menubar.css";
import { RiDashboard2Fill } from "react-icons/ri";
import { AiFillSetting } from "react-icons/ai";
import { BsFillTagsFill } from "react-icons/bs";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { FaUserTie } from "react-icons/fa";
import { PiDotFill } from "react-icons/pi";
import { BiDownArrow, BiRightArrow } from "react-icons/bi";
import Dashboard from "./Dashboard";
import Activities from "./Activities";
import PieCharts from "./PieCharts";

function Menubar() {
  return (
    <div className="main-container">
      <div className="left-menu">
        <header className="header">Board.</header>
        <div className="menu-items">
          <ul>
            <li>
              <RiDashboard2Fill /> Dashboard
            </li>
            <li>
              <BsFillTagsFill /> Transactions
            </li>
            <li>
              <BsFillCalendarDateFill /> Schedules
            </li>
            <li>
              <FaUserTie /> Users
            </li>
            <li>
              <AiFillSetting /> Settings
            </li>
          </ul>
        </div>
        <div className="footer">
          <ul>
            <li>Help</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
      <div className="right-container">
        <Dashboard />
        <Activities />
        <div className="pie-value">
          <div className="pie-chart">
            <PieCharts />
            <div className="pie-chart-information">
              <div className="pb-4">
                May - June 2021 <BiDownArrow />
              </div>
              <PiDotFill className="dot1" />
              <strong>Basic Tees</strong> <p>45%</p>
              <PiDotFill className="dot2" />
              <strong>Custom Short Pants</strong> <p>27%</p>
              <PiDotFill className="dot3" />
              <strong>Super Hoodies</strong> <p>27%</p>
            </div>
          </div>

          <div>
            <h4>
              Today's Schedule{" "}
              <span className="see-all">
                See All <BiRightArrow />
              </span>
            </h4>
            <div className="schedule-1">
              <strong>Meeting with suppliers from Bali</strong>
              <p>14.00-15.30</p>
              <p>at Hotel</p>
            </div>
            <div className="schedule-2">
              <strong>Check application</strong>
              <p>14.00-15.30</p>
              <p>at Hotel</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menubar;
