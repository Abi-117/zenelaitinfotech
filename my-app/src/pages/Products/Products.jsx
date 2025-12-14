import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Products.css";
import CTA from "../../components/Cta";

export default function Products() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [active, setActive] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/api/products").then((res) => {
      setProducts(res.data);
      setActive(res.data[0]?.slug);
    });
  }, []);

  const current = products.find((p) => p.slug === active);

  if (!current) return null;

  return (
    <div className="product-topic">
      <div className="product-heading-section">
        <h1 className="main-heading">
          <span className="black">Our</span>{" "}
          <span className="red">Products</span>
        </h1>
        <p className="sub-heading">
          Smart Software Solutions Built for Growth
        </p>
      </div>

      <div className="product-page">
        {/* LEFT */}
        <div className="product-left">
          <h2 className="sidebar-title">Products</h2>
          <ul className="sidebar-list">
            {products.map((p) => (
              <li
                key={p._id}
                className={active === p.slug ? "active" : ""}
                onClick={() => setActive(p.slug)}
              >
                {p.name}
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT */}
        <div className="product-right">
          <p className="label">{current.label}</p>
          <h1 className="title">{current.title}</h1>
          <p className="desc">{current.desc}</p>

          <h3 className="benefits-title">Key Benefits</h3>
          <ul className="benefits-list">
            {current.benefits.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>

          <div className="btn-row">
            <button
              className="details-btnn"
              onClick={() => navigate(`/products/${current.slug}`)}
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
        </div>
      </div>

      <CTA />
    </div>
  );
}
