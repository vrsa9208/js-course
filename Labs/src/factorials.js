const calculateFactorial = (num) => {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }

    return result;
};

const factorial = (...nums) => {
    if(nums.length == 0) {
        return 1;
    }
    else if (nums.length == 1) {
        return calculateFactorial(nums[0]);
    }
    else {
        return nums.map(n => calculateFactorial(n));
    }
};

module.exports = {
    factorial: factorial
};