// a function that checks if an element in an array is a number
// or value in an object is a number
function checkNumber(arrayValues, objectValues) {
    const arrayInput = Array.isArray(arrayValues) ? arrayValues : [];
    const objectInput = Array.isArray(objectValues)
        ? objectValues
        : Object.values(objectValues || {});

    const arrayResults = arrayInput.map((value) => {
        return { value, isNumber: !Number.isNaN(Number(value)) };
    });

    const objectResults = objectInput.map((value) => {
        return { value, isNumber: !Number.isNaN(Number(value)) };
    });

    return { array: arrayResults, object: objectResults };
}

module.exports = checkNumber;
