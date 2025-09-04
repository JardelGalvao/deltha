import { getCompanies } from "../services/companyService.js";

export const getCompaniesController = async(req, res) => {
    await getCompanies();
}