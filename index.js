import express from "express";
import db from "./config/database.js";
import userRoutes from "./routes/index.js";
import cors from "cors";

const app = express();
const port = 5000;

try {
  await db.authenticate();
  console.log("Database Connected.");
} catch (error) {
  console.log(`Database Connection Error : ${error}`);
}

app.use(cors());
app.use(express.json());
app.use("/users", userRoutes);

app.listen(port, () => console.log(`server run at port ${port}`));
