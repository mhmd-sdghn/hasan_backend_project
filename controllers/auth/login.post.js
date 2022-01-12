const jwt = require("jsonwebtoken");

module.exports = function (req, res) {
  try {
    const { username, password } = req.body;

    if (
      username === process.env.ADMIN_USERNAME &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const token = jwt.sign({ name: "hasan" }, process.env.TOKEN_SECRET_KEY);

      res.cookie("token", token);

      res.send();
    } else {
      return res.status(401).send();
    }
  } catch (err) {
    console.error("login.post ", err);
    return res.status(500).send();
  }
};
