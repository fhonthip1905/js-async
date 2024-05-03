//  BuildIn JS (Async)
//  -setTimeOut FN
//  -setInterval FN

const asyncFn = () => console.log ('Async Task')
const delayTimeInMS = () => 0;

const syncFn = ()=> console.log('Sync Task')

//execute
setTimeout(asyncFn, delayTimeInMS);
syncFn();

