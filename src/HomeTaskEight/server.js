const express = require('express');
const path = require('path');
const app = express();
const apiHelper = require('./helper/api-call-helper');
require('express-async-errors');


app.get('/', (req, res) => {
    if (req.query !== undefined) {
        if (req.query.city !== undefined && req.query.logo === undefined) {
            const city = req.query.city;
            apiHelper.makeApiCall(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cc38b4051c91911c2bd94f17cb4a625f`)
            .then(response => {
                res.header("Content-Type",'application/json');
                res.send(JSON.stringify(response, null, 4));
            })
            .catch(error => {
                res.status(500).send(error.message);
            })
        }
        else if (req.query.city !== undefined && req.query.logo !== undefined) {
            const city = req.query.city;
            const logo = req.query.logo;
            if (logo === '1') {
                apiHelper.makeApiCall(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cc38b4051c91911c2bd94f17cb4a625f`)
                .then(response => {
                    const iconCode = response.weather[0].icon;
                    return iconCode
                })
                .then((iconCode) => res.send(`<img src='http://openweathermap.org/img/w/${iconCode}.png' alt="wether icon"/>`))
                .catch(error => {
                    res.status(500).send(error.message);
                })
            }
            else {
                apiHelper.makeApiCall(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cc38b4051c91911c2bd94f17cb4a625f`)
                .then(response => {
                    res.header("Content-Type",'application/json');
                    res.send(JSON.stringify(response, null, 4));
                })
                .catch(error => {
                    res.status(500).send(error.message);
                })
            }
        }
    }
    else {
        apiHelper.makeApiCall('http://api.openweathermap.org/data/2.5/find?lat=46.28&lon=30.43&cnt=30&appid=cc38b4051c91911c2bd94f17cb4a625f')
        .then(response => {
            res.header("Content-Type",'application/json');
            res.send(JSON.stringify(response, null, 4));
        })
        .catch(error => {
            res.status(500).send(error.message);
        })
    }
});

app.use((req, res) => {
    res
      .status(404)
      .sendFile(path.join(__dirname, 'public', '404.html'))
});

app.use((err, req, res, next) => {
    res
    .status(500)
    .send({ error: err.message })
});


app.listen(3001, () => {
    console.log('Server is running on 3001 port')
});