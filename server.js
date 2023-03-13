const http = require('http');
http
  .createServer((req, res) => {
    console.log(req.url, req.headers.cookie);
    res.writeHead(200, { 'Set-Cookie': 'mycookie=test' });
    res.end('Hello cookie');
  })
  .listen(8080, () => {
    console.log('8080포트로 서버를 열었습니다.');
  });
