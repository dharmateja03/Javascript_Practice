const data =
{
    name: 'dharma',
    no: 9652,
    age: 22,
    goals: 'palnned',
    weight: 76.9,
    fun2: function (a) {
        return a ** 2;
    }
}
console.log(data);
console.log(data.age);
//22
console.log();
console.log(data.fun2(2));
//4

//console.log(data[fun2(2)]);
//This gives error as fun2 is not defined outside object ,[] evealuate whats inside first
//arrays are also objects with ore defined methods
console.log(data['fun2'](2));

//console.log(data[age]);
//Error
console.log(data['age']);
console.log(data['ag' + 'e']);
//22
//undefined means we are trying to access the property from a object which is not existing
///better always use bracket notation instead of . notation
// data[location] = prompt()
// console.log(data[location]);  

