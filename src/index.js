module.exports = function reverse(n) {
   let str = Math.abs(n) + '';
   return Number(str.split('').reverse().join(''));
}



