const errorHandler = (err, req, res, next) => {
  console.error(err.statusCode);

  // Handle PostgreSQL unique constraint error
  if (err.statusCode === 23505) {
    return res.status(409).json({
      error: "Duplicate key error: an organization with this ID already exists."
    });
  }

  // Handle error 400
  if (err.statusCode === 400) {
    return res.status(400).json({
      error: err.message
    });
  }

  // Handle error 409
  if (err.statusCode === 409){
    return res.status(409).json({
      error: err.message
    });  
  }

  // Default fallback
  res.status(err.statusCode || 500).json({
    message: "Internal Server Error"
  });
};

export default errorHandler;
