//-----Définition des modules
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var path = require('path');
const mongoose = require("mongoose");
const fileUpload = require('express-fileupload');
mongoose.connect('mongodb://localhost/dealabs');

app.use('/uploads', express.static('uploads'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

//-----appel des routes
app.use('/', require('./Deal/route'));  
app.use('/',require('./User/route'));


app.listen(8282);
console.log("serveur démarré sur http://localhost:8282");

module.exports = app;
