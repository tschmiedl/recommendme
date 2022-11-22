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
// Show One Movie Route
router.get('/:id', (req,res) => {
    db.Movie.findById((req.params.id), (err, movies) => {
        res.render('showOneMovie', {
            movies:movies,
            tabTitle: movies.title,
        })

    })
})











module.exports = router