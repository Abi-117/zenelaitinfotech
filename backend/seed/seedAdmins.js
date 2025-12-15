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
      { username: "admin1", password: "Zenelait@123" },
      { username: "admin2", password: "Zenelait@456" },
      { username: "admin3", password: "Zenelait@789" },
    ];

    await Admin.deleteMany();

    for (let user of adminUsers) {
      const hashed = await bcrypt.hash(user.password, 10);
      await Admin.create({ username: user.username, password: hashed });
    }

    console.log("3 Admin Accounts Created Successfully!");
    process.exit();
  })
  .catch((err) => console.log(err));
