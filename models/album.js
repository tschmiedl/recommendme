const mongoose = require('mongoose')
const Schema = mongoose.Schema

const albumSchema = new Schema(
    {
        title: {type: String, required: true},
        artist: {type: String},
        notable_songs: {type: String},
        cover: {type: String, default: 'https://img.freepik.com/premium-vector/vector-3d-realistic-blank-cd-dvd-with-paper-cover-case-box-set-closeup-isolated-white-background-design-template-mockup-cd-packaging-copy-space-top-view_153563-2891.jpg'},
        likes: {type: Number, default: 0, min: 0}
    }
)

const Album = mongoose.model('Album', albumSchema)
module.exports = Album
