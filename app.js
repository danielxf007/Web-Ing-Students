const express = require('express');
const morgan = require('morgan');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
// Intializations
const app = express();

// Settings
app.set('port', process.env.PORT || 3002);
app.engine('.hbs', exphbs());
app.set('view engine', '.hbs');


// Routes
app.use(require('./routes/index'));

// Starting
app.listen(app.get('port'), () => {
    console.log('Server is in port', app.get('port'));
  });