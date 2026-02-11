// a function that checks if a word is palindrome
function isPalindrome(input) {
    const text = String(input ?? "");
    let reversed = "";

    for (let i = text.length - 1; i >= 0; i--) {
        reversed += text[i];
    }

    return reversed === text;
}

module.exports = isPalindrome;
