const express         = require('express');
const morgan          = require('morgan');
const bodyParser      = require('body-parser');
const mongoose        = require('mongoose');
const config          = require('./config/database');
const path            = require('path');

mongoose.Promise = global.Promise
mongoose.connect(config.uri, (err) => {
    if (err) {
      console.log('not connect to database: ', err );
    } else {
        console.log(`Connected to database ${config.db}`);
    }
   
});

const app = express();
const port = 4500 || process.env.port;

//Middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/client/dist/'));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + 'client/dist/index.html'));
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
