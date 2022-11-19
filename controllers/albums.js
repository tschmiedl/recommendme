const db = require("../models")
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    db.Album.find({}, (err, albums) => {
        res.render('showAlbums', {
            albums: albums,
            tabTitle: 'Albums'
        })
        
    })
})








module.exports = router