/* 
วิธี Handdle Async
- Callback -> callback Hell
- Promise 
*/

//callback1 = เป็นฟังก์ ที่จะถูกเรียกใช้งานเมื่อทำตามสัญญา✅สำเร็จ
//callback2 = เป็นฟังก์ ที่จะถูกเรียกใช้งานเมื่อทำตามสัญญา❌สำเร็จ


function contract(callback1, callback2) {
  setTimeout(() => {
    let n = Math.floor(Math.random() * 11);

    //Finalize : ทำตามสัญญาได้ไหม
    if (n % 2 == 0 && n !== 0) {
      //Success
    //   callback1('Yes : success✅');
    callback1(`${n} : 'Is Even Number ✅`);
    } else {
      //Not Success
      callback2(`${n} : 'Is not Even Number❌'`);
    }
  }, 1500);
  // Logic :
}


const promise = new Promise(contract);

console.log(promise); //PENDING


//Handle  :  RESOLVED
//promise.then(callback1).catch(callback2)
//สิ่งที่โยนให้ callback1 จะมาเป็นฟังก์ parameter ของ callback ใน then
//สิ่งที่โยนให้ callback2 จะมาเป็นฟังก์ parameter ของ callback ใน catch

//result มาจาก callback1
promise.then((result)=>{
    console.log('Fulfilled',result)
}).catch((err)=>{
    console.log('Rejected',err)
});
