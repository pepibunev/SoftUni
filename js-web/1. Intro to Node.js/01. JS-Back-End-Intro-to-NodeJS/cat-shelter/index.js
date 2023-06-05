const http = require('http');
const fs = require('fs');




const server = http.createServer(async (req, res) => {
    console.log(req.url);

    res.writeHead(200, {
        "Content-Type": "text/html"
    });

    if (req.url == '/styles/site.css'){
        res.writeHead(200, {
            "Content-Type": "text/css"
        });

        const css = fs.readFileSync('./content/styles/site.css');
        res.write(css);
        res.end();
    }

    if (req.url == '/' && req.method == 'GET'){
        res.writeHead(200, {
            "Content-Type": "text/html"
        });

        const catCard = require('./handlers/cats.js');
        catCard(req, res);
        
        // const homeHtml = fs.readFileSync('./views/home/index.html');
        // res.write(homeHtml);
        // res.end();

    } else if (req.url == '/cats/add-breed'){
        res.writeHead(200, {
            "Content-Type": "text/html"
        });

        const addBreedHtml = fs.readFileSync('./views/addBreed.html');
        res.write(addBreedHtml);
        res.end();

    } else if (req.url == '/cats/add-cat'){
        res.writeHead(200, {
            "Content-Type": "text/html"
        });

        const addCatHtml = fs.readFileSync('./views/addCat.html');
        res.write(addCatHtml);
        res.end();
    }
    
    res.end();
});

server.listen(5000, () => console.log('This server is running on port 5000...'));
