# this is where JS functions are being
# wrapped in Python
from pathlib import Path

import execjs

JS_DIR = Path(__file__).resolve().parent.parent / "javascript"

JS_FILES = [
    "checkEven.js",
    "checkNumber.js",
    "countOccurrences.js",
    "filterGreaterThan.js",
    "fizzBuzz.js",
    "isPalindrome.js",
    "numberDivide.js",
    "startsWith.js",
]


def _load_js_sources() -> str:
    parts = []
    for filename in JS_FILES:
        parts.append((JS_DIR / filename).read_text(encoding="utf-8"))
    return "\n\n".join(parts)


_CTX = execjs.compile(_load_js_sources())


def check_even(value):
    return _CTX.call("checkEven", value)


def check_number(array_values, object_values=None):
    return _CTX.call("checkNumber", array_values, object_values or [])


def count_occurrences(text):
    return _CTX.call("countOccurrences", text)


def filter_greater_than(numbers, threshold=20):
    return _CTX.call("filterGreaterThan", numbers, threshold)


def fizz_buzz(value):
    return _CTX.call("fizzBuzz", value)


def is_palindrome(text):
    return _CTX.call("isPalindrome", text)


def number_divide(value):
    return _CTX.call("numberDivide", value)


def starts_with_vowel(text):
    return _CTX.call("startsWithVowel", text)


def _parse_csv_numbers(raw):
    if raw is None:
        return []
    return [part.strip() for part in str(raw).split(",") if part.strip() != ""]


def _main():
    print("Select a function to run:")
    print("\n1. check_even")
    print("2. check_number")
    print("3. count_occurrences")
    print("4. filter_greater_than")
    print("5. fizz_buzz")
    print("6. is_palindrome")
    print("7. number_divide")
    print("8. starts_with_vowel")

    choice = input("Enter choice (1-8): ").strip()

    if choice == "1":
        value = input("Enter a number: ")
        print(check_even(value))

    elif choice == "2":
        array_raw = input("Enter array values (space-separated): ").strip()
        object_raw = input("Enter object values (comma-separated): ").strip()
        array_values = [v for v in array_raw.split(" ") if v != ""] if array_raw else []
        object_values = _parse_csv_numbers(object_raw)
        print(check_number(array_values, object_values))

    elif choice == "3":
        text = input("Enter text(s): ")
        print(count_occurrences(text))

    elif choice == "4":
        numbers_raw = input("Enter numbers (comma-separated): ")
        threshold_raw = input("Enter threshold (default 20): ").strip()
        numbers = _parse_csv_numbers(numbers_raw)
        threshold = int(threshold_raw) if threshold_raw else 20
        print(filter_greater_than(numbers, threshold))

    elif choice == "5":
        value = input("Enter text or number: ")
        print(fizz_buzz(value))

    elif choice == "6":
        text = input("Enter text: ")
        print(is_palindrome(text))

    elif choice == "7":
        value = input("Enter number: ")
        print(number_divide(value))

    elif choice == "8":
        text = input("Enter text: ")
        print(starts_with_vowel(text))
        
    else:
        print("Invalid choice.")


if __name__ == "__main__":
    _main()
