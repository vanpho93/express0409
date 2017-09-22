const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('<h3>Hello</h3>');
});

app.get('/about', (req, res) => res.send('Khoa Pham Training'));

app.get('/sayhello/:ten/:tuoi', (req, res) => {
    const { ten, tuoi } = req.params;
    res.send(`Xin chao toi la ${ten}, ${tuoi} tuoi`);
});

app.get('/tinh/:soA/:soB/:tenPhepTinh', require('./controllers/tinhController'));

app.listen(3000);
