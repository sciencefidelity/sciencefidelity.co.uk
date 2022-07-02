const dotenv = require("dotenv")
const NodeGeocoder = require("node-geocoder")

dotenv.config({ path: ".env" })

const options = {
	provider: "google",
	apiKey: process.env.GEOCODER_API_KEY
}

const geocoder = NodeGeocoder(options)

// Using callback
geocoder.geocode("Blackwood Miners Institute", function (err, res) {
	console.log(res)
})

// Or using Promise
// geocoder
// 	.geocode("Blackwood Miners Institute")
// 	.then(function (res) {
// 		console.log(res)
// 	})
// 	.catch(function (err) {
// 		console.log(err)
// 	})
