const { Certificate } = require("crypto");

// 
const student = {
    name : "Jane",
    age : "24",
    isAdmin : "false",
    courses : ['html','css'],
    wife : null,
    doHw : () => console.log('Do my homework'),
    certificate : undefined
};

// ส่งข้อมูลผ่าน HTTP : แปลง JS Object เป็น JSON
const jsonData = JSON.stringify(student);
console.log(jsonData, typeof jsonData);

// ส่งข้อมูลผ่าน HTTP Requse : แปลง JSON เป็น JS Object เพื่อใช้งานใน App
const jsObject =  JSON.parse(jsonData);
console.log(jsObject, typeof jsObject);