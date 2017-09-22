const express = require('express');

const app = express();

//route - link
app.get('/', (req, res) => {
    res.send('<h3>Hello</h3>');
});

app.get('/about', (req, res) => res.send('Khoa Pham Training'));

app.get('/sayhello/:ten/:tuoi', (req, res) => {
    const { ten, tuoi } = req.params;
    res.send(`Xin chao toi la ${ten}, ${tuoi} tuoi`);
});

app.listen(3000);


//npm init -y
//npm install express
//node index