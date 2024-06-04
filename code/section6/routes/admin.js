const path = require("path");

const rootDir = require("../utils/path");

const express = require("express");

const router = express.Router();

const products = [];

router.get("/add-product", (req, res, next) => {
  res.render("add-product", {
    docTitle: "Add Product",
    path: "/admin/add-product",
    activeAddProduct: true,
    productCSS: true,
    formCSS: true,
  });
  // res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

router.post("/add-product", (req, res) => {
  const { title } = req.body;
  products.push({ title });
  res.redirect("/");
});

exports.routes = router;
exports.products = products;
