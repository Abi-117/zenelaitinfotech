import React from "react";
import "./admin.css";
import AdminHeader from "./AdminHeader";

export default function AdminDashboard() {
  return (
    <div className="admin-dashboard">
      <AdminHeader />

      <h1 className="admin-title">Welcome, Admin 👋</h1>
    </div>
  );
}
