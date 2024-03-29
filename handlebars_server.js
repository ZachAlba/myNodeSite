const express = require('express');
const app = express();
const PORT = 1337;
const handlebars = require('express-handlebars').create({defaultLayout:'main'});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

// Navbar middleware
app.use((req, res, next) => {
    // Object to store whether each link is active based on the current page
    const activeLinks = {
        home: req.path === '/index.html',
        about: req.path === '/about.html',
        contact: req.path === '/contact.html',
        services: req.path === '/services.html',
        FAQ: req.path === '/FAQ.html',
        resources: req.path === '/resources.html'
    };
    res.locals.activeLinks = activeLinks;
    next();
});

// static middleware (css, js, images)
app.use(express.static('public'));

// routes
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/index', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about', {
        scripts: '<script src="js/slideshow.js"></script>'
    });
});

app.get('/contact', (req, res) => {
    res.render('contact', {
        scripts: '<script src="js/modernizr.js">\n</script> <script src="js/location.js"></script>\n<script src="js/form.js"></script>'
    });
});

app.get('/services', (req, res) => {
    res.render('services', {
        scripts: '<script src="js/services.js"></script>\n<script src="js/jq_ajax.js"></script>'
    });
});

app.get('/FAQ', (req, res) => {
    res.render('FAQ', {
        scripts: '<script src="js/FAQ.js"></script>'
    });
});

app.get('/resources', (req, res) => {
    res.render('resources');
});


// error middleware
app.use(function(req, res){
    res.status(404);
	res.render('404');
});

app.use(function(err, req, res, next){
	// output the error message
	console.error(err.stack);
    res.status(500);
    res.render('500');
});


// start server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});