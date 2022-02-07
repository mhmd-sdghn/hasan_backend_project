const router = require("express").Router();
const celebritiesPost = require("./controllers/celebritoes/celebrities.post");
const celebritiesGet = require("./controllers/celebritoes/celebrities.get");
const celebritiesPut = require("./controllers/celebritoes/celebrities.put");
const celebritiesDelete = require("./controllers/celebritoes/celebrities.delete");
const loginPost = require("./controllers/auth/login.post");
const worksPost = require("./controllers/works/works.post");
const worksPut = require("./controllers/works/works.put");
const worksDelete = require("./controllers/works/works.delete");
const TokenMiddleware = require("./middleware/token");

router.get("/", (req, res) => {
  res.send("server is up and running");
});

router.post("/celebrities", TokenMiddleware, celebritiesPost);

router.get("/celebrities", celebritiesGet.getAll);

router.get("/celebrities/search", celebritiesGet.search);

router.get("/celebrities/:id", celebritiesGet.getSingle);

router.delete("/celebrities/:id", TokenMiddleware, celebritiesDelete);

router.put("/celebrities", TokenMiddleware, celebritiesPut);

router.post("/works", TokenMiddleware, worksPost);

router.put("/works", TokenMiddleware, worksPut);

router.delete("/works/:id", TokenMiddleware, worksDelete);

router.post("/auth/login", loginPost);

router.use((req, res) => {
  return res.status(404).json({
    status: "NotFound",
    devMSG: "NotFound",
    userMSG: "یافت نشد",
  });
});

module.exports = router;
