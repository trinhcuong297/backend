

const http = require('http');
const fs = require('fs');

const hostname = '76.76.21.22';
const port = 443;

fs.readFile('index.json',(err, json) => {
if (err) {
	throw err;
	}
	const server = http.createServer((req, res) => {
		res.statusCode  =200;
		res.setHeader('Content-type','text/json');
		res.write(json);
		res.end();
	});

	server.listen(port, hostname,() => {
		console.log("Server started at port", port);
	});
});
