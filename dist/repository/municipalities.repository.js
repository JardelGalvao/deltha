"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findById = exports.findAll = void 0;
const database_js_1 = __importDefault(require("../config/database.js"));
const findAll = async (pageSize, offset) => {
    const query = "SELECT * FROM DELTHA.MUNICIPALITIES LIMIT $1 OFFSET $2;";
    const values = [pageSize, offset];
    const municipalities = await database_js_1.default.query(query, values);
    return municipalities;
};
exports.findAll = findAll;
const findById = async (id) => {
    const query = "SELECT * FROM DELTHA.MUNICIPALITIES WHERE CODIGO_EMPRESA = $1";
    const values = [id];
    const municipalities = await database_js_1.default.query(query, values);
    return municipalities;
};
exports.findById = findById;
