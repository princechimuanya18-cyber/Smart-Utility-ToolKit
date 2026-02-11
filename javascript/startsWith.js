// function that checks if a word starts with a vowel
function startsWithVowel(input) {
    const text = String(input ?? "");
    const vowels = "aeiouAEIOU";

    if (vowels.includes(text[0])) {
        return "The word starts with a vowel";
    }

    return "The word starts with a consonant";
}

module.exports = startsWithVowel;
