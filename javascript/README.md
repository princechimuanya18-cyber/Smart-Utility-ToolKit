# Smart Utility Toolkit

Small JavaScript utility functions with a Python wrapper (PyExecJS).

## Project Layout

```
smart_utility/
|-- javascript/
|   |-- checkEven.js
|   |-- checkNumber.js
|   |-- countOccurrences.js
|   |-- filterGreaterThan.js
|   |-- fizzBuzz.js
|   |-- isPalindrome.js
|   |-- numberDivide.js
|   |-- startsWith.js
|   |-- index.js
|   |-- README.md
|-- python/
|   |-- toolkit.py
```

## JavaScript Functions

Each file exports a single function and accepts parameters (no interactive input).

- `checkEven(input)` -> string message about odd/even
- `checkNumber(arrayValues, objectValues)` -> { array: [{value,isNumber}], object: [...] }
- `countOccurrences(input)` -> number of words starting with a vowel
- `filterGreaterThan(numbers, threshold=20)` -> array of numbers above threshold
- `fizzBuzz(input)` -> "fizz", "buzz", "fizzbuzz", or ""
- `isPalindrome(input)` -> boolean
- `numberDivide(input)` -> "I'm", "a", "boy", or error string
- `startsWithVowel(input)` -> string message about starting with vowel

## Python Wrapper (PyExecJS)

`python/toolkit.py` loads the JS functions with PyExecJS and exposes Python wrappers:

```
from python import toolkit

print(toolkit.filter_greater_than([10, 25, 30, 5]))
print(toolkit.is_palindrome("level"))
```

Run the interactive CLI:

```
python python/toolkit.py
```

## Requirements

- Python 3.x
- PyExecJS (`pip install PyExecJS`)
- Node.js available on PATH (required by PyExecJS)
