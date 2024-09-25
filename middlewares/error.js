const handleError = (err, req, res, next) => {
  // code
  res.status(err.statusCode).json({ message: err.message });
};

module.exports = handleError;
