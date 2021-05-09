const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// middlewares
const logger = require('./middlewares/logger');
const auth = require('./middlewares/auth');

// app.use(logger);

// db Config
const db = process.env.MongoURI;
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(console.log('MongoDB connected'))
    .catch(err => { console.log(err) });

// routing section
const usersRoutes = require('./routes/usersRoutes');
const todosRoutes = require('./routes/todosRoutes');

app.use('/users', usersRoutes);
app.use('/todos', todosRoutes);



app.listen(PORT, console.log('server 3000 portunda calisiyor.'));
