//Taking a string of numbers as input and printing them

let nums = prompt("Enter numbers with space")
nums = nums.split(" ");
nums1 = [];
for (i = 0; i < nums.length; i++) {
    nums1.push(Number(nums[i]));

}
for (i = 0; i < nums.length; i++) {
    console.log(nums1[i]);

}
console.log(nums1);

//In for loop

for (let i in nums1) {
    console.log(nums1[i]);
}
