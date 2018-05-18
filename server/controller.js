
var movies = [

    {
        id  : 1,
        poster : 'https://ia.media-imdb.com/images/M/MV5BOTlmMWU5YTQtOWMxMi00OWE0LTg2MDItMjEyZDBjNWY0NDdhL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UX140_CR0,0,140,209_AL_.jpg',
        genre : 'Adventure',
        title : 'The Goonies',
        year : 1985,
        watched : "Not Yet"
    },
    
    {
        id  : 2,
        poster : 'https://ia.media-imdb.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX140_CR0,0,140,209_AL_.jpg',
        genre : 'Adventure',
        title : 'Back to the Future',
        year : 1985,
        watched : "Not Yet"
    },
    
    {
        id  : 3,
        poster : 'https://ia.media-imdb.com/images/M/MV5BNTkzY2YzNmYtY2ViMS00MThiLWFlYTEtOWQ1OTBiOGEwMTdhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX140_CR0,0,140,209_AL_.jpg',
        genre : 'Action',
        title : 'The Karate Kid',
        year : 1984,
        watched : "Not Yet"
    },
    
    {
        id  : 4,
        poster : 'https://ia.media-imdb.com/images/M/MV5BMTQ2ODFlMDAtNzdhOC00ZDYzLWE3YTMtNDU4ZGFmZmJmYTczXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX140_CR0,0,140,209_AL_.jpg',
        genre : 'Sci-Fi',
        title : 'E.T. the Extra-Terrestrial',
        year : 1982,
        watched : "Not Yet"
    },
    
    {
        id  : 5,
        poster : 'https://ia.media-imdb.com/images/M/MV5BMTkxMjYyNzgwMl5BMl5BanBnXkFtZTgwMTE3MjYyMTE@._V1_UX140_CR0,0,140,209_AL_.jpg',
        genre : 'Comedy',
        title : 'Ghostbusters',
        year : 1984,
        watched : "Not Yet"
    },
    
    {
        id  : 6,
        poster : 'https://ia.media-imdb.com/images/M/MV5BMjA0ODEzMTc1Nl5BMl5BanBnXkFtZTcwODM2MjAxNA@@._V1_UX140_CR0,0,140,209_AL_.jpg',
        genre : 'Adventure',
        title : 'Raiders of the Lost Ark',
        year : 1981,
        watched : "Not Yet"
    },
    
    {
        id  : 7,
        poster : 'https://ia.media-imdb.com/images/M/MV5BZDdmNjBlYTctNWU0MC00ODQxLWEzNDQtZGY1NmRhYjNmNDczXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY209_CR0,0,140,209_AL_.jpg',
        genre : 'Comedy',
        title : 'Beetlejuice',
        year : 1988,
        watched : "Not Yet"
    },
    
    {
        id  : 8,
        poster : 'https://ia.media-imdb.com/images/M/MV5BMTMyMTE3OTk3NF5BMl5BanBnXkFtZTcwOTkwNDc3NA@@._V1_UX140_CR0,0,140,209_AL_.jpg',
        genre : 'Sci-Fi',
        title : 'WarGames',
        year : 1983,
        watched : "Not Yet"
    },
    
    {
        id  : 9,
        poster : 'https://ia.media-imdb.com/images/M/MV5BNTE5NDQ1NTMyNl5BMl5BanBnXkFtZTcwNjY5MDQ3NA@@._V1_UY209_CR0,0,140,209_AL_.jpg',
        genre : 'Comedy',
        title : 'Three Amigos!',
        year : 1986,
        watched : "Not Yet"
    },
    
    {
        id  : 10,
        poster : 'https://ia.media-imdb.com/images/M/MV5BY2QwYmFmZTEtNzY2Mi00ZWMyLWEwY2YtMGIyNGZjMWExOWEyXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_UY209_CR0,0,140,209_AL_.jpg',
        genre : 'Action',
        title : 'Predator',
        year : 1987,
        watched : "Not Yet"
    },
    
    {
        id  : 11,
        poster : 'https://ia.media-imdb.com/images/M/MV5BZWVlYzU2ZjQtZmNkMi00OTc3LTkwZmYtZDVjNmY4OWFmZGJlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX140_CR0,0,140,209_AL_.jpg',
        genre : 'Action',
        title : 'RoboCop',
        year : 1987,
        watched : "Not Yet"
    },
    
    {
        id  : 12,
        poster : 'https://ia.media-imdb.com/images/M/MV5BZjQxYTA3ODItNzgxMy00N2Y2LWJlZGMtMTRlM2JkZjI1ZDhhXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_UX140_CR0,0,140,209_AL_.jpg',
        genre : 'Action',
        title : 'Top Gun',
        year : 1986,
        watched : "Not Yet"
    },
    
    {
        id  : 13,
        poster : 'https://ia.media-imdb.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg',
        genre : 'Sci-Fi',
        title : 'The Empire Strikes Back',
        year : 1980,
        watched : "Not Yet"
    },
    
    {
        id : 14,
        poster : 'https://ia.media-imdb.com/images/M/MV5BNDk0OTM1Mzk3M15BMl5BanBnXkFtZTgwNDg2NjIyMDE@._V1_UY209_CR0,0,140,209_AL_.jpg',
        genre : 'Comedy',
        title : 'Big',
        year : 1988,
        watched : "Not Yet"
    },
    
    {
        id  : 15,
        poster : 'https://ia.media-imdb.com/images/M/MV5BMDA0NjZhZWUtNmI2NC00MmFjLTgwZDYtYzVjZmNhMDVmOTBkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX140_CR0,0,140,209_AL_.jpg',
        genre : 'Comedy',
        title : "Ferris Bueller's Day Off",
        year : 1986,
        watched : "Not Yet"
    },
    
    {
        id  : 16,
        poster : 'https://ia.media-imdb.com/images/M/MV5BMGM4M2Q5N2MtNThkZS00NTc1LTk1NTItNWEyZjJjNDRmNDk5XkEyXkFqcGdeQXVyMjA0MDQ0Mjc@._V1_UY209_CR0,0,140,209_AL_.jpg',
        genre : 'Adventure',
        title : 'The Princess Bride',
        year : 1987,
        watched : "Not Yet"
    },
    
    {
        id  : 17,
        poster : 'https://ia.media-imdb.com/images/M/MV5BODBmOWU2YWMtZGUzZi00YzRhLWJjNDAtYTUwNWVkNDcyZmU5XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_UX182_CR0,0,182,268_AL_.jpg',
        genre : 'Action',
        title : 'First Blood',
        year : 1982,
        watched : "Not Yet"
    },
    
    {
        id  : 18,
        poster : 'https://ia.media-imdb.com/images/M/MV5BODE1MDczNTUxOV5BMl5BanBnXkFtZTcwMTA0NDQyNA@@._V1_UX182_CR0,0,182,268_AL_.jpg',
        genre : 'Adventure',
        title : 'The Terminator',
        year : 1984,
        watched : "Not Yet"
    },
    
    {
        id  : 19,
        poster : 'https://ia.media-imdb.com/images/M/MV5BMzZhNjYyZDYtZmE4MC00M2RlLTlhOGItZDVkYTVlZTYxOWZlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UX182_CR0,0,182,268_AL_.jpg',
        genre : 'Sci-Fi',
        title : 'Tron',
        year : 1982,
        watched : "Not Yet"
    },
    
    {
        id  : 20,
        poster : 'https://ia.media-imdb.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg',
        genre : 'Sci-Fi',
        title : 'Blade Runner',
        year : 1982,
        watched : "Not Yet"
    },

    {
        id  : 21,
        poster : 'https://ia.media-imdb.com/images/M/MV5BNzFjZmM1ODgtMDBkMS00NWFlLTg2YmUtZjc3ZTgxMjE1OTI2L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UX182_CR0,0,182,268_AL_.jpg',
        genre : 'Horror',
        title : 'A Nightmare on Elm Street',
        year : 1984,
        watched : "Not Yet"
    },

    {
        id  : 22,
        poster : 'https://ia.media-imdb.com/images/M/MV5BNWMxYTYzYWQtNGZmNy00MTg5LTk1N2MtNzQ5NjQxYjQ5NTJhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg',
        genre : 'Horror',
        title : 'Friday the 13th',
        year : 1980,
        watched : "Not Yet"
    },

    {
        id  : 23,
        poster : 'https://images-na.ssl-images-amazon.com/images/I/719AMX2PRKL._SY445_.gif',
        genre : 'Horror',
        title : "Child's Play",
        year : 1987,
        watched : "Not Yet"
    },

    {
        id  : 24,
        poster : 'https://ia.media-imdb.com/images/M/MV5BYjBlNTBhYWQtMzg5Yi00NDA2LWJmMjYtZmM0ODhiYzkwYmY5XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg',
        genre : 'Horror',
        title : "Pet Sematary",
        year : 1989,
        watched : "Not Yet"
    }
    ]

    var id = 25;

    module.exports = {
        allMovies(req, res){
            res.status(200).json(movies)
        },

        selectGenre(req, res){
            const{ genre } = req.params;
            let list = movies.filter(e => {
                { genre }
                if(e.genre === genre){
                    return e;
                }
            })
            res.status(200).json(list);
        },

        newMovie (req, res){
            
            const { poster, genre, title, year, watched} = req.body;

            movies.push ( {
                id : id, 
                poster : poster,
                genre : genre, 
                title : title, 
                year : year,
                watched : watched
            } );

            id++

            let updateList = movies.filter(movie => {
                return movie.genre == genre
            })

            res.status(200).send(updateList);
        },

        // hasWatched(req, res){
        //     const editID = req.params.id;
        //     const editIndex = movies.forEach((e, i, arr) => {
        //         if(e.id === editID){
        //             return(e.watched = "Yep")
        //         }
        //     })
        // },

        deleteMovie(req, res){
            const deleteID = req.params.id;
            const editID = movies.forEach((e, i, arr) => {
                if(e.id === parseInt(deleteID)){
                    movies.splice(i, 1);
                }
            })
            res.status(200).send(movies);
        },

        editMovie(req, res) {
            const editId = req.params.id;
            const editIndex = movies.forEach((e, i, arr) => {
              if (e.id === parseInt(editId)) {
                return (e.watched = "Yep");
              }
            });
            res.status(200).json(movies);
          }

    }