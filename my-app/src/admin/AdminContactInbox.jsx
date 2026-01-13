import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminHeader from "./AdminHeader";
import "./AdminAbout.css";

/**
 * ✅ Default = localhost
 * ✅ If VITE_API_BASE_URL exists, it overrides
 */
const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

export default function AdminContactInbox() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/api/contact-message`)
      .then((res) => setMessages(res.data))
      .catch((err) => console.error("Fetch failed:", err));
  }, []);

  return (
    <>
      <AdminHeader />
      <div className="admin-about">
        <h1>Contact Messages</h1>

        {messages.map((m, i) => (
          <div key={i} className="admin-card">
            <h3>{m.name}</h3>
            <p><b>Email:</b> {m.email}</p>
            <p><b>Phone:</b> {m.phone}</p>
            <p><b>Message:</b> {m.message}</p>
            <small>
              {new Date(m.createdAt).toLocaleString()}
            </small>
          </div>
        ))}

        {messages.length === 0 && <p>No messages yet</p>}
      </div>
    </>
  );
}
