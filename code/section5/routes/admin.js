const express = require("express");

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  console.log("middleware 1");
  res.send(`
      <form action="/product" method="POST">
          <input type="text" name="title"/>
          <button type="submit">Add Product</button>
      </form>
    `);
});

router.post("/product", (req, res) => {
  const product = req.body;
  console.log(product);
  res.redirect("/");
});

module.exports = router;
