// Global error-handling middleware
// Returns structured JSON response instead of raw error stack
const errorHandler = (err, req, res, next) => {
  console.error('Error:', err.message);

  // Handle Mongoose validation errors
  if (err.name === 'ValidationError') {
    const messages = Object.values(err.errors).map((e) => e.message);
    return res.status(400).json({
      success: false,
      error: 'Validation Error',
      messages: messages,
    });
  }

  // Handle Mongoose duplicate key error
  if (err.code === 11000) {
    return res.status(400).json({
      success: false,
      error: 'Duplicate Key Error',
      message: 'A record with this value already exists.',
    });
  }

  // Handle all other errors
  res.status(err.status || 500).json({
    success: false,
    error: err.message || 'Internal Server Error',
    message: 'Something went wrong on the server.',
  });
};

module.exports = errorHandler;
