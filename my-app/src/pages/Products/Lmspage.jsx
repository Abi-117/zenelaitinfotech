import React, { useEffect, useState } from "react";
import axios from "axios";
import CTA from "../../components/Cta";

export default function Lmspage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/api/lms")
      .then(res => setData(res.data));
  }, []);

  if (!data) return <h2>Loading...</h2>;

  return (
    <div className="lms-page">
      <section className="lms-hero">
        <h2>{data.heroTitle}</h2>
        <p>{data.heroText}</p>
      </section>

      <section className="lms-features">
        <h2>Key Features</h2>
        <ul>
          {data.features.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
      </section>

      <CTA />
    </div>
  );
}
