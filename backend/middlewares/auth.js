const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, "longer-secret-is-better");
    next();
  } catch (error) {
    res.status(401).json({ message: "Authentication failed!" });
  }
};

// Note: In the real world app the secret should not be kept in the code .
//  The best practice is to store as an environment variable and it should be complex combination of numbers and strings.
