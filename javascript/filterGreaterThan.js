// a function that filters numbers greater than
// 20 in an array and pushes them into a new array
function filterGreaterThan(numbers, threshold = 20) {
    const arrayInput = Array.isArray(numbers) ? numbers : [];
    const parsed = arrayInput
        .map((value) => Number(value))
        .filter((value) => !Number.isNaN(value));

    const result = [];

    for (let i = 0; i < parsed.length; i++) {
        if (parsed[i] > threshold) {
            result.push(parsed[i]);
        }
    }

    return result;
}

module.exports = filterGreaterThan;
