import React from "react";
import "./Header.css";

export default function Header({ title = "DailyPay", subtitle = "" }) {
  return (
    <header className="header">
      <div>
        <div className="title">{title}</div>
        {subtitle && <div className="subtitle">{subtitle}</div>}
      </div>
      <div>
        <small>v1.0</small>
      </div>
    </header>
  );
}
