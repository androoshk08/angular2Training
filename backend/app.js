/**
 * Created by training on 6/12/2018.
 */
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(express.static(_dirname)); //setare pentru cale relativa

app.listen(3001, function() {
    console.log('Hey!');
});