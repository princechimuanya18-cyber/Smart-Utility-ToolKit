// function that checks a string or number and returns
// fizz, buzz, or fizzbuzz based on the rules
function fizzBuzz(input) {
    const inputText = String(input ?? "");
    const number = Number(input);
    const vowels = ["a", "e", "i", "o", "u"];

    const hasAorE = inputText.includes("a") || inputText.includes("e");
    const hasIorO = inputText.includes("i") || inputText.includes("o");
    const hasAllVowel = vowels.every((vowel) =>
        inputText.toLowerCase().includes(vowel)
    );

    if (hasAorE || (!Number.isNaN(number) && number % 5 === 0)) {
        return "fizz";
    }

    if (hasIorO || (!Number.isNaN(number) && number % 8 === 0)) {
        return "buzz";
    }

    if (
        hasAllVowel ||
        (!Number.isNaN(number) && number % 5 === 0 && number % 8 === 0)
    ) {
        return "fizzbuzz";
    }

    return "";
}

module.exports = fizzBuzz;
