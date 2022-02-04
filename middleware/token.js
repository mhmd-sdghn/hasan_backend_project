const jwt = require("jsonwebtoken");

module.exports = async function (req, res, next) {
  try {
    const token = req.cookies.token;

    await jwt.verify(token, process.env.TOKEN_SECRET_KEY);

    next();
  } catch (err) {
    console.log(err);
    return res.status(403).send();
  }
};
