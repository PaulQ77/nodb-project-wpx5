const express = require('express')
const bodyParser = require('body-parser')
const control = require('./controller')
const port = 3050


const app = express();

app.use(bodyParser.json());

app.get('/api/movies', control.allMovies )
app.get('/api/movies/:genre', control.selectGenre)
app.post('/api/movies', control.newMovie )
app.put('/api/movies/:id', control.editMovie)
app.delete('/api/movies/:id', control.deleteMovie)



app.listen(port, () => console.log(`You're watchin' flicks on port ${port}`))