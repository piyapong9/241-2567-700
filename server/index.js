/*
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
*/

const express = require('express')
const bodyParser = require('body-parser');
const app = express();


const port = 8000;

app.use(bodyParser.json());

let users = []
let counter = 1

/*
GET /users สำหรับ get users ทั้งหมดที่บันทึกไว้
POST /user สำหรับสร้าง user ใหม่
GET /user/:id สำหรับ ดึง users รายคนออกมา
PUT /user/:id สำหรับแก้ไข users รายคน (ตาม id ที่บันทึกเข้าไป)
DELETE /user/:id สำหรับลบ users รายคน ตาม id ที่บันทึกเข้าไป)

*/

// path = GET /users สำหรับ get users ทั้งหมดที่บันทึกไว้
app.get('/users', (req, res) => {
  res.json(users);
})

// path = POST /users ใช้สำหรับสร้าง users ใหม่บันทึกเข้าไป
app.post('/user', (req, res) => {
  let user = req.body;
  user.id = counter;
  counter+=1;
  users.push(user);
  res.json({
    message: 'Create new user successfully',
    user: user
  });
})

// path: PUT /user/:id ใช้สำหรับแก้ไขข้อมูล user โดยใช้ id เป็นตัวแบ่ง
app.put('/user/:id', (req, res) => {
  let id = req.params.id;
  let updateUser = req.body;
  // หา users จาก id ที่ส่งมา
  let selectedIndex = users.findIndex(user => user.id == id)

  // แก้ไขข้ิมูล users
  if (updateUser.firstname) {
  users[selectedIndex].firstname = updateUser.firstname
  }
  if (updateUser.lastname) {
  users[selectedIndex].lastname = updateUser.lastname
  }

  // แก้ไขข้มูล users ที่หาเจอ
  res.json({
    message: 'Update user successfully',
    data: {
        user: updateUser,
        indexUpdate: selectedIndex
    }
  })
  // users ที่ update ใหม่ udpate กลับไปเก็บใน users เดิม
})

//path: DELETE /user/:id ใช้สำหรับลบข้อมูล user โดยใช้ id เป็นตัวระบุ
app.delete('/user/:id', (req, res) => {
  let id = req.params.id;
  // หา index ของ user ที่ต้องการลบ
  let selectedIndex = users.findIndex(user => user.id == id)

  // ลบ
  users.splice(selectedIndex, 1)
  res.json({
    message: 'Delete user successfully',
      indexDeleted: selectedIndex
  })
})

app.listen(port, (req, res) => {
  console.log('http server is running on port' + port)
});