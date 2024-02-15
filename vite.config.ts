console.log('--------------');
console.log(myFunc);

// hoisted, but arrow not hoisted

const myFunc = () => {
  console.log('myFunc');
  console.log(message); // scoped - value undefined not error

  var message = 'message';
  return null;
};
console.log(myFunc);

console.log('1');
// setInterval(() => {
//   console.log('6');
// });
process.nextTick(() => {
  console.log('5 - nextTick');
});
setTimeout(() => {
  console.log('4 - setTimeout');
});
setImmediate(() => {
  console.log('2 - setImmediate'); // Logs after all I/O and callbacks in this iteration
});
console.log('3'); // Logs before '2'

export default {};
