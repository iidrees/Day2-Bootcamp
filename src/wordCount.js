function word(string) {
	var countWord = {}
	var count = 0
	var words = string.split('')
	for (var i =0, i<words.length; i++) {
		if (words[i] === words[i] ) {
			count = count + 1
			return count
			countWord = JSON.parse(words[i]).push(count)

		};
	}
}