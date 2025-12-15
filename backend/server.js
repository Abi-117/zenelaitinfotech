import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

import adminRoutes from "./routes/admin.routes.js";
import navbarRoutes from "./routes/navbar.routes.js";
import homeRoutes from "./routes/home.routes.js";
import aboutRoutes from "./routes/about.routes.js";
import footerRoutes from "./routes/footer.routes.js";
import serviceRoutes from "./routes/service.routes.js";
import contactPageRoutes from "./routes/contact.routes.js";
import contactMessageRoutes from "./routes/contactMessage.routes.js";
import saasRoutes from "./routes/saas.routes.js";
import erpRoutes from "./routes/erp.routes.js";
import crmRoutes from "./routes/crm.routes.js";
import billingRoutes from "./routes/billing.routes.js";
import productRoutes from "./routes/product.routes.js";
import lmsRoutes from "./routes/lms.routes.js";


dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

app.use("/api/home", homeRoutes);
app.use("/api/about", aboutRoutes);
app.use("/api/contact-page", contactPageRoutes);
app.use("/api/contact-message", contactMessageRoutes);

app.use("/api/footer", footerRoutes);
app.use("/api/services", serviceRoutes);

app.use("/api/products", productRoutes);

app.use("/api/saas", saasRoutes);
app.use("/api/erp", erpRoutes);

app.use("/api/crm",crmRoutes);
app.use("/api/billing", billingRoutes);
app.use("/api/lms", lmsRoutes);

app.use("/api/admin", adminRoutes);
app.use("/api/navbar", navbarRoutes);


app.get("/", (req, res) => {
  res.send("Zenelait Backend ESM Running");
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
