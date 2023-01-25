const mongoose = require('mongoose')
const Schema = mongoose.Schema

const albumSchema = new Schema(
    {
        title: {type: String, required: true},
        artist: {type: String},
        notable_songs: {type: String},
        cover: {type: String, default: 'https://as1.ftcdn.net/v2/jpg/03/58/60/38/1000_F_358603890_21vrEGHhfKZv7zUnvpMbG6iSuT0ahUfa.jpg'},
        likes: {type: Number, default: 0, min: 0},
        spotify: {type: String}
    }
)

const Album = mongoose.model('Album', albumSchema)
module.exports = Album
