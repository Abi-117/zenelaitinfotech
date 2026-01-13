import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminHeader from "./AdminHeader";
// import "./AdminAbout.css";

/**
 * ✅ Default = localhost
 * ✅ If VITE_API_BASE_URL exists, it overrides
 */
const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

export default function AdminFooter() {
  const [footer, setFooter] = useState({
    logo: "",
    description: "",
    products: [],
    company: [],
    address: "",
    phone: "",
    email: "",
    copyrightText: "",
    developerLink: "",
    developerLogo: "",
  });

  useEffect(() => {
    axios
      .get(`${API}/api/footer`)
      .then((res) => res.data && setFooter(res.data))
      .catch((err) => console.error("Fetch failed:", err));
  }, []);

  const save = () => {
    axios
      .put(`${API}/api/footer`, footer)
      .then(() => alert("Footer updated"))
      .catch((err) => {
        console.error("Save failed:", err);
        alert("Save failed ❌");
      });
  };

  return (
    <>
      <AdminHeader />
      <div className="admin-about">
        <h1>Footer Admin</h1>

        <section>
          <h2>Brand</h2>
          <input
            value={footer.logo}
            onChange={(e) => setFooter({ ...footer, logo: e.target.value })}
            placeholder="Logo URL"
          />
          <textarea
            value={footer.description}
            onChange={(e) =>
              setFooter({ ...footer, description: e.target.value })
            }
            placeholder="Footer description"
          />
        </section>

        <section>
          <h2>Products</h2>
          {footer.products.map((p, i) => (
            <div key={i} className="admin-card">
              <input
                value={p.label}
                placeholder="Label"
                onChange={(e) => {
                  const arr = [...footer.products];
                  arr[i].label = e.target.value;
                  setFooter({ ...footer, products: arr });
                }}
              />
              <input
                value={p.link}
                placeholder="Link"
                onChange={(e) => {
                  const arr = [...footer.products];
                  arr[i].link = e.target.value;
                  setFooter({ ...footer, products: arr });
                }}
              />
            </div>
          ))}
          <button
            onClick={() =>
              setFooter({
                ...footer,
                products: [...footer.products, { label: "", link: "" }],
              })
            }
          >
            + Add Product
          </button>
        </section>

        <section>
          <h2>Company</h2>
          {footer.company.map((c, i) => (
            <div key={i} className="admin-card">
              <input
                value={c.label}
                placeholder="Label"
                onChange={(e) => {
                  const arr = [...footer.company];
                  arr[i].label = e.target.value;
                  setFooter({ ...footer, company: arr });
                }}
              />
              <input
                value={c.link}
                placeholder="Link"
                onChange={(e) => {
                  const arr = [...footer.company];
                  arr[i].link = e.target.value;
                  setFooter({ ...footer, company: arr });
                }}
              />
            </div>
          ))}
          <button
            onClick={() =>
              setFooter({
                ...footer,
                company: [...footer.company, { label: "", link: "" }],
              })
            }
          >
            + Add Company Link
          </button>
        </section>

        <section>
          <h2>Contact Info</h2>
          <textarea
            value={footer.address}
            onChange={(e) =>
              setFooter({ ...footer, address: e.target.value })
            }
            placeholder="Address"
          />
          <input
            value={footer.phone}
            onChange={(e) => setFooter({ ...footer, phone: e.target.value })}
            placeholder="Phone"
          />
          <input
            value={footer.email}
            onChange={(e) => setFooter({ ...footer, email: e.target.value })}
            placeholder="Email"
          />
        </section>

        <section>
          <h2>Bottom Section</h2>
          <input
            value={footer.copyrightText}
            onChange={(e) =>
              setFooter({ ...footer, copyrightText: e.target.value })
            }
            placeholder="© 2025 Zenelait. All Rights Reserved."
          />
          <input
            value={footer.developerLink}
            onChange={(e) =>
              setFooter({ ...footer, developerLink: e.target.value })
            }
            placeholder="Developer website link"
          />
          <input
            value={footer.developerLogo}
            onChange={(e) =>
              setFooter({ ...footer, developerLogo: e.target.value })
            }
            placeholder="Developer logo URL"
          />
        </section>

        <button className="save-btn" onClick={save}>
          Save Footer
        </button>
      </div>
    </>
  );
}
