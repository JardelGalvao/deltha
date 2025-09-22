"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCompany = exports.createCompany = exports.findCompany = exports.finAllCompanies = void 0;
const companyRepository = __importStar(require("../repository/company.repository.js"));
const HttpError_js_1 = __importDefault(require("@/errors/HttpError.js"));
const finAllCompanies = async (page = 1) => {
    const pageNumber = Math.max(page, 1);
    const pageSize = 10;
    const offset = (pageNumber - 1) * pageSize;
    const companies = await companyRepository.findAll(pageSize, offset);
    return companies.rows;
};
exports.finAllCompanies = finAllCompanies;
const findCompany = async (id) => {
    const company = await companyRepository.findById(id);
    if (company.rowCount === 0) {
        throw new HttpError_js_1.default("Company not found.", 400);
    }
    return company.rows;
};
exports.findCompany = findCompany;
const createCompany = async (companyData) => {
    const companyTaxId = companyData.tax_id;
    const municipalitiesCode = companyData.municipality_code;
    const companyByTaxId = await companyRepository.findByTaxId(companyTaxId);
    if (companyByTaxId.rows.length > 0) {
        throw new HttpError_js_1.default("There is already a company registered with this inscription.", 409);
    }
    const company = await companyRepository.create(companyData);
    return company.rows;
};
exports.createCompany = createCompany;
const updateCompany = async (companyData) => {
    await companyRepository.update(companyData);
};
exports.updateCompany = updateCompany;
