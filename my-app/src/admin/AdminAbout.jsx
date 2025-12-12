import React, { useEffect, useState } from "react";
import axios from "axios";
import "./adminAbout.css";
import AdminHeader from "./AdminHeader";

export default function AdminAbout() {
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    description: "",
  });

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");

  useEffect(() => {
    fetchAbout();
  }, []);

  const fetchAbout = async () => {
    const res = await axios.get("http://localhost:5000/api/about");
    if (res.data) {
      setFormData({
        title: res.data.title,
        subtitle: res.data.subtitle,
        description: res.data.description,
      });

      if (res.data.image) {
        setPreview(`http://localhost:5000/${res.data.image}`);
      }
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updateData = new FormData();
    updateData.append("title", formData.title);
    updateData.append("subtitle", formData.subtitle);
    updateData.append("description", formData.description);
    if (image) updateData.append("image", image);

    await axios.put("http://localhost:5000/api/about/update", updateData);
    alert("Updated Successfully!");
  };

  return (
    <>
    <AdminHeader/>
    <div className="admin-about-container">
      <h2>About Page Editor</h2>

      <form className="admin-about-form" onSubmit={handleSubmit}>
        
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />

        <label>Subtitle</label>
        <input
          type="text"
          name="subtitle"
          value={formData.subtitle}
          onChange={handleChange}
        />

        <label>Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
        ></textarea>

        <label>Image</label>
        <input type="file" onChange={handleImage} />

        {preview && <img src={preview} className="about-image-preview" />}

        <button type="submit" className="admin-about-btn">
          Update About
        </button>
      </form>
    </div>
    </>
  );
}
