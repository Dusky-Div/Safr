import { Request, Response, Router } from "express";

const router = Router();

router.post("/code", async (_: Request, res: Response) => {
  try {
    const user = {
      username: "johndoe",
      email: "john@g.co",
      language: "C++",
    };
    res.status(200).json({ user });
  } catch (error) {
    console.warn("Error on /users: ", error);
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Unknown error" });
    }
  }
});

export default router;
