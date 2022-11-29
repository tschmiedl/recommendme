const mongoose = require("mongoose");
require('dotenv').config() 
// connect to MongoDB via mongoose
const connectionString = process.env.MONGODBURI
mongoose.connect(
    connectionString,
    { useNewUrlParser: true, useUnifiedTopology: true }
);

// console.log() connection status
mongoose.connection.on('connected', () => {
});

mongoose.connection.on('disconnected', () => {
});

mongoose.connection.on('error', (error) => {
});

// access models
module.exports.Album = require("./album.js");
module.exports.Movie = require("./movie.js");