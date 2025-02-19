import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
// import { createServer } from "http";

const app = express();
const PORT = process.env.PORT;

//Middleware
app.use(cors());
app.use(express.json());

//Routes

const startServer = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.warn("Error on startServer: ", error);
    process.exit(1);
  }
};

startServer();
