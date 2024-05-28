// core modules
/**
 * http - 서버생성 및 http 요청 응답, 서버 생성 및 보낼떄
 * https - 서버생성 및 http 요청 응답, SSL 암호화 서버 출시시 사용
 * fs - 파일을 읽을 때
 * path - 파일시스템 경로구축
 * os - 운영체제 구성
 */

const http = require("http");

function rqListener(req, res) {
  console.log(req);
  process.exit(); // 이벤트 루프 종료, 서버 종료
}

const server = http.createServer(rqListener); // 서버생성 시 필수
http.createServer(function (req, res) {}); // EDA (Event Driven Architecture)
http.createServer((req, res) => {});

server.listen(3000); // 스크립트 지속 실행 -> 루핑프로세스
