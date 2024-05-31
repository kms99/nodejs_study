const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

// 본문처리를 위한 미들웨어
// bodyparser 패키지의 urlencoded는 마지막에 자동으로 next 실행
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", adminRoutes); // 시작 path의 prefix 지정 가능
app.use(shopRoutes);

//Error 처리
app.use("/", (req, res, next) => {
  res.status(404).send("<h1>Page not found</h1>");
});

app.listen(3000);
