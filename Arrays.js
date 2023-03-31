const arr = [1, "aaa", 1.222, false];
///Length
console.log(arr.length);
console.log(arr)
//OP->(4) [1, 'aaa', 1.222, false]
arr[2] = 11;
console.log(arr);
//(4) [1, 'aaa', 11, false]
//Use .push or pop for updating last element
const arr1 = arr.slice(0, 2)
console.log(arr1);
let ar1 = [1, 1, 0, 9, 1, 1, 1];
ar1.forEach(
    (e, index) => { ar1[index] = e * 10; }

);
console.log(ar1);
//(7) [10, 10, 0, 90, 10, 10, 10]
let arr2 = [1, 2, 3];
arr2.forEach(function (element) {
    console.log(element);
});
// Output:
// 1
// 2
// 3
console.log(ar1.indexOf(1), ar1.lastIndexOf(1));
//gives first and last ocuurance of an element gives -1 if element does not exist in array
let nwarr = ar1.filter(
    function (e) {
        if (!(e % 2) && !(e % 10)) {
            return e;

        }
    }
)
console.log(nwarr);
//(6) [10, 10, 90, 10, 10, 10]
console.log(nwarr.includes(22));
//false
let d = [1, 2, 3, 4, 5, 6, 7, 8, 9]
for (i = d.length - 1; i > -1; i--) {
    console.log(d[i])
}
