import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import mongoose from "mongoose";
import Admin from "../models/admin.model.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("MongoDB Connected for Seeding");

    const adminUsers = [
      { username: "zenelaitinfotech@gmail.com", password: "Zen@123" },
      { username: "zenelaitinfotech", password: "Zenelait@123" },
      { username: "zenelait", password: "Zenenailtinfotech@123" },
    ];

    // Clean old admins
    await Admin.deleteMany();

    for (let user of adminUsers) {
      const hashed = await bcrypt.hash(user.password, 10);
      await Admin.create({ username: user.username, password: hashed });
    }

    console.log("3 Admin Accounts Created Successfully!");
    process.exit();
  })
  .catch((err) => console.log(err));
