import express from "express";
import router from "@/routes/index"
import errorHandler from "./middlewares/errorHandler";
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from '@documentation/swagger';


const PORT = 3000;
const app = express();

// Middleware to parse JSON
app.use(express.json());
// Add routes
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/api", router);

app.use(errorHandler);
app.listen(PORT, () => {
 console.log(`The server is running on port ${PORT}`);
});