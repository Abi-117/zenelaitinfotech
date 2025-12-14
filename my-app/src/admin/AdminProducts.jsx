import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminHeader from "./AdminHeader";
import "./AdminProducts.css";

export default function AdminProducts() {
  const [products, setProducts] = useState([]);

  // GET PRODUCTS
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    axios
      .get("http://localhost:5000/api/products")
      .then((res) => {
        setProducts(res.data || []);
      })
      .catch((err) => console.error(err));
  };

  // UPDATE PRODUCT
  const updateProduct = (id, field, value) => {
    const updated = products.map((p) =>
      p._id === id ? { ...p, [field]: value } : p
    );
    setProducts(updated);
  };

  // SAVE PRODUCT
  const saveProduct = (product) => {
    axios
      .put(`http://localhost:5000/api/products/${product._id}`, product)
      .then(() => alert("Product updated"));
  };

  // DELETE PRODUCT
  const deleteProduct = (id) => {
    if (!window.confirm("Delete this product?")) return;

    axios
      .delete(`http://localhost:5000/api/products/${id}`)
      .then(() => {
        setProducts(products.filter((p) => p._id !== id));
      });
  };

  return (
    <>
      <AdminHeader />
      <div className="admin-products">
        <h1>Products Admin</h1>

        {products.length === 0 && <p>No products found</p>}

        {products.map((p) => (
          <div className="admin-card" key={p._id}>
            <input
              value={p.title}
              placeholder="Product Title"
              onChange={(e) =>
                updateProduct(p._id, "title", e.target.value)
              }
            />

            <textarea
              value={p.desc}
              placeholder="Description"
              onChange={(e) =>
                updateProduct(p._id, "desc", e.target.value)
              }
            />

            <textarea
              value={p.benefits?.join("\n")}
              placeholder="Benefits (one per line)"
              onChange={(e) =>
                updateProduct(
                  p._id,
                  "benefits",
                  e.target.value.split("\n")
                )
              }
            />

            <div className="btn-row">
              <button onClick={() => saveProduct(p)}>Save</button>
              <button className="delete-btn" onClick={() => deleteProduct(p._id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
