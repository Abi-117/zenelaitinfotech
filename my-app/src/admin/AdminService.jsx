import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminHeader from "./AdminHeader";
import "./AdminAbout.css";

const API = "http://localhost:5000/api/services";

export default function AdminService() {
  const [service, setService] = useState({
    heroTitle: "",
    heroText: "",
    services: [],
    technologies: [],
    processSteps: [],
  });

  /* GET DATA */
  useEffect(() => {
    axios
      .get(API)
      .then((res) => res.data && setService(res.data))
      .catch(console.error);
  }, []);

  /* SAVE PAGE */
  const save = async () => {
    try {
      await axios.put(API, service);
      alert("Service page updated");
    } catch {
      alert("Save failed");
    }
  };

  /* DELETE SERVICE ITEM */
  const deleteServiceItem = async (id) => {
    if (!window.confirm("Delete this service?")) return;

    const res = await axios.delete(`${API}/service/${id}`);
    setService(res.data);
  };

  /* DELETE TECHNOLOGY */
  const deleteTechnology = async (tech) => {
    if (!window.confirm("Delete this technology?")) return;

    const res = await axios.delete(`${API}/technology/${tech}`);
    setService(res.data);
  };

  /* DELETE PROCESS STEP */
  const deleteProcessStep = async (id) => {
    if (!window.confirm("Delete this step?")) return;

    const res = await axios.delete(`${API}/process/${id}`);
    setService(res.data);
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
            placeholder="Hero Title"
            onChange={(e) =>
              setService({ ...service, heroTitle: e.target.value })
            }
          />
          <textarea
            value={service.heroText}
            placeholder="Hero Description"
            onChange={(e) =>
              setService({ ...service, heroText: e.target.value })
            }
          />
        </section>

        {/* SERVICES */}
        <section>
          <h2>Services</h2>

          {service.services.map((s, i) => (
            <div key={s._id || i} className="admin-card">
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

              {s._id && (
                <button
                  className="delete-btn"
                  onClick={() => deleteServiceItem(s._id)}
                >
                  Delete
                </button>
              )}
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
            <div key={i} className="admin-row">
              <input
                value={t}
                onChange={(e) => {
                  const arr = [...service.technologies];
                  arr[i] = e.target.value;
                  setService({ ...service, technologies: arr });
                }}
              />
              <button
                className="delete-btn"
                onClick={() => deleteTechnology(t)}
              >
                Delete
              </button>
            </div>
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

        {/* PROCESS STEPS */}
        <section>
          <h2>Process Steps</h2>

          {service.processSteps.map((p, i) => (
            <div key={p._id || i} className="admin-card">
              <input
                value={p.step}
                placeholder="Step"
                onChange={(e) => {
                  const arr = [...service.processSteps];
                  arr[i].step = e.target.value;
                  setService({ ...service, processSteps: arr });
                }}
              />

              <input
                value={p.title}
                placeholder="Title"
                onChange={(e) => {
                  const arr = [...service.processSteps];
                  arr[i].title = e.target.value;
                  setService({ ...service, processSteps: arr });
                }}
              />

              <textarea
                value={p.desc}
                placeholder="Description"
                onChange={(e) => {
                  const arr = [...service.processSteps];
                  arr[i].desc = e.target.value;
                  setService({ ...service, processSteps: arr });
                }}
              />

              {p._id && (
                <button
                  className="delete-btn"
                  onClick={() => deleteProcessStep(p._id)}
                >
                  Delete
                </button>
              )}
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
