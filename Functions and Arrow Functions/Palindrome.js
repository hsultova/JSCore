function solve(input) {
    var isPalindrome = true;
    var word = input[0];

    for (var i = 0; i < word.length / 2; i++) {
        if (word[i] != word[word.length - 1 - i]) {
            isPalindrome = false;
        }
    }
    return isPalindrome;
}