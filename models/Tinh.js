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

module.exports = Tinh;
