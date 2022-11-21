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

router.get('/:id', (req, res) => {
    db.Album.findById((req.params.id), (err,albums) => {
        // res.send(albums.artist)
        res.render('showOneAlbum', {
            albums:albums,
            tabTitle: albums.title
        })
    })
})





module.exports = router