// core modules
/**
 * http - 서버생성 및 http 요청 응답, 서버 생성 및 보낼떄
 * https - 서버생성 및 http 요청 응답, SSL 암호화 서버 출시시 사용
 * fs - 파일을 읽을 때
 * path - 파일시스템 경로구축
 * os - 운영체제 구성
 */

const http = require("http");

const routes = require("./routes");
// const fs = require("fs");

// function rqListener(req, res) {
//   //   console.log(req.url, req.method, req.headers);
//   //   process.exit(); // 이벤트 루프 종료, 서버 종료

//   const url = req.url;
//   const method = req.method;

//   if (url === "/") {
//     res.write("<html>");
//     res.write("<head><title>Enter Message</title></head>");
//     res.write(
//       "<body><form action='/message' method='POST'><input type='text/' name='message'><button type='submit'>Send</button></form></body>"
//     );
//     res.write("</html>");
//     return res.end();
//   }

//   if (url === "/message" && method === "POST") {
//     const body = [];
//     req.on("data", (chunk) => {
//       console.log(chunk);
//       body.push(chunk);
//     });
//     return req.on("end", () => {
//       const parsedBody = Buffer.concat(body).toString();
//       const message = parsedBody.split("=")[1];
//       fs.writeFileSync("message.txt", message, (err) => {
//         res.statusCode = 302;
//         res.setHeader("Location", "/");
//         return res.end();
//       });
//     });
//   }
//   res.setHeader("Content-Type", "text/html");
//   res.write("<html>");
//   res.write("<head><title>My First Page</title></head>");
//   res.write("<body><h1>Hello from my Node.js Server!</h1></body>");
//   res.write("</html>");
//   res.end();
// }

// const server = http.createServer(rqListener); // 서버생성 시 필수
const server = http.createServer(routes.handler); // 서버생성 시 필수
http.createServer(function (req, res) {}); // EDA (Event Driven Architecture)
http.createServer((req, res) => {});

server.listen(3000); // 스크립트 지속 실행 -> 루핑프로세스
