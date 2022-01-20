const fetchBreedDescription = function (search, callback) {
	const request = require("request");
	request(
		`https://api.thecatapi.com/v1/breeds/search?q=${search}`,
		function (error, response, body) {
			if (error) {
				return callback(error, null);
			}
			const data = JSON.parse(body);
			const breed = data[0];

			if (!breed) {
				return callback("Breed not found", null);
			}

			return callback(null, breed.description);
		}
	);
};

module.exports = { fetchBreedDescription };
