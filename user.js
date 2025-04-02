const BASE_URL = 'http://localhost:8000'

window.onload = async () => {
    await loadData()
}

const loadData = async () => {
    console.log('user page loaded')
    // 1. Load users ทั้งหมดจาก API
    const response = await axios.get(`${BASE_URL}/users`)

    console.log(response.data)

    const userDOM = document.getElementById('user')
    // 2. นำ users ทั้งหมดโหลดกลับเข้าไปใน HTML ในรูปแบบตาราง

    let htmlData = `
    <div style="display: flex; justify-content: center;">
        <table border="1" cellpadding="10" style="border-collapse: collapse; text-align: left;">
      <thead>
          <tr class="tr1">
              <th>ID</th>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Interests</th>
              <th>Description</th>
              <th>Action</th>
          </tr>
      </thead>
      <tbody>
  `;

  for (let i = 0; i < response.data.length; i++) {
    let users = response.data[i];
    htmlData += ` 
      <tr class="tr2">
          <td>${users.id}</td>
          <td>${users.firstname}</td>
          <td>${users.lastname}</td>
          <td>${users.age}</td>
          <td>${users.gender}</td>
          <td>${users.interests || '-'}</td>
          <td>${users.description || '-'}</td>
          <td>
          <a href="index.html?id=${users.id}"><button class='edit'>Edit</button></a>
          <button class="delete" data-id="${users.id}">Delete</button>
          </td>
      </tr>
    `;
  }

  htmlData += `
        </tbody>
        </table>
        </div>`;

userDOM.innerHTML = htmlData

    // 3. ลบ
    const deleteDOMs = document.getElementsByClassName('delete')
    for (let i = 0; i < deleteDOMs.length; i++) {
        deleteDOMs[i].addEventListener('click', async (event) => {
            // ดึง id ของ user ที่ต้องการลบ
            const id = event.target.dataset.id
            try {
                await axios.delete(`${BASE_URL}/users/${id}`)
                loadData() // recursive function = เรียกใช้ฟังก์ชันตัวเอง
            } catch (error) {
                console.log('error', error)
            }
        })
    }
}