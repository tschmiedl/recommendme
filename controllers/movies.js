const db = require("../models")
const express = require('express')
const router = express.Router()


// Show All Movies Route
router.get('/', (req, res) => {
    db.Movie.find({}, (err, movies) => {
        res.render('showMovies', {
            movies: movies,
            tabTitle: 'Movies'
        })
        
    })
})

// Get New Movie Page
router.get('/new', (req,res) => {
    res.render('newMovie', {
        tabTitle: "New Movie"
    })
})

// Show One Movie Route
router.get('/:id', (req,res) => {
    db.Movie.findById((req.params.id), (err, movies) => {
        res.render('showOneMovie', {
            movies: movies,
            tabTitle: "movie"
        })

    })
})

// Create New Movie

router.post('/', (req,res) => {
    db.Movie.create(req.body, (err, movies) => {
        res.redirect('/')
    })
})

// Delete Movie route
router.delete('/:id', (req,res) => {
    db.Movie.findByIdAndDelete(req.params.id, (err, movies) => {
        res.redirect('/movies')
    })
})



// Edit Route

router.put('/:id', (req, res) => {
    db.Movie.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, movies) => {
        res.redirect('/movies/' + movies._id)
    })
    
})

router.get('/:id/edit', (req, res) => {
    db.Movie.findById(req.params.id, (err, movies) => {
        res.render("editMovie", {
            movies: movies,
            tabTitle: "Edit Movie"
        })
    })
})


// Like button
router.put('/:id/like', (req, res) => {
    db.Movie.findById(req.params.id, (err, movies) => {
        
        db.Movie.findByIdAndUpdate(req.params.id, {likes: movies.likes + 1}, {new: true}, (err, movies) => {
            res.redirect('/movies/' + movies._id)
        })
    })
   
})











module.exports = router