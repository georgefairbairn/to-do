const express = require('express');
const controller = require('./controllers/todoController');

const app = express();

// set up template engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'));

//fire controllers
controller(app);

app.listen(3000);
console.log('Listening on port 3000...');
