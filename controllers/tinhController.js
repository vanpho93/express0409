const Tinh = require('../models/Tinh');

module.exports = (req, res) => {
    const { soA, soB, tenPhepTinh } = req.params;
    const t = new Tinh(soA, soB, tenPhepTinh);
    res.send(t.getResultString());
};
