function drawTree (n) {
	for (var i = 0; i < n; i++) {
		var line = '';
		
		for (var j = 0; j < n - i -1; j++ ) {
			line += ' ';
		}
		for (var k = 0; k <= i * 2; k++) {
			line += '*';
		}
		console.log(line);
	}	
}

drawTree(10);
