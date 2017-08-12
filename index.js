const express         = require('express');
const morgan          = require('morgan');
const bodyParser      = require('body-parser');


const app = express();
const port = 4500 || process.env.port;

//Middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Server setup complete');
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
