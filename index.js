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

app.get('/tinh/:soA/:soB/:tenPhepTinh', (req, res) => {
    const { soA, soB, tenPhepTinh } = req.params;
    const t = new Tinh(soA, soB, tenPhepTinh);
    res.send(t.getResultString());
});

app.listen(3000);


//npm init -y
//npm install express
//node index

class Tinh {
    constructor(soA, soB, tenPhepTinh) {
        this.soA = soA;
        this.soB = soB;
        this.tenPhepTinh = tenPhepTinh;//CONG TRU NHAN CHIA
    }

    getResultString() {
        const { soA, soB } = this;
        const dau = this.getSign();
        const chuoiPhepTinh = `${soA} ${dau} ${soB}`;
        return `${chuoiPhepTinh} = ${eval(chuoiPhepTinh)}`;
    }

    getSign() {
        const { tenPhepTinh } = this;
        if(tenPhepTinh === 'TRU') return '-';
        if(tenPhepTinh === 'NHAN') return '*';
        if(tenPhepTinh === 'CHIA') return '/';
        return '+';
    }
}

// eval('4 + 5') // 9
