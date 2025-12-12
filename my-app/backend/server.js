import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import adminRoutes from "./routes/admin.routes.js";
import navbarRoutes from "./routes/navbar.routes.js";
import homeRoutes from "./routes/home.routes.js";
import aboutRoutes from "./routes/about.routes.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/admin", adminRoutes);
app.use("/api/navbar", navbarRoutes);
app.use("/api/home", homeRoutes);
app.use("/api/about", aboutRoutes);

app.use("/uploads", express.static("uploads"));


app.get("/", (req, res) => {
  res.send("Zenelait Backend ESM Running");
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
