const app = require('express')();
const http = require('http').createServer(app);
const bodyParser = require('body-parser')
const knex = require('knex')
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(bodyParser.raw());

const {
    router: shoesRouter
} = require('./shoesRouter');

const port = "8000";


app.use('/shoes', shoesRouter)
app.get('/', (req, res) => {
    res.send("<h1>Hello </h1>")
});



http.listen(port, () => console.log(`listening on port ${port}`))