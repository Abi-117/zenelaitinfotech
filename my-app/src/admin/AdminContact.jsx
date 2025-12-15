import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminHeader from "./AdminHeader";
import "./AdminAbout.css";

const API = "http://localhost:5000";

export default function AdminContact() {
  const [data, setData] = useState({
    heroTitle: "",
    heroText: "",
    address: "",
    phone: "",
    email: "",
    businessHours: "",
    mapUrl: "",
    image: "",
  });

  const [imageFile, setImageFile] = useState(null);

  /* FETCH */
  const fetchData = async () => {
    const res = await axios.get(`${API}/api/contact-page`);
    if (res.data) setData(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  /* SAVE */
  const save = async () => {
    try {
      const formData = new FormData();
      formData.append("data", JSON.stringify(data));

      if (imageFile) {
        formData.append("image", imageFile);
      }

      await axios.put(`${API}/api/contact-page`, formData);
      alert("Contact page updated");
      setImageFile(null);
      fetchData();
    } catch (err) {
      console.error(err);
      alert("Save failed");
    }
  };

  return (
    <>
      <AdminHeader />
      <div className="admin-about">
        <h1>Contact Page Admin</h1>

        {/* HERO */}
        <section>
          <h2>Hero Section</h2>
          <input
            value={data.heroTitle}
            onChange={(e) =>
              setData({ ...data, heroTitle: e.target.value })
            }
            placeholder="Hero Title"
          />
          <textarea
            value={data.heroText}
            onChange={(e) =>
              setData({ ...data, heroText: e.target.value })
            }
            placeholder="Hero Text"
          />
        </section>

        {/* CONTACT INFO */}
        <section>
          <h2>Contact Info</h2>
          <textarea
            value={data.address}
            onChange={(e) =>
              setData({ ...data, address: e.target.value })
            }
            placeholder="Address"
          />
          <input
            value={data.phone}
            onChange={(e) =>
              setData({ ...data, phone: e.target.value })
            }
            placeholder="Phone"
          />
          <input
            value={data.email}
            onChange={(e) =>
              setData({ ...data, email: e.target.value })
            }
            placeholder="Email"
          />
        </section>

        {/* OTHER */}
        <section>
          <h2>Other</h2>
          <textarea
            value={data.businessHours}
            onChange={(e) =>
              setData({ ...data, businessHours: e.target.value })
            }
            placeholder="Business Hours"
          />
          <input
            value={data.mapUrl}
            onChange={(e) =>
              setData({ ...data, mapUrl: e.target.value })
            }
            placeholder="Google Map Embed URL"
          />

          {/* IMAGE UPLOAD */}
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImageFile(e.target.files[0])}
          />

          {/* PREVIEW */}
          {data.image && (
            <img
              src={`${API}/uploads/${data.image}`}
              alt="contact"
              style={{ width: "200px", marginTop: "10px" }}
            />
          )}
        </section>

        <button className="save-btn" onClick={save}>
          Save Contact Page
        </button>
      </div>
    </>
  );
}
