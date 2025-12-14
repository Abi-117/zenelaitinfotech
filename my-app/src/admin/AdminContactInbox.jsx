import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminHeader from "./AdminHeader";
import "./AdminAbout.css";

export default function AdminContactInbox() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/contact-message")
      .then((res) => setMessages(res.data));
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
