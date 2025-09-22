"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const index_1 = __importDefault(require("@routes/index"));
const errorHandler_js_1 = __importDefault(require("./middlewares/errorHandler.js"));
dotenv_1.default.config();
const PORT = 3000;
const app = (0, express_1.default)();
// Middleware to parse JSON
app.use(express_1.default.json());
// Add routes
app.use("/api", index_1.default);
app.use(errorHandler_js_1.default);
app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}`);
});
