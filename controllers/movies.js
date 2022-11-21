const db = require("../models")
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    db.Movie.find({}, (err, movies) => {
        res.render('showMovies', {
            movies: movies,
            tabTitle: 'Movies'
        })
        
    })
})









module.exports = router