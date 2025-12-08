import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Products.css";
import Footer from "../../components/Footer";
import CTA from "../../components/Cta";
export default function Products() {
  const navigate = useNavigate();
  const [activeProduct, setActiveProduct] = useState("billing");

  const productList = [
    { id: "billing", name: "Billing Software" },
    { id: "saas", name: "SaaS" },
    { id: "crm", name: "CRM" },
    { id: "erp", name: "ERP" },
    { id: "lms", name: "LMS" },
    
  ];

  const productContent = {
    billing: {
      label: "Smart GST Billing Software for Fast, Accurate & Hassle-Free Invoicing",
      title: "Billing Software",
      desc: `A powerful cloud-based Billing & GST Invoicing Software designed for small, medium, and growing businesses in Chennai and across India. Create invoices in seconds, track payments, record expenses, and manage your
       entire accounting process — all in one secure platform.`,
      benefits: [
        "GST-compliant billing & e-invoice support",
        "Customer & payment tracking",
        "Automated due reminders & notifications",
        "Multi-user access with role permissions",
        "Cloud access from anywhere, any device",
        "Inventory & stock management",
        "Download invoices in PDF / Excel formats",
        "Detailed reports & analytics for decision-making"

      ]
    },
    saas: {
      label: "Cloud-Based Software for Smarter Business Management",
      title: "SaaS Solutions",
      desc: `Zenelait’s SaaS products are designed to help businesses work smarter with secure, cloud-based tools that
       are fully automated and easy to access.`,
      benefits: [
        "Cloud-Based Access – Access your software anytime, anywhere, on any device.",
        "User Login & Dashboard – Secure accounts for admins, staff, and customers. ",
        "Automated Updates – Always use the latest version without manual installation.",
        "Data Backup & Security – Real-time backup and robust security for all your business data. ",
        "Subscription-Based Plans – Flexible monthly and yearly plans suitable for businesses of all sizes.",
        "Customizable Modules – Tailor features for billing, CRM, LMS, ERP, or any business requirement.",
        "Payment Gateway Integration – Enable seamless online payments within your software.",
        "Reports & Analytics – Track business performance and gain real-time insights."
      ]
    },
    crm: {
      label: "Software Smart CRM Software to Manage Leads, Increase Sales & Retain Customers",
      title: "CRM — Customer Relationship Management",
      desc: `Zenelait’s CRM Software is designed to help businesses in Chennai and across India automate their sales pipeline, lead follow-ups, and customer engagement. With a centralized database and real-time insights, your sales team can convert leads faster and build long-term customer relationships.
Whether you are a startup, SME, or enterprise, our CRM enables you to streamline communication, improve productivity, and make data-driven decisions.`,
      benefits: [
        "Centralized lead & customer data management",
        "Automated follow-ups, reminders & workflows",
        "Real-time sales tracking & performance analytics",
        "Email / SMS / WhatsApp integration",
        "Customer activity monitoring & retention tools",
        "Role-based access for teams & managers",
        "Cloud-based CRM accessible anywhere",
        "Better conversion rates & customer satisfaction"
    
      ]
    },
    erp: {
      label: "Complete Business Management Software",
      title: "ERP Systems",
      desc: `Our ERP system helps businesses manage all operations in one place. Streamline workflows, improve productivity, and get real-time insights for smarter decision-making.`,
      benefits: [
        "Centralized Dashboard – Manage all departments from a single platform.",
        "Accounts & Finance Management – Billing, invoicing, expenses, and GST reporting.",
        "HR & Payroll System – Staff profiles, attendance, and salary processing. ",
        "Inventory & Stock Management – Track items, stock levels, and purchase orders.",
        "Sales & CRM Integration – Manage leads, customer data, and sales reports.",
        "Project & Task Management – Assign tasks, monitor progress, and track deadlines.",
        "Purchase & Vendor Management – Manage suppliers, quotations, and approvals. ",
        "Reports & Analytics – Real-time business insights to support decisions."
      ]
    },
    lms: {
      label: "Smart Online Learning Platform for Schools, Colleges & Training Institutes",
      title: "Learning Management System",
      desc: `Zenelait LMS is designed for a wide range of educational and training professionals. It’s perfect for school principals and directors, college administrators, training institute managers, HR professionals managing employee training, corporate L&D heads, and online course creators or EdTech founders. Any organization looking to streamline academic or training workflows, improve learner engagement, and simplify
       administrative tasks can benefit from our platform.`,
      benefits: [
        "All-in-One Platform – Manage academic, administrative, and training workflows from a single dashboard.",
        "Automated Processes – Save time with digital enrollment, attendance, exams, and fee management.",
        "Enhanced Learning Experience – Focus on teaching & training while reducing manual tasks.",
        "Multi-Institute Support – Perfect for schools, colleges, coaching centers, and corporate training.",
        "Real-Time Communication – Instant notifications and updates for students, staff, and parents.",
        "Reports & Analytics – Track performance, generate certificates, and monitor progress efficiently."
      ]
    }
    
  };

  return (
    <div className="product-topic">
      <div className="product-heading-section">
        <h1 className="main-heading">
          <span className="black">Our</span> <span className="red">Products</span>
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
          <p className="label">{productContent[activeProduct].label}</p>
          <h1 className="title">{productContent[activeProduct].title}</h1>
          <p className="desc">{productContent[activeProduct].desc}</p>

          <h3 className="benefits-title">Key Benefits:</h3>
          <ul className="benefits-list">
            {productContent[activeProduct].benefits.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>

          <div className="btn-row">
            <button
              className="details-btnn"
              onClick={() => navigate(`/products/${activeProduct}`)}
            >
              View Details
            </button>

            <button
              className="demo-btn"
              onClick={() => navigate(`/contact`)}
            >
              Request Demo
            </button>
          </div>
        </div>
      </div>
      <CTA></CTA>
      <Footer />
    </div>
  );
}
