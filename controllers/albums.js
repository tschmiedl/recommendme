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


// Get New Album Page
router.get('/new', (req,res) => {
    res.render('newAlbum', {
        tabTitle: "New Album"
    })
})
// Show One Album Page
router.get('/:id', (req, res) => {
    db.Album.findById((req.params.id), (err,albums) => {
        // res.send(albums.artist)
        res.render('showOneAlbum', {
            albums:albums,
            tabTitle: albums.title
        })
    })
})

// Create New Album 

router.post('/', (req,res) => {
    db.Album.create(req.body, (err, albums) => {
        res.redirect('/')
    })
})

// Delete album route
router.delete('/:id', (req,res) => {
    db.Album.findByIdAndDelete(req.params.id, (err, albums) => {
        res.redirect('/')
    })
})



// Edit Route

router.put('/:id', (req, res) => {
    db.Album.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, albums) => {
        res.redirect('/albums/' + albums._id)
    })
    
})

router.get('/:id/edit', (req, res) => {
    db.Album.findById(req.params.id, (err, albums) => {
        res.render("editAlbum", {
            albums: albums,
            tabTitle: "Edit Album"
        })
    })
})








module.exports = router