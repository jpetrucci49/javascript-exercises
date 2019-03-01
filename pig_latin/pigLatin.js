function translate(str) {
	const words = str.split(' ').map(word => {
		// use regex capture groups to select the start and end of a split
		// first match to capture is 'qu'. if not present, match remaining constants
		// second capture is whatever remains after the first
		const match = word.match(/^((?:qu|[bcdfghjklmnpqrstvwxz])*)(.*)$/)
		// match returns an array containing the initial word at index 0
		// then first segment before the split at index 1
		// then the second segment after the split at index 2
		// return the second segment + the first + ay for each word
		return match[2] + match[1] + "ay"
	})
	return words.join(' ')
}

module.exports = {
	translate
}

