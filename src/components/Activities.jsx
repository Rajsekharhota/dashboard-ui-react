import React from "react";
import "../css/Activites.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function Activities() {
  const data = [
    {
      name: "Week 1",
      d1: 100,
      d2: 200,
    },
    {
      name: "Week 2",
      d1: 400,
      d2: 350,
    },
    {
      name: "Week3",
      d1: 150,
      d2: 250,
    },
    {
      name: "Week 4",
      d1: 450,
      d2: 250,
    },
  ];
  return (
    <div className="chart">
      <h3 className="chart-title">Activities</h3>
      <div className="data-shower">
        <div className="guest"></div>
        <span>Guest</span>
        <div className="user"></div>
        <span>User</span>
      </div>
      <span>May - June2021</span>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Line type="monotone" dataKey="d1" stroke="green" />
          <Line type="monotone" dataKey="d2" stroke="red" />
          <Tooltip />
          <CartesianGrid strokeDasharray="5 5" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Activities;
