// solution for file 5-read-file.js


// # Version 1
// const { rejects } = require('assert');
// const ls = require('ls');

// const promise = new Promise((fulfill, reject)=>{
//     ls.readFile('./data/text4.txt','uft-8',(err,data)=>{
//         if(!err)fulfill(data);
//         else reject(err);
//     });
// });

// promise.then((result)=>console.log(result)).catch((err)=>console.log('ERR',err))


// ## Version 2
const fs = require('fs');
function readFilePromise(path){
    let promise = new Promise((fulfill, reject) => {
        fs.readFile('./data/text1.txt','utf-8',(err,data)=>{
            if(!err)fulfill(data);
            else reject(err);
        });
    });
    return promise;
}
// const promise1 = readFilePromise('./data/text1.txt');
// const promise2 = readFilePromise('./data/text2.txt');
// const promise3 = readFilePromise('./data/text3.txt');
// const promise4 = readFilePromise('./data/text4.txt');
// promise1.then((result)=>console.log(result)).catch((err)=>console.log('ERR',err))
// promise2.then((result)=>console.log(result)).catch((err)=>console.log('ERR',err))
// promise3.then((result)=>console.log(result)).catch((err)=>console.log('ERR',err))
// promise4.then((result)=>console.log(result)).catch((err)=>console.log('ERR',err))

// ### Version 3 : File 1 => File 2 => File 3 => File 4

const pm = new Promise((fulfill,reject)=>{
    fulfill(100);
});

pm.then((r)=> r + 10 ) //fulfill(r+10)==> s
  .then((s)=> s + 1000) //fulfill(s+100)==> t
  .then((t)=>console.log(t))



  const mainPromise = readFilePromise('./data/text1.txt');

  mainPromise
    .then((result) => readFilePromise(`./data/${result}`))
    .then((result) => readFilePromise(`./data/${result}`))
    .then((result) => readFilePromise(`./data/${result}`))
    .then((message) => console.log(message))
    .catch((err)=>console.log(err));