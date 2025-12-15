import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminHeader from "./AdminHeader";
import "./AdminProduct.css";

const API = "http://localhost:5000";

export default function AdminProduct() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    productId: "",
    label: "",
    title: "",
    desc: "",
    benefits: "",
    image: "",
    imageFile: null,
  });

  /* FETCH */
  const fetchProducts = async () => {
    const res = await axios.get(`${API}/api/products`);
    setProducts(res.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  /* SAVE / UPDATE */
  const saveProduct = async () => {
    try {
      const formData = new FormData();
      formData.append(
        "data",
        JSON.stringify({
          ...form,
          benefits: form.benefits.split(","),
        })
      );

      if (form.imageFile) {
        formData.append("image", form.imageFile);
      }

      await axios.post(`${API}/api/products`, formData);
      alert("Product saved");

      resetForm();
      fetchProducts();
    } catch (err) {
      alert("Save failed");
      console.error(err);
    }
  };

  const resetForm = () => {
    setForm({
      productId: "",
      label: "",
      title: "",
      desc: "",
      benefits: "",
      image: "",
      imageFile: null,
    });
  };

  /* EDIT */
  const editProduct = (p) => {
    setForm({
      ...p,
      benefits: p.benefits.join(","),
      imageFile: null,
    });
  };

  /* DELETE */
  const deleteProduct = async (id) => {
  if (!window.confirm("Delete product?")) return;

  await axios.delete(`http://localhost:5000/api/products/${id}`);
  fetchProducts();
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
            onChange={(e) =>
              setForm({ ...form, productId: e.target.value })
            }
            disabled={!!form._id}
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
            onChange={(e) =>
              setForm({ ...form, benefits: e.target.value })
            }
          />

          {/* IMAGE UPLOAD */}
          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              setForm({ ...form, imageFile: e.target.files[0] })
            }
          />

          {/* PREVIEW */}
          {form.image && (
            <img
              src={`${API}/uploads/${form.image}`}
              alt="product"
              style={{ width: "120px", marginTop: "10px" }}
            />
          )}

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

        {products.map((p) => (
          <div className="admin-card" key={p._id}>
            <h3>{p.title}</h3>

            {p.image && (
              <img
                src={`${API}/uploads/${p.image}`}
                alt=""
                style={{ width: "80px" }}
              />
            )}

            <button onClick={() => editProduct(p)}>Edit</button>
            <button className="del" onClick={() => deleteProduct(p._id)}>
  Delete
</button>

          </div>
        ))}
      </div>
    </>
  );
}
