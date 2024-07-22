import React from "react";
import "./SideBar.css";
import { assets } from "../../assets/assets";
import { NavLink } from "react-router-dom";
export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebarOptions">
        <NavLink to='/add' className="sidebarOption">
          <img src={assets.add_icon} alt="" />
          <p>Add Item</p>
        </NavLink>
        <NavLink to='/list' className="sidebarOption">
          <img src={assets.list_icon} alt="" />
          <p>List Items</p>
        </NavLink>
        <NavLink to='/orders' className="sidebarOption">
          <img src={assets.order_icon} alt="" />
          <p>List Orders</p>
        </NavLink>
      </div>
    </div>
  );
}
