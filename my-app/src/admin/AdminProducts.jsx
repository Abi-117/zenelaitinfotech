import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminHeader from "./AdminHeader";
import "./AdminProduct.css";

const API = "http://localhost:5000";

export default function AdminProduct() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    _id: "",
    productId: "",
    label: "",
    title: "",
    desc: "",
    benefits: "",
    image: "",
    imageFile: null,
  });

  /* ===================== FETCH PRODUCTS ===================== */
  const fetchProducts = async () => {
    try {
      const res = await axios.get(`${API}/api/products`);
      setProducts(res.data);
    } catch (err) {
      console.error("Failed to fetch products:", err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  /* ===================== SAVE / UPDATE PRODUCT ===================== */
  const saveProduct = async () => {
    try {
      const formData = new FormData();
      formData.append(
        "data",
        JSON.stringify({
          productId: form.productId,
          label: form.label,
          title: form.title,
          desc: form.desc,
          benefits: form.benefits.split(","),
        })
      );

      if (form.imageFile) {
        formData.append("image", form.imageFile);
      }

      if (form._id) {
        // UPDATE
        await axios.put(`${API}/api/products/${form._id}`, formData);
        alert("Product updated successfully!");
      } else {
        // CREATE
        await axios.post(`${API}/api/products`, formData);
        alert("Product created successfully!");
      }

      resetForm();
      fetchProducts();
    } catch (err) {
      alert("Save failed. Check console.");
      console.error(err);
    }
  };

  /* ===================== RESET FORM ===================== */
  const resetForm = () => {
    setForm({
      _id: "",
      productId: "",
      label: "",
      title: "",
      desc: "",
      benefits: "",
      image: "",
      imageFile: null,
    });
  };

  /* ===================== EDIT PRODUCT ===================== */
  const editProduct = (p) => {
    setForm({
      _id: p._id,
      productId: p.productId,
      label: p.label,
      title: p.title,
      desc: p.desc,
      benefits: p.benefits.join(","),
      image: p.image || "",
      imageFile: null,
    });
  };

  /* ===================== DELETE PRODUCT ===================== */
  const deleteProduct = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;

    try {
      await axios.delete(`${API}/api/products/${id}`);
      fetchProducts();
    } catch (err) {
      alert("Delete failed");
      console.error(err);
    }
  };

  return (
    <>
      <AdminHeader />
      <div className="admin-product">
        <h1>Product Admin</h1>

        <div className="admin-form">
          <input
            placeholder="Product ID (billing / crm / erp)"
            value={form.productId}
            onChange={(e) => setForm({ ...form, productId: e.target.value })}
            disabled={!!form._id} // prevent changing ID on edit
          />
          <input
            placeholder="Label"
            value={form.label}
            onChange={(e) => setForm({ ...form, label: e.target.value })}
          />
          <input
            placeholder="Title"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />
          <textarea
            placeholder="Description"
            value={form.desc}
            onChange={(e) => setForm({ ...form, desc: e.target.value })}
          />
          <textarea
            placeholder="Benefits (comma separated)"
            value={form.benefits}
            onChange={(e) => setForm({ ...form, benefits: e.target.value })}
          />

          {/* IMAGE UPLOAD */}
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setForm({ ...form, imageFile: e.target.files[0] })}
          />

          {/* IMAGE PREVIEW */}
          {form.imageFile ? (
            <img
              src={URL.createObjectURL(form.imageFile)}
              alt="Preview"
              style={{ width: "120px", marginTop: "10px" }}
            />
          ) : form.image ? (
            <img
              src={`${API}/uploads/${form.image}`}
              alt="Current"
              style={{ width: "120px", marginTop: "10px" }}
            />
          ) : null}

          <button onClick={saveProduct}>
            {form._id ? "Update Product" : "Save Product"}
          </button>

          {form._id && (
            <button className="cancel" onClick={resetForm}>
              Cancel Edit
            </button>
          )}
        </div>

        <h2>Existing Products</h2>
        <div className="admin-cards">
          {products.map((p) => (
            <div className="admin-card" key={p._id}>
              <h3>{p.title}</h3>
              {p.image && (
                <img
                  src={`${API}/uploads/${p.image}`}
                  alt={p.title}
                  style={{ width: "80px" }}
                />
              )}
              <div className="admin-card-buttons">
                <button onClick={() => editProduct(p)}>Edit</button>
                <button className="del" onClick={() => deleteProduct(p._id)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
