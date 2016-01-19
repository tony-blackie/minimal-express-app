var express = require('express');
var app = express();

app.use(express.static('public'));	// this serves our public directory, which shows us index.html at localhost:3000

app.get('/hello', function(req, res) { //just type this url to get here
	res.send('Hello World!');
});

app.get('/jediList', function(req, res) {	//push the button to get this json
	var json = [
		{
			"name": "Luke Skywalker",
			"title": "Jedi"
		},
		{
			"name": "Dart Veider",
			"title": "Sith"
		}
	];
	res.send(json);
});

app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
});