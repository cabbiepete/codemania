process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function(text) {
  if (text === '\n')
		process.stdin.pause();
	else
		console.log('entered:' + text);
});
