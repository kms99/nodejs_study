const path = require("path");

const rootDir = require("../utils/path");
const adminData = require("./admin");

const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  // console.log(adminData.products);
  // __dirname 은 현재 파일이 실행되는 폴더를 의미 (routes)
  // res.sendFile(path.join(rootDir, "views", "shop.html"));
  const products = adminData.products;
  res.render("shop", {
    prods: products,
    docTitle: "Shop",
    path: "/",
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true,
  });
});

module.exports = router;
