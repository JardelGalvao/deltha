const errorHandler = (err, req, res, next) => {
  console.error(err);

  // Handle PostgreSQL unique constraint error
  if (err.code === '23505') {
    return res.status(409).json({
      error: 'Duplicate key error: an organization with this ID already exists.'
    });
  }

  // Default fallback
  res.status(err.statusCode || 500).json({
    message: "Internal Server Error"
  });
};

export default errorHandler;
