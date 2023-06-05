const express = require('express');
const app = express();
const path = require('path');
const handlebars = require('express-handlebars');

const { addCat, getCats} = require('./data');

//Add handlebars to express
app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}));
app.set('view engine', 'hbs');

//Add third party middleware
app.use(express.urlencoded({ extended: false }));

//Use Css file
app.use(express.static(path.resolve(__dirname, 'public')));

//Add middlewares
app.use((req, res, next) => {
    console.log('Middleware 1');
    next();
})

app.use((req, res, next) => {
    console.log(`HTTP Request ${req.method}: ${req.path}`);
    next();

})

//Route specific middleware
const specificMiddleware = (req, res, next) => {
    console.log('Some spec');
    next();
};

app.get('/specific', specificMiddleware, (req, res) => {
    res.send('Some route')
})


//Express router / Actions
app.get('/', (req, res) => {
    //res.sendFile(path.resolve(__dirname, 'home.html'));
    res.render('index');
})

app.get('/about', (req, res) => {
    res.render('about');
});

                 //Action 
app.get('/cats', (req, res) => {
    const cats = getCats();
    console.log(cats);

    res.render('cats', {cats});
})
.post('/cats', (req, res) => {
    addCat(req.body.name, Number(req.body.age));

    res.status(201).redirect('/cats');
})

//Search cats by id 
app.get('/cats/:catId', (req, res) => {
    const catId = Number(req.params.catId);
    if (!catId) {
        res.status(404).send('cat not found');
        return;
    }
    console.log(req.params);
    res.send(`req with param - ${req.params.catId}`);
})

//Downloads file from server
app.get('/download', (req, res) => {
    res.download(path.resolve(__dirname, 'manual.pdf'))
})

//Opens pdf file in browser
app.get('/manual', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'manual.pdf'));
})



//End of express router

app.listen(5000, (err, res) => {
    if (err) {
        throw err;
    }
    console.log('Hello, world');
})
