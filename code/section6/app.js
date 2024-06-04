const path = require("path");

const rootDir = require("./utils/path");

const express = require("express");
const bodyParser = require("body-parser");
const expressHbs = require("express-handlebars");

const app = express();

// // pug 설정
// app.set("view engine", "pug");
// // views 기본 값은 views (동적 콘텐츠 처리할 파일이 있는 디렉토리)
// app.set("views", "views");

// // handlebar 설정
// app.engine(
//   "handlebars",
//   expressHbs({
//     layoutsDir: "views/layouts",
//     defaultLayout: "main-layout",
//     extname: "handlebars",
//   })
// );
// app.set("view engine", "handlebars");
// app.set("views", "views");

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

// 본문처리를 위한 미들웨어
// bodyparser 패키지의 urlencoded는 마지막에 자동으로 next 실행
app.use(bodyParser.urlencoded({ extended: false }));

// 정적 파일 (css, 이미지)를 html 파일에서 사용하기 위한 코드
// public 폴더의 읽기 권한 활성화
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes.routes); // 시작 path의 prefix 지정 가능
app.use(shopRoutes);

//Error 처리
app.use("/", (req, res, next) => {
  // res.status(404).sendFile(path.join(rootDir, "views", "not-found.html"));
  res.status(404).render("not-found", { docTitle: "Not Found", path: null });
});

app.listen(3000);
