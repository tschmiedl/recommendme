const mongoose = require('mongoose')
const Schema = mongoose.Schema

const movieSchema = new Schema(
    {
        title: {type: String, required: true},
        director: {type: String},
        release_date: {type: String},
        poster: {type: String, default: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/football%2Csoccer%2Csport%2Cevent-design-template-31189bebe42fe7f743327895731b60ae_screen.jpg'},
        review: {type: String},
        likes: {type: Number, default: 0, min: 0}
    }
)

const Movie = mongoose.model('Movie', movieSchema)
module.exports = Movie

