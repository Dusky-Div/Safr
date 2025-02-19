import { Router } from "express";
import User from "../models/users.model.ts";

const router = Router();

router.post("/signup", async (req: any, res: any) => {
  try {
    const { firebaseUID, firstName, lastName, email } = req.body;

    console.log("Received data:", { firebaseUID, firstName, lastName, email });

    // Check if user already exists
    const existingUser = await User.findOne({ firebaseUID });
    if (existingUser) {
      console.log("User already exists:", existingUser);
      return res.status(400).json({ message: "User already exists" });
    }

    // Create a new user
    const newUser = new User({ firebaseUID, firstName, lastName, email });

    console.log("New user before saving:", newUser);

    await newUser.save();
    console.log("User saved:", newUser);

    console.log("User saved successfully!");

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error in /signup:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
