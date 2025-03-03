import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import users from "./routes/users.ts";
import connectDB from "./db/db.ts";

const app = express();
const PORT = process.env.PORT;

//Middleware
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());

//Routes
app.use("/", users);

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.warn("Error on startServer: ", error);
    process.exit(1);
  }
};

startServer();
