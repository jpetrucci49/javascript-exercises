const caesar = function(str, num) {
    let result = ''
    // Reverse a negative shift number (26 alpha characters)
    if (num < 0) {
        return caesar(str, num + 26)
    }
    // loop through the characters
    for (let i = 0; i < str.length; i++) {
        // current character
        let char = str[i]
        // Only target letters. Match a-z regex, case insensitive.
        if (char.match(/[a-z]/i)) {
            // charCode of the character
            const charCode = str.charCodeAt(i)

            // Uppercase letters and Lowercase require different maths
            // Uppercase letters
			if ((charCode >= 65) && (charCode <= 90)) {
                char = String.fromCharCode(((charCode - 65 + num) % 26) + 65)
            }
            // Lowercase letters
            else if ((charCode >= 97) && (charCode <= 122)) {
                char = String.fromCharCode(((charCode - 97 + num) % 26) + 97)
            }
        }
        // Concat the encoded character onto the result
        result += char
    }
    return result
}

module.exports = caesar
