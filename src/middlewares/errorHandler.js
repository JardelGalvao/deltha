const errorHandler = (err, req, res, next) => {
  console.error(err.statusCode);

  // Handle PostgreSQL unique constraint error
  if (err.statusCode === 23505) {
    return res.status(409).json({
      error: "Duplicate key error: an organization with this ID already exists."
    });
  }

  if (err.statusCode === 400) {
    return res.status(400).json({
      error: "Empresa não encontrada."
    });
  }

  // Default fallback
  res.status(err.statusCode || 500).json({
    message: "Internal Server Error"
  });
};

export default errorHandler;
