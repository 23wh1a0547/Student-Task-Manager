const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  // Get token from header
  const token = req.header("Authorization") || req.headers.authorization;

  // Check token
  if (!token) {
    return res.status(401).json({ msg: "No token, access denied" });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, "secret");

    // Attach user to request
    req.user = decoded; // { id: userId }

    next();
  } catch (err) {
    res.status(401).json({ msg: "Invalid token" });
  }
};