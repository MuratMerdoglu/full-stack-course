const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;

const usersRoot = require('./routes/users.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



// rooting bölümü
app.use('/users', usersRoot);



app.listen(PORT, () => {
    console.log(`Server ${PORT} portunda calisiyor`);
});





