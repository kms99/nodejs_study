const path = require("path");

const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("middleware 2");
  // __dirname 은 현재 파일이 실행되는 폴더를 의미 (routes)
  res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
});

module.exports = router;
