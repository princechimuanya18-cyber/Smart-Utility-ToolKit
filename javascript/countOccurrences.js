// a function used to count the number of occurrences
// for words in an array starting with a vowel
function countOccurrences(input) {
    const words = Array.isArray(input)
        ? input
        : String(input || "").split(" ").filter(Boolean);

    const vowels = "aeiouAEIOU";
    let count = 0;

    for (const word of words) {
        if (word[0] && vowels.includes(word[0])) {
            count++;
        }
    }

    return count;
}

module.exports = countOccurrences;
