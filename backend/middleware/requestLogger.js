// requestLogger middleware
// Logs: [METHOD] [PATH] [TIMESTAMP] for every request
const requestLogger = (req, res, next) => {
  const method = req.method;
  const path = req.originalUrl;
  const timestamp = new Date().toISOString();
  console.log(`[${method}] ${path} [${timestamp}]`);
  next();
};

module.exports = requestLogger;
