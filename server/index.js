const http = require('http'); //import Node.js core module

const host = 'localhost'; //Localhost
const port = 8000; //port number

// เมื่อเปิดเว็บไปที่ http://localhost:8000/ จะเรียกใช้งาน function requestListener
const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('My first server!');
}

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});