const db = require('./')

const seed_movies = [
    {
        title: "The Departed",
        director: "Martin Scorsese",
        release_date: "October 6, 2006",
        poster: "https://www.themoviedb.org/t/p/original/jyAgiqVSx5fl0NNj7WoGGKweXrL.jpg",
        review: "Featuring outstanding work from an excellent cast, The Departed is a thoroughly engrossing gangster drama with the gritty authenticity and soupy morality we come to expect from Martin Scorsese",
        likes: 1
    },
    {
        title: "Interstellar",
        director: "Christopher Nolan",
        release_date: "November 7, 2014",
        poster: "https://image.tmdb.org/t/p/w1280/iawqQdFKI7yTUoSkDNP8gyV3J3r.jpg",
        review: "The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
        likes: 1
    },
    {
        title: "Lost In Translation",
        director: "Sofia Coppola",
        release_date: "September 18, 2003",
        poster: "https://image.tmdb.org/t/p/w1280/yDY1LLuMdWA0xO09ciVeDHHJWFr.jpg",
        review: "Two lost souls visiting Tokyo -- the young, neglected wife of a photographer and a washed-up movie star shooting a TV commercial -- find an odd solace and pensive freedom to be real in each other's company, away from their lives in America.",
        likes: 1
    },
    {
        title: "Ratatouille",
        director: "Brad Bird",
        release_date: "June 29, 2007",
        poster: "https://image.tmdb.org/t/p/w1280/cghrtuHdD8uujxQjG8czKQ635AJ.jpg",
        review: "Remy, a resident of Paris, appreciates good food and has quite a sophisticated palate. He would love to become a chef so he can create and enjoy culinary masterpieces to his heart's delight. The only problem is, Remy is a rat. When he winds up in the sewer beneath one of Paris' finest restaurants, the rodent gourmet finds himself ideally placed to realize his dream.",
        likes: 1
    },
    {
        title: "Uncut Gems",
        director: "Benny Safdie, Josh Safdie",
        release_date: "December 25, 2019",
        poster: "https://image.tmdb.org/t/p/w1280/6XN1vxHc7kUSqNWtaQKN45J5x2v.jpg",
        review: "A charismatic New York City jeweler always on the lookout for the next big score makes a series of high-stakes bets that could lead to the windfall of a lifetime. Howard must perform a precarious high-wire act, balancing business, family, and encroaching adversaries on all sides in his relentless pursuit of the ultimate win.",
        likes: 1
    },
    {
        title: "Wedding Crashers",
        director: "David Dobkin",
        release_date: "July 15, 2005",
        poster: "https://image.tmdb.org/t/p/w1280/lFM3lk2zVzC1YFnKm0r6LbFPyRu.jpg",
        review: "John and his buddy, Jeremy are emotional criminals who know how to use a woman's hopes and dreams for their own carnal gain. Their modus operandi: crashing weddings. Normally, they meet guests who want to toast the romantic day with a random hook-up. But when John meets Claire, he discovers what true love – and heartache – feels like.",
        likes: 1
    },
]

const seed_albums = [
    {
        title: "In Rainbows",
        artist: "Radiohead, 15 Step",
        notable_songs: "All I Need, 15 Step",  
        cover: "https://static.stereogum.com/uploads/2017/09/In-Rainbows-1506460221.jpg",
        likes: 1
    },
    {
        title: "Take Care",
        artist: "Drake",
        notable_songs: "Marvin's Room, Cameras",
        cover: "/assets/takecare.jpg",
        likes: 1
    },
    {
        title: "Punk",
        artist: "Young Thug",
        notable_songs: "Yea Yea Yea, Bubbly",
        cover: "/assets/young-thug-punk-cover.jpeg",
        likes: 1
    },
    {
        title: "2000",
        artist: "Joey Bada$$",
        notable_songs: "Show Me, Where I Belong",
        cover: "assets/joey-badass-2000-album-stream.jpeg",
        likes: 1
    },
    {
        title: "6pc Hot - EP",
        artist: "6LACK",
        notable_songs: "Long Nights",
        cover: "/assets/6lack.jpeg",
        likes: 4
    },
    {
        title: "After Hourse",
        artist: "The Weeknd",
        notable_songs: "Snowchild, After Hours",
        cover: "/assets/c73fm7-afterhours-preview-m3.jpg",
        likes: 5
    },
]

db.Movie.deleteMany({}, (err, movies) => {
    if (err) {
        console.log('Error occured in remove', err)
    } else {
        console.log('Removed all movies')

        db.Movie.insertMany(seed_movies, (err, movies) => {
            if (err) {
                console.log('Error occured in insertMany', err)
            } else {
                console.log('Created', movies.length, "movies")
            }
        })
    }
})

db.Album.deleteMany({}, (err, albums) => {
    if (err) {
        console.log('Error occured in remove', err)
    } else {
        console.log('Removed all albums')

        db.Album.insertMany(seed_albums, (err, albums) => {
            if (err) {
                console.log('Error occured in insertMany', err)
            } else {
                console.log('Created', albums.length, "albums")
            }
        })
    }
})
