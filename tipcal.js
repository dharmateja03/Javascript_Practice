bill = Number(prompt("Enter the bill value"));
if (bill >= 15 && bill <= 300) {
    tip = bill * 0.15;
    amount_paid = tip + bill;
    console.log(`tip is ${tip} and your totall bill including tip will be ${amount_paid}`);
}
else if (bill > 300) {
    tip = bill * 0.3;
    amount_paid = tip + bill;
    console.log(`tip is ${tip} and your totall bill including tip will be ${amount_paid}`);
}
else {

    console.log(`tip is 0 and your totall bill will be ${bill}`);
}