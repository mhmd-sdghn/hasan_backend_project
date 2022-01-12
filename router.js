const router = require("express").Router();
const celebritiesPost = require("./controllers/celebritoes/celebrities.post");
const celebritiesGet = require("./controllers/celebritoes/celebrities.get");
const celebritiesPut = require("./controllers/celebritoes/celebrities.put");
const celebritiesDelete = require("./controllers/celebritoes/celebrities.delete");
const loginPost = require("./controllers/auth/login.post")

router.get("/", (req, res) => {
  res.send("server is up and running");
});

router.post("/celebrities", celebritiesPost);

router.get("/celebrities", celebritiesGet.getAll);

router.get("/celebrities/search", celebritiesGet.search);

router.get("/celebrities/:id", celebritiesGet.getSingle);

router.delete("/celebrities/:id", celebritiesDelete);

router.put("/celebrities", celebritiesPut);

router.post("/auth/login", loginPost);

router.use((req, res) => {
  return res.status(404).json({
    status: "NotFound",
    devMSG: "NotFound",
    userMSG: "یافت نشد",
  });
});

module.exports = router;
