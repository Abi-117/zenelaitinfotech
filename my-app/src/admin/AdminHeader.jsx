import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./admin.css";

export default function AdminHeader() {
  const nav = useNavigate();

  const logout = () => {
    localStorage.removeItem("adminToken");
    nav("/admin/login");
  };

  return (
    <nav className="admin-navbar">
      <div className="logo">ZENELAIT ADMIN</div>

      <ul className="admin-nav-links">
        <li><Link to="/admin">Dashboard</Link></li>
        <li><Link to="/admin/navbar">Navbar</Link></li>
        <li><Link to="/admin/home">Home</Link></li>
        <li><Link to="/admin/about">About</Link></li>
        <li><Link to="/admin/products">Products</Link></li>
        <li><Link to="/admin/service">Service</Link></li>
        <li><Link to="/admin/contacts">Contacts</Link></li>
        <li><Link to="/admin/footer">Footer</Link></li>
      </ul>

      <button className="logout-btn" onClick={logout}>Logout</button>
    </nav>
  );
}
