const express = require('express');
const bodyParser = require('body-parser')

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// middlewares
const logger = require('./middlewares/logger');
const auth = require('./middlewares/auth');

// app.use(logger);


// routing section
const usersRoutes = require('./routes/usersRoutes');
const todosRoutes = require('./routes/todosRoutes');

app.use('/todos', todosRoutes);
app.use('/users', auth, logger, usersRoutes);
app.use('/todos', todosRoutes);



app.listen(3000, console.log('server 3000 portunda calisiyor.'));
