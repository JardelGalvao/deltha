import express from "express";
import dotenv from "dotenv";
import router from "./routes/index.js";
import errorHandler from "./middlewares/errorHandler.js";

dotenv.config();
const PORT = 3000;

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Add routes
app.use("/api", router);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`);
});
