import React from "react";
import "../css/Dashboard.css";
import { AiOutlineSearch, AiOutlineLike } from "react-icons/ai";
import { AiOutlineBell } from "react-icons/ai";
import { FaUserTie } from "react-icons/fa";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { BsFillTagsFill, BsPeople } from "react-icons/bs";

function Dashboard() {
  return (
    <div className="container-fluid">
      <header>
        <h3 className="dashboard-header">Dashboard</h3>
        <div className="search-bar">
          <div className="search-profile">
            {" "}
            <input type="text" placeholder="Search.." />
            <AiOutlineSearch className="search-icon" />
          </div>
          <div>
            <AiOutlineBell className="bell-icon" />
          </div>
          <div>
            <FaUserTie className="user-icon" />
          </div>
        </div>
      </header>
      <div className="cards">
        <div className="card1">
          <RiMoneyDollarCircleFill className="icons" />
          <p>Total Revenues</p>
          <h3>$2,129,430</h3>
        </div>
        <div className="card2">
          <BsFillTagsFill className="icons" />
          <p>Total Transactions</p>
          <h3>1,520</h3>
        </div>
        <div className="card3">
          <AiOutlineLike className="icons" />
          <p>Total Likes</p>
          <h3>9,721</h3>
        </div>
        <div className="card4">
          <BsPeople className="icons" />
          <p>Total Users</p>
          <h3>892</h3>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
