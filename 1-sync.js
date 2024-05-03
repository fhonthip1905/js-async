// 1 : สอน Computer ให้รู้จัก FN A,B (Heap)
function A(){
    console.log('Perform Task A');
}
function B(){
    console.log('Perform Task B');
}

function C(){
    console.log('Perform Task C')
}
function D(){
    C();
    console.log('Perform Task D')
}
// Execute (Call stack)  Result == sync operation
// A();    
// B();    
//result
//Perform Task A
//Perform Task B

D() 
//result
// Perform Task C (1)
//Perform Task D (2)