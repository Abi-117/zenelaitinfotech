import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Products.css";
import CTA from "../../components/Cta";
import api from "../../api/axiosBase"; // centralized axios instance

export default function Products() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [activeProduct, setActiveProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  /* 🔹 FETCH PRODUCTS FROM BACKEND */
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await api.get("/api/products");
        const data = res.data || [];

        setProducts(data);

        // Set default active product
        if (data.length > 0) setActiveProduct(data[0].productId);
      } catch (err) {
        console.error("Failed to fetch products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  /* 🔹 PRODUCT LIST (LEFT SIDEBAR) */
  const productList = products.map((p) => ({
    id: p.productId,
    name: p.title || p.productId,
  }));

  /* 🔹 ACTIVE PRODUCT DATA */
  const activeData = products.find((p) => p.productId === activeProduct);

  if (loading) return <h2 style={{ padding: 20 }}>Loading products...</h2>;

  return (
    <div className="product-topic">
      {/* HEADING */}
      <div className="product-heading-section">
        <h1 className="main-heading">
          <span className="black">Our</span>{" "}
          <span className="red">Products</span>
        </h1>
        <p className="sub-heading">
          Smart Software Solutions Built for Growth, Automation & Performance
        </p>
      </div>

      <div className="product-page">
        {/* LEFT SIDEBAR */}
        <div className="product-left">
          <h2 className="sidebar-title">Products</h2>
          <ul className="sidebar-list">
            {productList.length === 0 ? (
              <li>No products available</li>
            ) : (
              productList.map((item) => (
                <li
                  key={item.id}
                  className={activeProduct === item.id ? "active" : ""}
                  onClick={() => setActiveProduct(item.id)}
                >
                  {item.name}
                </li>
              ))
            )}
          </ul>
        </div>

        {/* RIGHT CONTENT */}
        <div className="product-right">
          {!activeData ? (
            <p>Select a product to see details</p>
          ) : (
            <>
              <p className="label">{activeData.label || ""}</p>
              <h1 className="title">{activeData.title || ""}</h1>
              <p className="desc">{activeData.desc || ""}</p>

              <h3 className="benefits-title">Key Benefits:</h3>
              <ul className="benefits-list">
                {Array.isArray(activeData.benefits) &&
                activeData.benefits.length > 0 ? (
                  activeData.benefits.map((b, i) => <li key={i}>{b}</li>)
                ) : (
                  <li>No benefits listed</li>
                )}
              </ul>

              <div className="btn-row">
                <button
                  className="details-btnn"
                  onClick={() =>
                    navigate(`/products/${activeData.productId}`)
                  }
                >
                  View Details
                </button>

                <button
                  className="demo-btn"
                  onClick={() => navigate("/contact")}
                >
                  Request Demo
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      <CTA />
    </div>
  );
}
