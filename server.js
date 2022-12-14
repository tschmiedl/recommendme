// Dependencies

const express = require('express')
const app = express()
const methodOverride = require('method-override');
// access models
require('dotenv').config() 
const db = require('./models')
// access controllers
const moviesCtrl = require('./controllers/movies')
const albumsCtrl = require('./controllers/albums')
const port = process.env.PORT
// Middleware


// set folder for static files
app.use(express.static('public'))

app.set('view engine', 'ejs')

app.use(methodOverride('_method'));

app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    next();
});



// Routes

app.get('/', (req,res) => {
    db.Album.find({}, (err, albums) => {
        db.Movie.find({}, (err, movies) => {
            res.render('home', {
                movies:movies,
                albums:albums,
                tabTitle: 'RecommendMe'
            })
        })
    })
})



app.use('/albums', albumsCtrl)
app.use('/movies', moviesCtrl)


// Listener

app.listen(port, () => {
})