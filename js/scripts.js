function drawTree (n) {
	for ( var i = 1 ; i < n; i++) {
		var pop = ' ';
		var space = '';
		
		for (var j= 1; j < n-i; j++ ) {
			space = space + pop
		}
		var star = space + '*';
		for ( var k = 1 ; k < i*2-1; k++) {
			star += '*';
		}
		console.log(star);
	}	
}

drawTree(10);