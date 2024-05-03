

//#
function fetchAPI(){
    return 5;  // return 5
}
console.log(fetchAPI()) // return 5

async function fetchAPI(){
    return 5; 
}
console.log(fetchAPI()) // return Promise {5}
fetchAPI().then((r)=> console.log(r)) //5

//## 2 : await keyword ใช้จัดการกับ Promise Object จนกว่าจะ Resolve

// FN สร้าง Promise
const fs = require('fs');
function readFilePromise(path){
    let promise = new Promise((fulfill, reject) => {
        fs.readFile(path,'utf-8',(err,data)=>{
            if(!err)fulfill(data);
            else reject(err);
        });
    });
    return promise;
}

async function readFile(){
    //Async Task ดูจากว่ามี Promise
    // let result1 = await readFilePromise("./data/text1.txt");
    // let result2 = await readFilePromise("./data/text2.txt");
    // let result3 = await readFilePromise("./data/text3.txt");
    // let result4 = await readFilePromise("./data/text4.txt");
    try{
    let result1 = await readFilePromise("./data/text1.txt");
    let result2 = await readFilePromise(`./data/${result1}`);
    let result3 = await readFilePromise(`./data/${result2}`);
    let result4 = await readFilePromise(`./data/${result3}`);
    console.log('result : ',result1,result2,result3,result4)
} catch (error) {
    console.log(error);
}
}
readFile();
// console.log('Hi');