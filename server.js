var http = require('http');
var fs = require('fs');
const PORT = 1337;

function serveStaticFile(res, path, contentType, responseCode) {
    if (!responseCode){
        responseCode = 200;
    }
    fs.readFile(__dirname + path, (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('500 - Internal Error');
        } else {
            res.writeHead(responseCode, { 'Content-Type': contentType });
            res.end(data);
        }
    }
    );
}

http.createServer((req, res) => {
    var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
    var subdirectory = path.split('/')[1];
    if (subdirectory === 'data') {
        switch(path){
            case '/data/data.html':
                serveStaticFile(res, '/public/data/data.html', 'text/html');
                break;
            case '/data/data.xml':
                serveStaticFile(res, '/public/data/data.xml', 'text/xml');
                break;
            case '/data/data.json':
                serveStaticFile(res, '/public/data/data.json', 'application/json');
                break;
            case '/data/jquery_data.html':
                serveStaticFile(res, '/public/data/jquery_data.html', 'text/html');
                break;
        }
    } else if (subdirectory === 'images') {
        switch(path){
            case '/images/logo.png':
            serveStaticFile(res, '/public/images/logo.png', 'image/png');
            break;
        case '/images/profile.png':
            serveStaticFile(res, '/public/images/profile.png', 'image/png');
            break;
        case '/images/rocks_resize.jpg':
            serveStaticFile(res, '/public/images/rocks_resize.jpg', 'image/jpeg');
            break;
        case '/images/slideshow/balance.jpg':
            serveStaticFile(res, '/public/images/slideshow/balance.jpg', 'image/jpeg');
            break;
        case '/images/slideshow/growing.jpg':
            serveStaticFile(res, '/public/images/slideshow/growing.jpg', 'image/jpeg');
            break;
        case '/images/slideshow/relaxing_water.jpg':
            serveStaticFile(res, '/public/images/slideshow/relaxing_water.jpg', 'image/jpeg');
            break;
        }
    } else if (subdirectory === 'js') {
        switch (path){
            case '/js/animation.js':
                serveStaticFile(res, '/public/js/animation.js', 'text/javascript');
                break;
            case '/js/FAQ.js':
                serveStaticFile(res, '/public/js/FAQ.js', 'text/javascript');
                break;
            case '/js/form.js':
                serveStaticFile(res, '/public/js/form.js', 'text/javascript');
                break;
            case '/js/jq_ajax.js':
                serveStaticFile(res, '/public/js/jq_ajax.js', 'text/javascript');
                break;
            case '/js/jquery.min.js':
                serveStaticFile(res, '/public/js/jquery.min.js', 'text/javascript');
                break;
            case '/js/location.js':
                serveStaticFile(res, '/public/js/location.js', 'text/javascript');
                break;
            case '/js/slideshow.js':
                serveStaticFile(res, '/public/js/slideshow.js', 'text/javascript');
                break;
            case '/js/modernizr.js':
                serveStaticFile(res, '/public/js/modernizr.js', 'text/javascript');
                break;
            case '/js/services.js':
                serveStaticFile(res, '/public/js/services.js', 'text/javascript');
                break;
        }
    }
    else{
    switch (path) {
        case '':
            serveStaticFile(res, '/public/index.html', 'text/html');
            break;
        case '/index':
            serveStaticFile(res, '/public/index.html', 'text/html');
            break;
        case '/contact':
            serveStaticFile(res, '/public/contact.html', 'text/html');
            break;
        case '/about':
            serveStaticFile(res, '/public/about.html', 'text/html');
            break;
        case '/FAQ':
            serveStaticFile(res, '/public/FAQ.html', 'text/html');
            break;
        case '/services':
            serveStaticFile(res, '/public/services.html', 'text/html');
            break;
        case 'resources':
            serveStaticFile(res, '/public/resources.html', 'text/html');
            break;
        case '/css/style.css':
            serveStaticFile(res, '/public/css/style.css', 'text/css');
            break;
        default:
            serveStaticFile(res, '/public/404.html', 'text/html', 404);
            break;
    }
    }
}).listen(PORT);

