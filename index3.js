//Palindrome Checker: Create a recursive function to check if a given string is a palindrome (reads the same forwards and backwards), ignoring spaces, punctuation, and capitalization.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}) 

//recuperation du word entrer par le user 

rl.question('Enter a word: ', (word) => {
    // fonction recursive pour verifier si le word est un palindrome
    function isPalindrome(str) {
        // suppression des caracteres non alphanumeriques et en minuscule
        str = str.replace(/[^a-z0-9]/gi, '').toLowerCase();

        // verification si la longueur du mot est inferieure ou egale a 1
        if (str.length <= 1) {
            return `${word} est palindrome`;
        }

        // verification si le premier et le dernier caractere sont identiques
        if (str[0] === str[str.length - 1]) {
            // appel de la fonction recursive pour le mot restant
            return isPalindrome(str.slice(1, -1));
        } else {
            return `${word} est pas palindrome`
        }
    }

    console.log(isPalindrome(word));

    rl.close
    process.exit();
});
