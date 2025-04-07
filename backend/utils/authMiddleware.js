const jwt = require("jsonwebtoken");
const { secretKey } = require("../jwtConfig");

function authenticateToken(req, res, next) {
  const authHeader = req.headers("authorization");
  if (!authHeader) {
    return res.status(401).json({ error: "No token provided" });
  }
  const [bearer, token] = authHeader.split(" ");

  if (bearer !== "Bearer" || !token) {
    return res.status(401).json({ error: "Invalid token format" });
  }

  jwt.verify(token, secretKey, (err, user) => {
    if (err) {
      return res.status(403).json({ error: "Invalid token" });
    }
    req.user = user;
    next();
  });
}

module.exports = { authenticateToken };
