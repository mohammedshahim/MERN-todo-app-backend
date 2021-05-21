var express = require("express");
const { updateById, deleteById } = require("../database/collections");
const collections = require("../database/collections");
var router = express.Router();

router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

/* GET home page. */
router.get("/", async (req, res) => {
  let response = await collections.viewData();
  console.log(process.env.DATABASE_URI_PART_ONE);
  res.send(response);
});

router.post("/", async (req, res) => {
  let userData = req.body;
  await collections.addData(userData);
  let response = await collections.viewData();
  // res.send(response.ops[0]);
  res.send(response);
});

router.get("/edit/:id", async (req, res) => {
  let userData = req.params.id;
  let response = await collections.viewById(userData);
  res.send(response);
});

router.post("/update", async (req, res) => {
  let userData = req.body;
  console.log(userData);
  await updateById(userData);
  response = await collections.viewData();
  res.send(response);
});

router.get("/delete/:id", async (req, res) => {
  let userData = req.params;
  console.log(userData);
  await deleteById(userData);
  response = await collections.viewData();
  res.send(response);
});

module.exports = router;
