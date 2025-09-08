export const companyValidate = (companySchema) => (req, res, next) => {
  const result = companySchema.safeParse(req.body);
  
  if (!result.success) {
    return res.status(400).json({ errors: result.error.issues });
  }

  req.validatedData = result.data;
  next();
};
