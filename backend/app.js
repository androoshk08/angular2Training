/**
 * Created by training on 6/12/2018.
 */
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
var corsVar = require(`cors`);

const app = express();
app.use(bodyParser.json());
app.use(corsVar());
app.use(express.static(__dirname)); //setare pentru cale relativa
app.use(bodyParser.urlencoded({extended: true}));

var movies = [
    {"title": "Ghostbusters"},
    {"title": "Star Wars"},
    {"title": "Batman begins"}
];

app.get('/', function(req, res) {
   // res.sendFile('index.html');
    res.sendFile(path.join(__dirname, '/index.html'));//path-uri relative
});

app.get('/movies', function(req, res) {
    res.send(movies);
});

app.get('/movie/:id', function(req, res) {
    var id = req.params.id;
    console.log("movie parameter " +id);
    //res.send(movies.find((item)=>item.id == id));
    res.send(movies[id]);
});

app.post('/movies', function(req, res) {
   console.log(req.body.title);
   movies.push({title: req.body.title});
   res.send({status: 'OK'});
   //res.contentType('application/json');
});

//delete
app.delete('/movies', function(req, res) {
    var query = require('url').parse(req.url,true).query;
    var movie = query.movie;
    console.log("console: " + movie);
    var index = movies.indexOf(movie, 0);
    console.log("index " + index);
    console.log("movies: " + movies);
    movies.splice(index, 1);

    res.send('OK');
});

//put
app.put('/movies', function(req, res) {
    console.log(req.body.title);
    movies.push({title: req.body.title});
    res.send('OK');
});

app.get('/api/error', function (req, res) {
    res.status(500);
    res.send({error: 'not working'});
});

app.listen(3001, function() {
    console.log('Hey!');
});