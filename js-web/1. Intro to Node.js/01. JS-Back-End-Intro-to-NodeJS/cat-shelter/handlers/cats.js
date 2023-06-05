const fs = require('fs');

function catCard(req, res) {
    fs.readFile('./views/home/index.html', (err, data) => {
        if (err) {
            throw err;
        } else {
            const catsList = require('../data/cat.json');

            let card = catsList.cats.map(cat =>
                `
                <li>
                <img src="https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_1280.jpg" alt="${cat.name}">
                <h3>${cat.name}</h3>
                <p><span>Breed: </span>${cat.breed}</p>
                <p><span>Description: </span>${cat.description}</p>
                <ul class="buttons">
                    <li class="btn edit"><a href="">Change Info</a></li>
                    <li class="btn delete"><a href="">New Home</a></li>
                </ul>
                </li>
                `
            );
            
            data = data.toString().replace('{{cats}}', card.join(''));
            res.write(data);
            res.end();
        }
    });
};

module.exports = catCard;

