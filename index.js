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
    //4 + 5 = 9
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
        const { tenPhepTinh, soA, soB } = this;
        let dau = '+';
        if(tenPhepTinh === 'TRU') dau = '-';
        if(tenPhepTinh === 'NHAN') dau = '*';
        if(tenPhepTinh === 'CHIA') dau = '/';
        const chuoiPhepTinh = `${soA} ${dau} ${soB}`;
        return `${chuoiPhepTinh} = ${eval(chuoiPhepTinh)}`;
    }
}

const pt1 = new Tinh(4, 5, 'NHAN');
console.log(pt1.getResultString()); //4 + 5 = 9

// eval('4 + 5') // 9
