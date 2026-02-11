// function that checks if an input is an odd or even number
function checkEven(input) {
    const number = Number(input);

    if (Number.isNaN(number)) {
        return "This input is not a number";
    }

    if (number % 2 === 0) {
        return "This number is an even number";
    }

    return "This number is an odd number";
}

module.exports = checkEven;
