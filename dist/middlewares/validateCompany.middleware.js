"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.companyValidate = void 0;
const companyValidate = (companySchema) => (req, res, next) => {
    const result = companySchema.safeParse(req.body);
    if (!result.success) {
        return res.status(400).json({ errors: result.error.issues });
    }
    next();
};
exports.companyValidate = companyValidate;
