let text = 'The quick brown fox jumps over the lazy dog';
text = split.text(' ');
for (let i in text) {
	console.log(i);
}

text = text.replace(/[A-Z || a-z]/g, '');

console.log(text);
