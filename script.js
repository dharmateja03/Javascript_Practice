'use strict'
console.log(typeof ('111.11'))

//let var const 
let a = 212;
a -= 1
// console.log(2 ** 34)
// console.log('Rahul ' + "hjdgjjhdsh")
// console.log(1 == true)
// let n = prompt("Dsdd")
// console.log(n + 1, 'this is without pint method this is string .this is done to show that prompt always returns string ')
// let n1 = prompt("for a number")
// n1 = parseInt(n1)
//n1=NUmber(n1)
// console.log(n1, 'this is a number / INT')
// //converting a number to string
// let nums = 12341;
// nums1 = String(nums)
// console.log(nums1)

//IF - ELSE STATMENT 
let d;
if (a == 2111) {

    console.log('printed if ');

}
else if (a > 10) {
    console.log('printed else if ');
    let d = 100;
}
else { console.log("printed else"); }
console.log(Boolean(NaN) == false);

//BOOLEAN VALUES 
console.log(!(1))
// &&  ||
console.log(2111 && 2, 111 || 99)
//2 111 and-- right values or -- left values
// let e = Number(prompt("aaaaaaaaa"));
// // e = e || "a";
// console.log(e * 10)

function addy(a, b) {
    return a + b;
    console.log(a + b);


}
console.log(addy(1, 77, 4.8));
const gg = (s, p) => {
    s += 10;
    p += 20;
    return s * p;
};
console.log(gg(0, 0));