import express from "express";
import dotenv from "dotenv";
import router from "./routes/index.js";
import errorHandler from "./middlewares/errorHandler.js";

dotenv.config();

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Add routes
app.use("/api", router);

app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`The server is running on port ${process.env.PORT}`);
});
