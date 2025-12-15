import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Products.css";
import Footer from "../../components/Footer";
import CTA from "../../components/Cta";

export default function Products() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [activeProduct, setActiveProduct] = useState("billing");

  /* 🔹 FETCH PRODUCTS FROM BACKEND */
  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);

        // default product
        if (data.length > 0) {
          setActiveProduct(data[0].productId);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  /* 🔹 PRODUCT LIST (LEFT SIDEBAR) */
  const productList = products.map((p) => ({
    id: p.productId,
    name: p.title,
  }));

  /* 🔹 ACTIVE PRODUCT DATA */
  const activeData = products.find(
    (p) => p.productId === activeProduct
  );

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
            {productList.map((item) => (
              <li
                key={item.id}
                className={activeProduct === item.id ? "active" : ""}
                onClick={() => setActiveProduct(item.id)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT CONTENT */}
        <div className="product-right">
          {!activeData ? (
            <p>Loading...</p>
          ) : (
            <>
              <p className="label">{activeData.label}</p>

              <h1 className="title">{activeData.title}</h1>

              <p className="desc">{activeData.desc}</p>

              <h3 className="benefits-title">Key Benefits:</h3>
              <ul className="benefits-list">
                {activeData.benefits.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
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
