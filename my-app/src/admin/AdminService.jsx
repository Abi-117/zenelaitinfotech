import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminHeader from "./AdminHeader";
import "./AdminAbout.css";

export default function AdminService() {
  const [service, setService] = useState({
    heroTitle: "",
    heroText: "",
    services: [],
    technologies: [],
    processSteps: [],
  });

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/services")
      .then((res) => res.data && setService(res.data))
      .catch(console.error);
  }, []);

  const save = () => {
    axios
      .put("http://localhost:5000/api/services", service)
      .then(() => alert("Service page updated"))
      .catch(() => alert("Save failed"));
  };

  return (
    <>
      <AdminHeader />
      <div className="admin-about">
        <h1>Service Page Admin</h1>

        {/* HERO */}
        <section>
          <h2>Hero Section</h2>
          <input
            value={service.heroTitle}
            onChange={(e) =>
              setService({ ...service, heroTitle: e.target.value })
            }
            placeholder="Hero Title"
          />
          <textarea
            value={service.heroText}
            onChange={(e) =>
              setService({ ...service, heroText: e.target.value })
            }
            placeholder="Hero Description"
          />
        </section>

        {/* SERVICES */}
        <section>
          <h2>Services</h2>

          {service.services.map((s, i) => (
            <div key={i} className="admin-card">
              <input
                value={s.title}
                placeholder="Service Title"
                onChange={(e) => {
                  const arr = [...service.services];
                  arr[i].title = e.target.value;
                  setService({ ...service, services: arr });
                }}
              />
              <textarea
                value={s.description}
                placeholder="Service Description"
                onChange={(e) => {
                  const arr = [...service.services];
                  arr[i].description = e.target.value;
                  setService({ ...service, services: arr });
                }}
              />
              <input
                value={s.icon}
                placeholder="Icon name"
                onChange={(e) => {
                  const arr = [...service.services];
                  arr[i].icon = e.target.value;
                  setService({ ...service, services: arr });
                }}
              />
            </div>
          ))}

          <button
            onClick={() =>
              setService({
                ...service,
                services: [
                  ...service.services,
                  { title: "", description: "", icon: "" },
                ],
              })
            }
          >
            + Add Service
          </button>
        </section>

        {/* TECHNOLOGIES */}
        <section>
          <h2>Technologies</h2>

          {service.technologies.map((t, i) => (
            <input
              key={i}
              value={t}
              onChange={(e) => {
                const arr = [...service.technologies];
                arr[i] = e.target.value;
                setService({ ...service, technologies: arr });
              }}
            />
          ))}

          <button
            onClick={() =>
              setService({
                ...service,
                technologies: [...service.technologies, ""],
              })
            }
          >
            + Add Technology
          </button>
        </section>

        {/* PROCESS */}
        <section>
          <h2>Process Steps</h2>

          {service.processSteps.map((p, i) => (
            <div key={i} className="admin-card">
              <input
                value={p.step}
                onChange={(e) => {
                  const arr = [...service.processSteps];
                  arr[i].step = e.target.value;
                  setService({ ...service, processSteps: arr });
                }}
              />
              <input
                value={p.title}
                onChange={(e) => {
                  const arr = [...service.processSteps];
                  arr[i].title = e.target.value;
                  setService({ ...service, processSteps: arr });
                }}
              />
              <textarea
                value={p.desc}
                onChange={(e) => {
                  const arr = [...service.processSteps];
                  arr[i].desc = e.target.value;
                  setService({ ...service, processSteps: arr });
                }}
              />
            </div>
          ))}

          <button
            onClick={() =>
              setService({
                ...service,
                processSteps: [
                  ...service.processSteps,
                  { step: "", title: "", desc: "" },
                ],
              })
            }
          >
            + Add Step
          </button>
        </section>

        <button className="save-btn" onClick={save}>
          Save Service Page
        </button>
      </div>
    </>
  );
}
