const path = require("path");

const rootDir = require("../utils/path");

const express = require("express");

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  console.log("middleware 1");
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

router.post("/add-product", (req, res) => {
  const product = req.body;
  console.log(product);
  res.redirect("/");
});

module.exports = router;
