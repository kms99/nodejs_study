const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req);
}); // 서버를 만들 때 사용

server.listen(3000);
