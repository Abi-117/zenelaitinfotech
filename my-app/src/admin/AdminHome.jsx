import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AdminHome.css";
import AdminHeader from "./AdminHeader";

const API = "http://localhost:5000";

export default function AdminHome() {
  const [home, setHome] = useState({
    heroTitle: "",
    heroSubtitle: "",
    aboutTitle: "",
    aboutText: "",
    services: [],
    whyChoose: [],
  });

  /* FETCH HOME DATA */
  const fetchHome = async () => {
    const res = await axios.get(`${API}/api/home`);
    if (res.data) setHome(res.data);
  };

  useEffect(() => {
    fetchHome();
  }, []);

  /* SAVE HOME (with image upload) */
  const saveChanges = async () => {
    try {
      const formData = new FormData();
      formData.append("data", JSON.stringify(home));

      // upload only changed images
      home.services.forEach((s, i) => {
        if (s.imageFile) {
          formData.append("image", s.imageFile);
          formData.append("serviceIndex", i);
        }
      });

      await axios.put(`${API}/api/home`, formData);
      alert("Home updated successfully");
      fetchHome();
    } catch (err) {
      console.error(err);
      alert("Save failed");
    }
  };

  /* ADD SERVICE */
  const addService = () => {
    setHome({
      ...home,
      services: [
        ...home.services,
        { title: "", description: "", image: "", link: "" },
      ],
    });
  };

  /* DELETE SERVICE */
  const deleteService = async (id) => {
    if (!window.confirm("Delete service?")) return;
    await axios.delete(`${API}/api/home/service/${id}`);
    fetchHome();
  };

  /* ADD WHY CHOOSE */
  const addWhy = () => {
    setHome({
      ...home,
      whyChoose: [...home.whyChoose, { text: "" }],
    });
  };

  /* DELETE WHY CHOOSE */
  const deleteWhy = async (id) => {
    if (!window.confirm("Delete this point?")) return;
    await axios.delete(`${API}/api/home/why/${id}`);
    fetchHome();
  };

  return (
    <>
      <AdminHeader />

      <div className="admin-home">
        <h1>Home Page Admin</h1>

        {/* HERO */}
        <section>
          <h2>Hero</h2>
          <input
            placeholder="Hero Title"
            value={home.heroTitle}
            onChange={(e) =>
              setHome({ ...home, heroTitle: e.target.value })
            }
          />
          <textarea
            placeholder="Hero Subtitle"
            value={home.heroSubtitle}
            onChange={(e) =>
              setHome({ ...home, heroSubtitle: e.target.value })
            }
          />
        </section>

        {/* ABOUT */}
        <section>
          <h2>About</h2>
          <input
            placeholder="About Title"
            value={home.aboutTitle}
            onChange={(e) =>
              setHome({ ...home, aboutTitle: e.target.value })
            }
          />
          <textarea
            placeholder="About Text"
            value={home.aboutText}
            onChange={(e) =>
              setHome({ ...home, aboutText: e.target.value })
            }
          />
        </section>

        {/* SERVICES */}
        <section>
          <h2>Services</h2>

          {home.services.map((s, i) => (
            <div className="admin-card" key={s._id || i}>
              <input
                placeholder="Title"
                value={s.title}
                onChange={(e) => {
                  const arr = [...home.services];
                  arr[i].title = e.target.value;
                  setHome({ ...home, services: arr });
                }}
              />

              <textarea
                placeholder="Description"
                value={s.description}
                onChange={(e) => {
                  const arr = [...home.services];
                  arr[i].description = e.target.value;
                  setHome({ ...home, services: arr });
                }}
              />

              <input
                placeholder="Link"
                value={s.link}
                onChange={(e) => {
                  const arr = [...home.services];
                  arr[i].link = e.target.value;
                  setHome({ ...home, services: arr });
                }}
              />

              {/* IMAGE UPLOAD */}
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const arr = [...home.services];
                  arr[i].imageFile = e.target.files[0];
                  setHome({ ...home, services: arr });
                }}
              />

              {/* PREVIEW IMAGE */}
              {s.image && (
                <img
                  src={`${API}/uploads/${s.image}`}
                  alt="service"
                  style={{ width: "120px", marginTop: "10px" }}
                />
              )}

              {/* DELETE */}
              {s._id && (
                <button className="del" onClick={() => deleteService(s._id)}>
                  Delete Service
                </button>
              )}
            </div>
          ))}

          <button onClick={addService}>+ Add Service</button>
        </section>

        {/* WHY CHOOSE */}
        <section>
          <h2>Why Choose</h2>

          {home.whyChoose.map((w, i) => (
            <div className="admin-card" key={w._id || i}>
              <input
                value={w.text}
                placeholder="Why choose text"
                onChange={(e) => {
                  const arr = [...home.whyChoose];
                  arr[i].text = e.target.value;
                  setHome({ ...home, whyChoose: arr });
                }}
              />

              {w._id && (
                <button className="del" onClick={() => deleteWhy(w._id)}>
                  Delete
                </button>
              )}
            </div>
          ))}

          <button onClick={addWhy}>+ Add Point</button>
        </section>

        <button className="save-btn" onClick={saveChanges}>
          Save Changes
        </button>
      </div>
    </>
  );
}
