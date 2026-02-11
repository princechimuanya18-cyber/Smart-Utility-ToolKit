// function that checks for if a number
// is divisible by 5 return "I'm"
// is divisible by 8 return "a"
// is divisible by both 5 and 10 return "boy"
function numberDivide(input) {
    const number = Number(input);

    if (Number.isNaN(number)) {
        return "Please enter a valid number";
    }

    if (number % 5 === 0 && number % 10 === 0) {
        return "boy";
    }

    if (number % 5 === 0) {
        return "I'm";
    }

    if (number % 8 === 0) {
        return "a";
    }

    return "Number not divisible by 5 or 8";
}

module.exports = numberDivide;
