const jwt = require("jsonwebtoken");

const { secretKey } = require("../jwtConfig");

function generateToken(user) {
  const payload = {
    id: user._id,
    user_email: user.user_email,
  };
  return jwt.sign(payload, secretKey, { expiresIn: "24h" });
}

module.exports = { generateToken };