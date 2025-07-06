// check armstrong number or not
function isArmstrongNumber(num) {
    const strNum = num.toString();
    const length = strNum.length;
    let sum = 0;

    for (let i = 0; i < length; i++) {
        sum += Math.pow(parseInt(strNum[i]), length);
    }

    return sum === num;
}
console.log(isArmstrongNumber(153)); // true
console.log(isArmstrongNumber(123)); // false