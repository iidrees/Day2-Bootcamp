var client = require('node-rest-client').client;

var options = {
	proxy: {
		host: "www.google.com",
		port: 80,
		tunnel: false,
		
}

var client = new client(options);

var args = {
	headers: {'Content-Type':'application/json',
	 'content-length': dataStr.length}
	 requestConfig: {
			timeout: 1000,
			keepAlive: true,
		},
		responseConfig: {
			timeout: 1000
		}
	}
};

client.get(client, args, function(data, response) {
	

	response.setEncoding('utf-8');

		var responseStr = '';

		response.on('data', function(data) {
			responseStr = responseStr + data;
			console.log(responseStr)
		});

		response.on('end', function() {
			console.log(responseStr);
			
		});
}).on('error', function(error) {
	console.log(error)
});