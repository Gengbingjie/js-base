console.log(1);

setTimeout(() => console.log(2));

Promise.resolve().then(() => console.log(3));

Promise.resolve().then(() => setTimeout(() => console.log(4)));

Promise.resolve().then(() => console.log(5));

setTimeout(() => console.log(6));

console.log(7);



/**
 *  同步：  1，7
 *  微任务：3、() => setTimeout(() => console.log(4))、5
 *  宏任务：2、6、4、
 * 
 */
