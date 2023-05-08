const jwt = require("jsonwebtoken");

const generateREfreshToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "3d" });
};

module.exports = { generateREfreshToken };
