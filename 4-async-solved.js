// Async 
// จุดตายของ Async  :  ลำดับการทำงานลำบาก,ไม่รู้จะเสร็จเมื่อไร


// function A_Async(){
//     setTimeout(() => {
//         console.log('เตรียมวัตถุดิบทำกับข้าว')
//     }, 1000)
// }
// function B_Async(){
//     setTimeout(() => {
//         console.log('ปรุงอาหาร')
//     }, 1000)
// }
// function C_Async(){
//     setTimeout(() => {
//         console.log('เสริฟ')
//     }, 500)
// }


//  How to Solved : Callback
function A_Async(callback1,callback2){
    setTimeout(() => {
        console.log('เตรียมวัตถุดิบทำกับข้าว')
        callback1(callback2);
    }, 5000)
}
function B_Async(callback3){
    setTimeout(() => {
        console.log('ปรุงอาหาร')
        callback3();
    }, 1000)
}
function C_Async(){
    setTimeout(() => {
        console.log('เสริฟ')
    }, 500)
}


A_Async(B_Async,C_Async);
