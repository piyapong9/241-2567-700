const express = require('express')
const bodyParser = require('body-parser');
const mysql = require('mysql2/promise');
const cors = require('cors');
<<<<<<< HEAD
const e = require('express');
=======
>>>>>>> 933434b5f7f4e70677527f207f508a80dbee64db
const app = express();

const port = 8000;

app.use(bodyParser.json());
app.use(cors());

let users = []

let conn = null

const initMysql = async () => {
 conn = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'webdb',
    port: 8820
})
}

<<<<<<< HEAD
const validateData = (userData) => {
  let errors = []

  if (!userData.firstname) {
      errors.push('กรุณากรอกชื่อ')
  }
  if (!userData.lastname) {
      errors.push('กรุณากรอกนามสกุล')
  }
  if (!userData.age) {
      errors.push('กรุณากรอกอายุ')
  }
  if (!userData.gender) {
      errors.push('กรุณาเลือกเพศ')
  }
  if (!userData.interests) {
      errors.push('กรุณาเลือกความสนใจ')
  }
  if (!userData.description) {
      errors.push('กรุณากรอกคำอธิบาย')
  }
  return errors
}

=======
>>>>>>> 933434b5f7f4e70677527f207f508a80dbee64db
/*
app.get('/testdbnew',async (req, res) => {

  try{
      const results = await conn.query('SELECT * FROM users')
      res.json(results[0])
  } catch (error) {
      console.log('error', error.message)
      res.status(500).json({error: 'Error fetching users'})
  }
})
*/

/*
GET /users สำหรับ get users ทั้งหมดที่บันทึกไว้
POST /user สำหรับสร้าง user ใหม่
GET /users/:id สำหรับ ดึง users รายคนออกมา
PUT /users/:id สำหรับแก้ไข users รายคน (ตาม id ที่บันทึกเข้าไป)
DELETE /users/:id สำหรับลบ users รายคน ตาม id ที่บันทึกเข้าไป)

*/

// path = GET /users สำหรับ get users ทั้งหมดที่บันทึกไว้
app.get('/users', async (req, res) => {
  const results = await conn.query('SELECT * FROM users')
  res.json(results[0])
})

// path = POST /user สำหรับสร้าง user ใหม่
app.post('/users', async (req, res) => {
<<<<<<< HEAD

  try{
    let user = req.body;
    const errors = validateData(user)
    if (errors.length > 0) {
      throw {
        message: 'กรุณากรอกข้อมูลให้ครบถ้วน',
        errors: errors
      }
    }
    const results = await conn.query('INSERT INTO users SET ?', user)
    res.json({
      message: 'Create user successfully',
      data: results[0]
    })
  }catch(error){
    const errorMessage = error.message || 'Something went wrong'
    const errors = error.errors || []
    console.log('error message', error.message)
    res.status(500).json({
      message: errorMessage,
      errors: errors
=======

  try{
    let user = req.body;
    const results = await conn.query('INSERT INTO users SET ?', user)
    res.json({
      message: 'Create user successfully',
      data: results[0]
    })
  }catch(error){
    console.log('error:', error.message)
    res.status(500).json({
      message: 'Something went wrong',
      errorMessage: error.message
    })
  }
})

// path = GET /users/:id สำหรับ ดึง users รายคนออกมา
app.get('/users/:id', async (req, res) => {
  try{
    let id = req.params.id;
    const results = await conn.query('SELECT * FROM users WHERE id = ?', id)
    if(results[0].length == 0){
      throw {statusCode: 404, message: 'User not found'}
    }
    res.json(results[0][0])

  }catch(error){
    console.log('error:', error.message)
    let statusCode = error.statusCode || 500
    res.status(500).json({
      message: 'Something went wrong',
      errorMessage: error.message
>>>>>>> 933434b5f7f4e70677527f207f508a80dbee64db
    })
  }
})

<<<<<<< HEAD
// path = GET /users/:id สำหรับ ดึง users รายคนออกมา
app.get('/users/:id', async (req, res) => {
  try{
    let id = req.params.id;
    const results = await conn.query('SELECT * FROM users WHERE id = ?', id)
    if(results[0].length == 0){
      throw {statusCode: 404, message: 'User not found'}
    }
    res.json(results[0][0])

  }catch(error){
    console.log('error:', error.message)
    let statusCode = error.statusCode || 500
=======
// path: PUT /users/:id สำหรับแก้ไข users รายคน (ตาม id ที่บันทึกเข้าไป)
app.put('/users/:id', async (req, res) => {

  try{
    let id = req.params.id;
    let updateUser = req.body;
    const results = await conn.query('UPDATE users SET ? WHERE id = ?', [updateUser, id])
    res.json({
      message: 'Update user successfully',
      data: results[0]
    })
  }catch(error){
    console.log('error:', error.message)
>>>>>>> 933434b5f7f4e70677527f207f508a80dbee64db
    res.status(500).json({
      message: 'Something went wrong',
      errorMessage: error.message
    })
  }
})

<<<<<<< HEAD
// path: PUT /users/:id สำหรับแก้ไข users รายคน (ตาม id ที่บันทึกเข้าไป)
app.put('/users/:id', async (req, res) => {

  try{
    let id = req.params.id;
    let updateUser = req.body;
    const results = await conn.query('UPDATE users SET ? WHERE id = ?', [updateUser, id])
    res.json({
      message: 'Update user successfully',
      data: results[0]
    })
  }catch(error){
    console.log('error:', error.message)
    res.status(500).json({
      message: 'Something went wrong',
      errorMessage: error.message
    })
  }
})

=======
>>>>>>> 933434b5f7f4e70677527f207f508a80dbee64db

//path: DELETE /users/:id สำหรับลบ users รายคน ตาม id ที่บันทึกเข้าไป)
app.delete('/users/:id', async (req, res) => {
  try{
    let id = req.params.id;
    const results = await conn.query('DELETE from users WHERE id = ?', id)
    res.json({
      message: 'Delete user successfully',
      data: results[0]
    })
  }catch(error){
    console.log('error:', error.message)
    res.status(500).json({
      message: 'Something went wrong',
      errorMessage: error.message
    })
  }
})
  
app.listen(port, async (req, res) => {
  await initMysql()
  console.log('http server is running on port' + port)
});