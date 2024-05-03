function A(){
    console.log('เตรียมวัตถุดิบทำกับข้าว')
}
function B(){
    console.log('ปรุงอาหาร')
}
function C(){
    console.log('เสริฟ')
}

// Sync
// A()
// B()
// C()

// Async 
// จุดตายของ Async  :  ลำดับการทำงานลำบาก,ไม่รู้จะเสร็จเมื่อไร
function A_Async(){
    setTimeout(()=>{
        console.log('เตรียมวัตถุดิบทำกับข้าว')
    }, 100)
}
function B_Async(){
    setTimeout(()=>{
        console.log('ปรุงอาหาร')
    }, 400)
}
function C_Async(){
    setTimeout(()=>{
        console.log('เสริฟ')
    }, 500)
}

A_Async()
B_Async()
C_Async()