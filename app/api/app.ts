import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Root test route
app.get("/", (req: express.Request, res: express.Response) => {
  res.json({ message: "Dashboard API is running" });
});

const PORT = process.env.PORT || 4005;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
