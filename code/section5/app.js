const http = require("http");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// 본문처리를 위한 미들웨어
// bodyparser 패키지의 urlencoded는 마지막에 자동으로 next 실행
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/add-product", (req, res, next) => {
  console.log("middleware 1");
  res.send(`
    <form action="/product" method="POST">
        <input type="text" name="title"/>
        <button type="submit">Add Product</button>
    </form>
  `);
});

app.post("/product", (req, res) => {
  const product = req.body;
  console.log(product);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  console.log("middleware 2");
  res.send("<h1>Hello express!!</h1>");
});

app.listen(3000);
