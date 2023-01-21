// Use express's router to route all our API endpoints
const express = require('express');
const router = express.Router();

// Use the weather class we made in ./weather.js to call our method that will get the weather data from the api
const Weather = require("./weather");

// GET Request - statically get the weather data from the weather api
router.get("/weather", async (req, res) => {
    let weather = new Weather();

    // Fixing the params of zipcode and tempMetric for an example GET request
    let weatherData = await weather.getWeatherData(98052, "us");

    // Content that will be sent will be a prettified json
    res.header("Content-Type", 'application/json');
    res.send(JSON.stringify(weatherData, null, 4));
});