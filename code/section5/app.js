const path = require("path");

const rootDir = require("./utils/path");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

// 본문처리를 위한 미들웨어
// bodyparser 패키지의 urlencoded는 마지막에 자동으로 next 실행
app.use(bodyParser.urlencoded({ extended: false }));

// 정적 파일 (css, 이미지)를 html 파일에서 사용하기 위한 코드
// public 폴더의 읽기 권한 활성화
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes); // 시작 path의 prefix 지정 가능
app.use(shopRoutes);

//Error 처리
app.use("/", (req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, "views", "not-found.html"));
});

app.listen(3000);
