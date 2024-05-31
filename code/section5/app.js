const http = require("http");

const express = require("express");

const app = express();

// 라우팅 시 1번째 인자는 start path
app.use("/", (req, res, next) => {
  console.log("---------------------"); // 항상 실행
  console.log("Always run!!"); // 항상 실행
  next();
});

app.use("/add-product", (req, res, next) => {
  console.log("middleware 1");
  res.send("<h1>Add Product!!</h1>"); // 응답 내용을 자동으로 판단해 제공
});

app.use("/", (req, res, next) => {
  console.log("middleware 2");
  res.send("<h1>Hello express!!</h1>");
});

app.listen(3000);
