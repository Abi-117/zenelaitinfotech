import React, { useState } from "react";
import "./admin.css";


export default function AdminLogin({ onLogin }) {
  const [password, setPassword] = useState("");

  const adminPasswords = ["admin123", "zenelait2024", "secure@987"];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (adminPasswords.includes(password)) {
      onLogin(true);
    } else {
      alert("Invalid admin password!");
    }
  };

  return (

    <div className="admin-login-container">
      <form className="admin-login-box" onSubmit={handleSubmit}>
        <h2>Admin Login</h2>

        <input
          type="password"
          placeholder="Enter Admin Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>
    </div>
    
  );
}
