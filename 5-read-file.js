/*
Read File Operation : Async
- ค้นหาไฟล์
- เปิดไฟล์
- อ่านไฟล์ (ไฟล์ยิ่งยาว ยิ่งใช้เวลาเยอะ)
- เขียนไฟล์
*/
//  import built-in node

const fs = require('fs');

// fs.readFile('./data/text1.txt','utf-8',(err,data)=> {
//     // console.log('error',err);
//     // console.log('data',data);
//     if(!err) console.log('data',data)
// });

const data1 = 'text2.txt';
const data2 = 'text3.txt';
const data3 = 'text4.txt';

fs.readFile('./data/text1.txt','utf-8',(err1,data) => {
    if(!err1){
        fs.readFile(`./data/${data1}`,'utf-8',(err2,data2)=> {
            if(!err2){
                fs.readFile(`./data/${data2}`,'utf-8',(err3,data3)=>{
                    if(!err3){
                        fs.readFile(`./data/${data3}`,'utf-8',(err4,data4)=>{
                            if(!err4){
                                console.log('SECRET MESSAGE :',data4)
                                }
                        });
                    }
                });
            }
        });
    }
}); 

