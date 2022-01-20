const request = require("request");
const search = process.argv[2];
request(
	`https://api.thecatapi.com/v1/breeds/search?q=${search}`,
	function (error, response, body) {
		if (error) {
			console.log(error);
			return;
		}

		const data = JSON.parse(body);
		const breed = data[0];
		if (!breed) {
			console.log("Breed not found");
			return;
		}

		console.log(breed.description);
	}

	//   const search = function (input) {
	//     const data = JSON.parse(body)[0];

	//     if (input === data.id) {
	//       console.log
	//     }
	//   }

	// }
);

// var http = require("https");

// var options = {
// 	method: "GET",
// 	hostname: "api.thecatapi.com",
// 	port: null,
// 	path: "/v1/breeds/search?q=sib",
// 	headers: {
// 		"x-api-key": "DEMO-API-KEY",
// 	},
// };

// var req = http.request(options, function (res) {
// 	var chunks = [];

// 	res.on("data", function (chunk) {
// 		chunks.push(chunk);
// 	});

// 	res.on("end", function () {
// 		var body = Buffer.concat(chunks);
// 		console.log(body.toString());
// 	});

// 	if (typeof body === "string") {
// 		console.log(JSON.parse(body));
// // 	}
// });

// req.end();

// const net = require("net");
// const conn = net.createConnection({
// 	host: "http://example.edu",
// 	port: 80,
// 	path: "/index.html",
// });
// conn.setEncoding("UTF8");

// conn.on("connect", () => {
// 	console.log(`Connected to server!`);
// 	conn.write(`GET / HTTP/1.1\r\n`);
// 	conn.write(`Host: example.edu\r\n`);
// 	conn.write(`\r\n`);
// });

// conn.on("data", (data) => {
// 	console.log(data);
// 	conn.end();
// });
