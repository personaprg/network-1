const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  function serverErrorLog(){ //서버 오류 로그를 확인하기 위한 func 생성

    res.writeHead(500);
    return res.end("서버의서 문제가 발생하였습니다.");
  }

  console.log("요청 확인");

});